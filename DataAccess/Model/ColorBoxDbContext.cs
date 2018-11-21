using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace colorbox
{
    public class ColorBoxDbContext : DbContext
    {
        public ColorBoxDbContext(DbContextOptions<ColorBoxDbContext> options)
    : base(options)
        {
        }
        
        public DbSet<ColorBox> ColorBoxes { get; set; }

        public DbSet<UserPreference> UserPreferences { get; set; }
    }
}