using System.ComponentModel.DataAnnotations.Schema;

namespace colorbox
{
    public class ColorBox
    {
        public int Id { get; set; }
        public string Color { get; set; }

        public bool IsSelected { get; set; }

        public int SessionId { get; set; }

        [ForeignKey(nameof(SessionId))]
        public ColorBoxSession ColorBoxSession { get; set; }
    }
}