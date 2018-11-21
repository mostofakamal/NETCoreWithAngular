using System;
using System.Collections;
using System.Collections.Generic;
namespace colorbox
{
    public class ColorBoxSession
    {
        public int Id { get; set; }

        public DateTime LastSavedTime { get; set; }

        public List<ColorBox> ColorBoxes { get; set; }

        public UserPreference UserPreference { get; set; }
    }
}