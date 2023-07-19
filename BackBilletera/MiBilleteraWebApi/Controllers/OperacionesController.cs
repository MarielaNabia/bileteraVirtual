using MiBilleteraWebApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MiBilleteraWebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class OperacionesController : ControllerBase
    {
        private readonly Pil2022Context context;

        public OperacionesController(Pil2022Context context)
        {
            this.context = context;
        }

            /// <summary>
            /// Recupera el listado de las operaciones registradas en la base de datos ordenadas en forma decreciente.
            /// </summary>
            /// <param name="id">Id del usuario</param>
            /// <returns>Lista de Operaciones</returns>
            [HttpGet("{id}")]
            [Produces(typeof(List<Operacion>))]
        public List<Operacion> Get(int id)
            {
                var lista = context.Operaciones.ToList().Where(x => x.IdUsuario == id).OrderByDescending(x => x.FechaOperacion);
                return lista.ToList();
            }



    }
}