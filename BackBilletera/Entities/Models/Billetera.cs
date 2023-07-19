using System;
using System.Collections.Generic;

namespace MiBilleteraWebApi.Models
{
    public partial class Billetera
    {
        public Billetera()
        {
            //Operaciones = new HashSet<Operacion>();
        }
        public int IdBilletera { get; set; }
        public decimal Saldo { get; set; }
        public int IdMoneda { get; set; }
        public int IdUsuario { get; set; }

        //public virtual Moneda IdMonedaNavigation { get; set; } = null!;
        //public virtual Usuario IdUsuarioNavigation { get; set; } = null!;
        //public virtual ICollection<Operacion> Operaciones { get; set; }
    }
}
