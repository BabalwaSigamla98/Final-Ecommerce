using Microsoft.AspNetCore.Mvc;

namespace SuperHeroAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly DataContext _context;

        public UserController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<User>>> Get()
        {
            return Ok(await _context.UserTable.ToListAsync());
        }

        [HttpGet("{Id}")]
        public async Task<ActionResult<User>> Get(int Id)
        {
            var siba = await _context.UserTable.FindAsync(Id);
            if (siba == null)
                return BadRequest("User not found.");
            return Ok(siba);
        }

        [HttpPost]
        public async Task<ActionResult<List<User>>> AddHero(User siba)
        {
            _context.UserTable.Add(siba);
            await _context.SaveChangesAsync();

            return Ok(await _context.UserTable.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<User>>> UpdateUser(User request)
        {
            var dbUser = await _context.UserTable.FindAsync(request.Id);
            if (dbUser == null)
                return BadRequest("User not found.");

            dbUser.Name = request.Name;
            dbUser.Surname = request.Surname;
            dbUser.Username = request.Username;
            dbUser.Password = request.Password;
            dbUser.CPassword = request.CPassword;
            dbUser.IdNumber = request.IdNumber;

            await _context.SaveChangesAsync();

            return Ok(await _context.UserTable.ToListAsync());
        }

        [HttpDelete("{Id}")]
        public async Task<ActionResult<List<User>>> Delete(int Id)
        {
            var dbUser = await _context.UserTable.FindAsync(Id);
            if (dbUser == null)
                return BadRequest("User not found.");

            _context.UserTable.Remove(dbUser);
            await _context.SaveChangesAsync();

            return Ok(await _context.UserTable.ToListAsync());
        }
    }
}
