using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using colorbox.ViewModel;
using Microsoft.EntityFrameworkCore;
using colorbox.Services;

namespace colorbox.Controllers
{
    [Route("api/[controller]")]
    public class ColorBoxController : Controller
    {
        private readonly IColorBoxService _colorBoxService;
        public ColorBoxController(IColorBoxService colorBoxService)
        {
            this._colorBoxService = colorBoxService;
        }
        [HttpGet]
        public IActionResult Get()
        {
            var response = _colorBoxService.GetColorBoxLastSessionData();
            return Ok(response);

        }

        [HttpPost]
        public IActionResult Post([FromBody]ColorBoxUiStateViewModel viewModel)
        {
            if (viewModel == null)
            {
                throw new ArgumentNullException(nameof(viewModel),"Input in Null");
            }

            _colorBoxService.SaveSessionData(viewModel);
            return Ok();

        }


    }


}