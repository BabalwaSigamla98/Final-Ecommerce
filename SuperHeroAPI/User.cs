using System.ComponentModel.DataAnnotations;

namespace SuperHeroAPI
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Surname { get; set; } = string.Empty;
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string CPassword { get; set; } = string.Empty;
        public int IdNumber { get; set; }
    }
}
