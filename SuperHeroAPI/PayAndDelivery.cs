namespace SuperHeroAPI
{
    public class PayAndDelivery
    {
        public int Id { get; set; }
        public string Fullname { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
        public string City { get; set; } = string.Empty;
        public int Pcode { get; set; }
        public string Cardholder { get; set; } = string.Empty;
        public string Cardnumber { get; set; } = string.Empty;
        public int Cvv { get; set; }
    }
}
