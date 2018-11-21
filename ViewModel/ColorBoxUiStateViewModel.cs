using System.Collections.Generic;
using System;
using colorbox.ViewModel;
namespace colorbox.ViewModel
{
    public class ColorBoxUiStateViewModel
    {
        public string SelectedColor { get; set; }

        public List<ColorBoxViewModel> Boxes { get; set; }

        public string LastUpdatedTime { get; set; }

    }
}
