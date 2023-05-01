using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using HDMSpaceX.Services;
using Microsoft.AspNetCore.Cors;
using HDMSpaceX.Models;
using HDMSpaceX.Services.Interfaces;

namespace HDMSpaceX.Controllers
{
    [ApiController]
    [Route("api/launches")]
    public class LaunchController : ControllerBase
    {
        private readonly ILaunchService _launchService;

        public LaunchController(ILaunchService launchService)
        {
            _launchService = launchService;
        }

        [HttpGet]
        public async Task<ActionResult<List<Launch>>> GetAllLaunches(int limit, int offset)
        {
            try
            {
                var launches = await _launchService.GetLaunches(limit, offset);

                if (launches == null || launches.Count == 0)
                {
                    return NoContent();
                }

                return Ok(launches);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }
    }
}

