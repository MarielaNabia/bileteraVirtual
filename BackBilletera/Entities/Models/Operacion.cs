using System;
using System.Collections.Generic;

namespace MiBilleteraWebApi.Models
{
    public partial class Operacion
    {
        public int IdOperacion { get; set; }
        public decimal Monto { get; set; }
        public DateTime FechaOperacion { get; set; }
        public int IdUsuario { get; set; }
        public int IdBilletera { get; set; }
        public int IdMoneda { get; set; }
        public int IdTipoOperacion { get; set; }

        //public virtual Billetera IdBilleteraNavigation { get; set; } = null!;
        //public virtual Moneda IdMonedaNavigation { get; set; } = null!;
        //public virtual TipoOperacion IdTipoOperacionNavigation { get; set; } = null!;
        //public virtual Usuario IdUsuarioNavigation { get; set; } = null!;
    }
}
