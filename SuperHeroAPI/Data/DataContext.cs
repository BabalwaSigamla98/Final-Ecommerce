using Microsoft.EntityFrameworkCore;

namespace SuperHeroAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<SuperHero> SuperHeroes { get; set; }
        public DbSet<Cart> CartTable { get; set; }
        public DbSet<Login> Logins { get; set; }
        public DbSet<Product> ProductsTable { get; set; }
        public DbSet<User> UserTable { get; set; }
        public DbSet<PayAndDelivery> PayAndDeliveriesTable { get; set; }
    }
}
