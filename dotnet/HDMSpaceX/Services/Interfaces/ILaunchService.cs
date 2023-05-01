using HDMSpaceX.Models;

namespace HDMSpaceX.Services.Interfaces
{
    public interface ILaunchService
    {
        Task<List<Launch>> GetLaunches(int page, int pageSize);

    }
}