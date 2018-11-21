using System;
using System.Linq;
using colorbox.ViewModel;
using Microsoft.EntityFrameworkCore;

namespace colorbox.Services
{
    public class ColorBoxService : IColorBoxService
    {
        private readonly IRepository _repository;
        public ColorBoxService(IRepository repository)
        {
            this._repository = repository;
        }

        public ColorBoxUiStateViewModel GetColorBoxLastSessionData()
        {

            ColorBoxUiStateViewModel viewModel = new ColorBoxUiStateViewModel();
            var lastSession = _repository.GetQuery<ColorBoxSession>()
             .Include(x => x.ColorBoxes)
             .Include(x => x.UserPreference).OrderByDescending(x => x.Id).FirstOrDefault();
            if (lastSession != null)
            {
                viewModel.SelectedColor = lastSession.UserPreference?.Value;
                viewModel.LastUpdatedTime = lastSession.LastSavedTime.ToString();
                viewModel.Boxes = lastSession.ColorBoxes.Select(x => new ColorBoxViewModel
                {
                    Id = x.Id,
                    color = x.Color,
                    IsSelected = x.IsSelected
                }).OrderBy(x => x.Id).ToList();
            }
            return viewModel;
        }

        public void SaveSessionData(ColorBoxUiStateViewModel viewModel)
        {
            var session = new ColorBoxSession
            {
                LastSavedTime = DateTime.Now
            };
            var userPreference = new UserPreference
            {
                Name = "SelectedColor",
                Value = viewModel.SelectedColor,
                ColorBoxSession = session
            };

            var colorBoxes = viewModel.Boxes.ToList().Select(x => new ColorBox
            {
                ColorBoxSession = session,
                Color = x.color,
                IsSelected = x.IsSelected,
            }).ToList();
            _repository.Add(session);
            _repository.Add(userPreference);
            _repository.AddRange(colorBoxes);
            _repository.SaveChanges();
        }
    }
}