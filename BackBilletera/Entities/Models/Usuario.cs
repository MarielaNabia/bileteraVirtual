using System;
using System.Collections.Generic;

namespace MiBilleteraWebApi.Models
{
    public partial class Usuario
    {
        public Usuario()
        {
        }

        public int IdUsuario { get; set; }
        public string Nombre { get; set; } = null!;
        public string Apellido { get; set; } = null!;
        public string Dni { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;
        public DateTime FechaAlta { get; set; }
        public DateTime? FechaBaja { get; set; } = null;

    }
}
