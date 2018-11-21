using colorbox.ViewModel;

namespace colorbox.Services
{
    public interface IColorBoxService
    {
        ColorBoxUiStateViewModel GetColorBoxLastSessionData();
        void SaveSessionData(ColorBoxUiStateViewModel viewModel);
    }
}