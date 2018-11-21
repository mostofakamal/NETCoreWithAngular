using System.ComponentModel.DataAnnotations.Schema;

namespace colorbox
{
    public class UserPreference
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public string Value { get; set; }

        public int SessionId { get; set; }

        [ForeignKey(nameof(SessionId))]
        public ColorBoxSession ColorBoxSession { get; set; }
    }
}