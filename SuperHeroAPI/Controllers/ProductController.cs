using Microsoft.AspNetCore.Mvc;

namespace SuperHeroAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : Controller
    {
        private readonly DataContext _context;

        public ProductController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> Get()
        {
            return Ok(await _context.ProductsTable.ToListAsync());
        }

        [HttpGet("{Id}")]
        public async Task<ActionResult<Product>> Get(int Id)
        {
            var siba = await _context.UserTable.FindAsync(Id);
            if (siba == null)
                return BadRequest("Product not found.");
            return Ok(siba);
        }

        [HttpPost]
        public async Task<ActionResult<List<Product>>> AddProduct(Product siba)
        {
            _context.ProductsTable.Add(siba);
            await _context.SaveChangesAsync();

            return Ok(await _context.ProductsTable.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Product>>> UpdateProduct(Product request)
        {
            var dbProduct = await _context.ProductsTable.FindAsync(request.Id);
            if (dbProduct == null)
                return BadRequest("Product not found.");

            dbProduct.Productname= request.Productname;
            dbProduct. Price= request.Price;
            dbProduct.Image = request.Image;
           

            await _context.SaveChangesAsync();

            return Ok(await _context.ProductsTable.ToListAsync());
        }

        [HttpDelete("{Id}")]
        public async Task<ActionResult<List<SuperHero>>> Delete(int Id)
        {
            var dbProduct = await _context.ProductsTable.FindAsync(Id);
            if (dbProduct == null)
                return BadRequest("Product not found.");

            _context.ProductsTable.Remove(dbProduct);
            await _context.SaveChangesAsync();

            return Ok(await _context.ProductsTable.ToListAsync());
        }
    }
}
