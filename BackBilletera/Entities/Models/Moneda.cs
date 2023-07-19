using System;
using System.Collections.Generic;

namespace MiBilleteraWebApi.Models
{
    public partial class Moneda
    {
        public Moneda()
        {
            //Billeteras = new HashSet<Billetera>();
            //Operaciones = new HashSet<Operacion>();
        }

        //Capaz que le hace falta tambien tener un nombre de moneda
        public int IdMoneda { get; set; }
        public string Descripcion { get; set; } = null!;
        public string Tipo { get; set; } = null!;

        //public virtual ICollection<Billetera> Billeteras { get; set; }
        //public virtual ICollection<Operacion> Operaciones { get; set; }
    }
}
