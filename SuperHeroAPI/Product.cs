using System.ComponentModel.DataAnnotations.Schema;

namespace SuperHeroAPI
{
    public class Product
    {
        public int Id { get; set; }
        public string Productname { get; set; } = string.Empty;
        [Column(TypeName = "decimal(18,4)")]
        public decimal Price { get; set; }
        public string Image { get; set; } = string.Empty;
    }
}
