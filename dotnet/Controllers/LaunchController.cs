using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using SpaceXLaunchWatch.Services;
using Microsoft.AspNetCore.Cors;
using SpaceXLaunchWatch.Models;
using SpaceXLaunchWatch.Services.Interfaces;
using SpaceXLaunchWatch.Web.Models.Responses;

namespace SpaceXLaunchWatch.Controllers
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

        [HttpGet("past")]
        public async Task<ActionResult<List<Launch>>> GetPastLaunches(int limit, int offset)
        {
            try
            {
                var launches = await _launchService.GetPastLaunches(limit, offset);

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
        
        [HttpGet("future")]
        public async Task<ActionResult<List<Launch>>> GetFutureLaunches()
        {
            try
            {
                var launches = await _launchService.GetFutureLaunches();

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

        [HttpGet("{id:int}")]
        public async Task<ActionResult<ItemResponse<Launch>>> GetSingle(int id)
        {

            int iCode = 200;
            BaseResponse? response = null;

            try
            {
                Launch? launch = await _launchService.GetSingleLaunch(id);

                if (launch == null)
                {
                    iCode = 404;
                    response = new ErrorResponse("Profile not found");
                }
                else
                {
                    response = new ItemResponse<Launch> { Item = launch };
                }
            }

            catch (Exception ex)
            {
                iCode = 500;
                response = new ErrorResponse($"Generic Errors: ${ex.Message}");
            }
            return StatusCode(iCode, response);
        }
    }
}

