using Microsoft.AspNetCore.Mvc;

namespace SuperHeroAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PayAndDeliveryController : Controller
    {
        private readonly DataContext _context;

        public PayAndDeliveryController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<PayAndDelivery>>> Get()
        {
            return Ok(await _context.PayAndDeliveriesTable.ToListAsync());
        }

        [HttpGet("{Id}")]
        public async Task<ActionResult<PayAndDelivery>> Get(int Id)
        {
            var siba = await _context.PayAndDeliveriesTable.FindAsync(Id);
            if (siba == null)
                return BadRequest("PayAndDelivery not found.");
            return Ok(siba);
        }

        [HttpPost]
        public async Task<ActionResult<List<PayAndDelivery>>> AddHero(PayAndDelivery siba)
        {
            _context.PayAndDeliveriesTable.Add(siba);
            await _context.SaveChangesAsync();

            return Ok(await _context.PayAndDeliveriesTable.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<PayAndDelivery>>> UpdateHero(PayAndDelivery request)
        {
            var dbPay = await _context.PayAndDeliveriesTable.FindAsync(request.Id);
            if (dbPay == null)
                return BadRequest("PayAndDelivery not found.");

            dbPay.Fullname = request.Fullname;
            dbPay.Address = request.Address;
            dbPay.City = request.City;
            dbPay.Pcode = request.Pcode;
            dbPay.Cardholder = request.Cardholder;
            dbPay.Cardnumber = request.Cardnumber;
            dbPay.Cvv = request.Cvv;

            await _context.SaveChangesAsync();

            return Ok(await _context.PayAndDeliveriesTable.ToListAsync());
        }

        [HttpDelete("{Id}")]
        public async Task<ActionResult<List<PayAndDelivery>>> Delete(int Id)
        {
            var dbPay = await _context.PayAndDeliveriesTable.FindAsync(Id);
            if (dbPay == null)
                return BadRequest("PayAndDelivery not found.");

            _context.PayAndDeliveriesTable.Remove(dbPay);
            await _context.SaveChangesAsync();

            return Ok(await _context.PayAndDeliveriesTable.ToListAsync());
        }
    }
}
