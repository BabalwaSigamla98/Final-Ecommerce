using System.ComponentModel.DataAnnotations.Schema;

namespace SuperHeroAPI
{
    public class Cart
    {
        public int Id { get; set; }
        public string ProductName { get; set; } =string.Empty;
        [Column(TypeName = "decimal(18,4)")]
        public decimal Price { get; set; }
        public int Quantity { get; set; }
        public string Images { get; set; } = string.Empty;
    }
}
