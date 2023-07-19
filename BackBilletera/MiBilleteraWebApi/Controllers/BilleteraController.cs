using Entities.Models;
using MiBilleteraWebApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MiBilleteraWebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/billetera")]
    [ApiController]
    public class BilleteraController : ControllerBase
    {

        private readonly Pil2022Context context;

        public BilleteraController(Pil2022Context context)
        {
            this.context = context;
        }

        /// <summary>
        /// Registra un nuevo retiro en la base de datos.
        /// </summary>
        /// <param name="retiroBillertera">Operacion realizada</param>
        /// <returns>Operacion Retiro</returns>
        [HttpPost("Retiro")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        /// <response code="200">Registra un nuevo retiro</response> /// <response code="400">No se posee saldo</response> 
        public ActionResult PostRetiro(RetiroBillertera retiroBillertera)
        {

            var retiro = context.Billeteras.FirstOrDefault(x => x.IdUsuario == retiroBillertera.IdUsuario);
            if (retiroBillertera.Saldo == 0)
            {
                return BadRequest("La billetera NO tiene saldo.");
            }
            else
            {
                var montoRetirado = retiro.Saldo - retiroBillertera.Saldo;

                retiro.Saldo = montoRetirado;
                retiro.IdMoneda = 1;
                    


                var operaciones = new Operacion()
                {

                    Monto = retiroBillertera.Saldo,
                    FechaOperacion = DateTime.Now,
                    IdUsuario = retiro.IdUsuario,
                    IdBilletera = retiro.IdBilletera,
                    IdMoneda = 1,
                    IdTipoOperacion = 3,


                };

                context.Add(operaciones);
                context.SaveChanges();
                return Ok(retiro);



            }



        }


        /// <summary>
        /// Registra un nuevo ingreso en la base de datos.
        /// </summary>
        /// <param name="retiroBillertera">Operacion realizada</param>
        /// <returns>Operacion Ingreso</returns>
        [HttpPost("Deposito")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        /// <response code="200">Registra un nuevo ingreso</response> /// <response code="400">No se posee saldo</response> 

        public ActionResult PostIngresar(RetiroBillertera retiroBillertera)
        {


            var retiro = context.Billeteras.FirstOrDefault(x => x.IdUsuario == retiroBillertera.IdUsuario);
            if (retiroBillertera.Saldo == 0)
            {
                return BadRequest("La billetera NO tiene saldo.");
            }
            else
            {
                var montoRetirado = retiro.Saldo + retiroBillertera.Saldo;

                retiro.Saldo = montoRetirado;
                retiro.IdMoneda = 1;

                var operaciones = new Operacion()
                {

                    Monto = retiroBillertera.Saldo,
                    FechaOperacion = DateTime.Now,
                    IdUsuario = retiro.IdUsuario,
                    IdBilletera = retiro.IdBilletera,
                    IdMoneda = 1,
                    IdTipoOperacion = 5,

                };

                context.Add(operaciones);
                context.SaveChanges();
                return Ok(retiro);
            }



        }

        /// <summary>
        /// Recupera el saldo que posee el usuario registrado.
        /// </summary>
        /// <param name="id">Id del usuario</param>
        /// <returns>Saldo Billetera</returns>
        [HttpGet("{id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        /// <response code="200">Confirma el saldo de la billetera</response> /// <response code="404">No se encontro la billetera</response> 
        public ActionResult<Billetera> GetSaldo(int id)
        {


            var billetera = context.Billeteras.FirstOrDefault(x => x.IdUsuario == id);

            if (billetera == null)
            {
                return NotFound();
            }
            return Ok(billetera.Saldo);

        }



    }

}
