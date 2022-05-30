using Microsoft.AspNetCore.Mvc;

namespace SuperHeroAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : Controller
    {
        private readonly DataContext _context;

        public CartController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Cart>>> Get()
        {
            return Ok(await _context.CartTable.ToListAsync());
        }

        [HttpGet("{Id}")]
        public async Task<ActionResult<Cart>> Get(int Id)
        {
            var siba = await _context.CartTable.FindAsync(Id);
            if (siba == null)
                return BadRequest("Cart not found.");
            return Ok(siba);
        }

        [HttpPost]
        public async Task<ActionResult<List<Cart>>> AddHero(Cart siba)
        {
            _context.CartTable.Add(siba);
            await _context.SaveChangesAsync();

            return Ok(await _context.CartTable.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Cart>>> UpdateHero(Cart request)
        {
            var dbCart = await _context.CartTable.FindAsync(request.Id);
            if (dbCart == null)
                return BadRequest("Cart not found.");

            dbCart.ProductName = request.ProductName;
            dbCart.Price = request.Price;
            dbCart.Images = request.Images;
            dbCart.Quantity = request.Quantity;

            await _context.SaveChangesAsync();

            return Ok(await _context.CartTable.ToListAsync());
        }

        [HttpDelete("{Id}")]
        public async Task<ActionResult<List<Cart>>> Delete(int Id)
        {
            var dbCart = await _context.CartTable.FindAsync(Id);
            if (dbCart == null)
                return BadRequest("Cart not found.");

            _context.CartTable.Remove(dbCart);
            await _context.SaveChangesAsync();

            return Ok(await _context.CartTable.ToListAsync());
        }
    }
}
