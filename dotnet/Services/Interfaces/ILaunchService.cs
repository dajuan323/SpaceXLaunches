using SpaceXLaunchWatch.Models;

namespace SpaceXLaunchWatch.Services.Interfaces
{
    public interface ILaunchService
    {
        Task<List<Launch>> GetLaunches(int page, int pageSize);
        Task<List<Launch>> GetPastLaunches(int page, int pageSize);
        Task<List<Launch>> GetFutureLaunches();
        Task<Launch?> GetSingleLaunch(int launchId);

    }
}