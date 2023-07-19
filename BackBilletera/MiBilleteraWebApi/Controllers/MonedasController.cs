using MiBilleteraWebApi.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MiBilleteraWebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/monedas")]
    [ApiController]
    public class MonedasController : ControllerBase
    {

        private readonly Pil2022Context context;

        public MonedasController(Pil2022Context context)
        {
            this.context = context;
        }


        // GET: api/monedas
        /// <summary>
        /// Recupera el listado de las monedas registrados en la base de datos.
        /// </summary>
        /// <returns>Lista de Monedas.</returns>
        [HttpGet]
        [Produces(typeof(List<Moneda>))]
        public List<Moneda> Get()
        {
            return context.Monedas.ToList();
        }

        // GET api/monedas/id
        /// <summary>
        /// Recupera la moneda con el ID pasado por parametro.
        /// </summary>
        /// <param name="id">ID de la moneda</param>
        /// <returns>Moneda</returns>
        [HttpGet("{id:int}")]
        [Produces(typeof(Moneda))]
        public ActionResult<Moneda> Get(int id)
        {
            var existeMoneda = context.Monedas.FirstOrDefault(x => x.IdMoneda == id);
            if(existeMoneda == null)
            {
                return NotFound();
            }
            return Ok(existeMoneda);
        }

        // POST api/monedas
        /// <summary>
        /// Registra una nueva moneda en la base de datos.
        /// </summary>
        /// <param name="cliente">Moneda que se quiere registrar</param>
        /// <returns>Moneda registrado</returns>
        /// <response code="200">Registra la nueva moneda</response> /// <response code="400">La moneda ya ha sido registrado</response> 
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult Post(Moneda moneda)
        {
            //esta validacion me parece que mejor seria hacerla por NOMBRE. CAMBIAR ESO EN BD!!
            var existeMoneda = context.Monedas.FirstOrDefault(x => x.IdMoneda == moneda.IdMoneda);
            if (existeMoneda != null)
            {
                return BadRequest("La moneda que quiere registrar, ya se encuentra registrada anteriormente.");
            }
            context.Add(moneda);
            context.SaveChanges();
            return Ok();
        }

        // PUT api/monedas/id
        /// <summary>
        /// Actualiza los datos de una moneda registrada.
        /// </summary>
        /// <param name="id">ID de la moneda</param>
        /// <param name="cliente">Moneda cuyos atributos se actualizaran</param>
        /// <returns>Moneda con datos modificados</returns>
        /// <response code="200">Modifica los datos de la moneda</response> /// <response code="404">El id de la moneda no se encuentra registrado</response> 
        [HttpPut("{id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult Put(int id, Moneda moneda)
        {
            if (moneda.IdMoneda != id)
            {
                return NotFound();
            }
            context.Update(moneda);
            context.SaveChanges();
            return Ok();
        }

        // DELETE api/monedas/id
        /// <summary>
        /// Elimina la moneda con el id pasado por parametro
        /// </summary>
        /// <param name="id">ID de la moneda</param>
        /// <returns>Moneda eliminada</returns>
        /// <response code="200">Confirma la eliminacion de la moneda</response> /// <response code="404">La moneda no se encuentra registrada</response>
        [HttpDelete("{id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult Delete(int id)
        {
            var existeMoneda = context.Monedas.FirstOrDefault(x => x.IdMoneda == id);
            if (existeMoneda == null)
            {
                return NotFound();
            }
            context.Remove(new Moneda() { IdMoneda = id });
            context.SaveChanges();
            return Ok();
        }
    }
}
