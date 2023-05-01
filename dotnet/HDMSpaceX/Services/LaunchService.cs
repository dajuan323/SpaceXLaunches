using HDMSpaceX.Models;
using Newtonsoft.Json;
using HDMSpaceX.Services.Helpers;
using HDMSpaceX.Services.Interfaces;

namespace HDMSpaceX.Services
{
    public class LaunchService : ILaunchService
    {
        private readonly HttpClient _httpClient;

        public LaunchService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }


        public async Task<List<Launch>> GetLaunches(int limit, int offset)
        {
            var response = await _httpClient.GetAsync("https://api.spacexdata.com/v3/launches");
            var content = await response.Content.ReadAsStringAsync();
            var launches = JsonConvert.DeserializeObject<List<Launch>>(content);
            return launches != null ? launches.Paginate(limit, offset) : new List<Launch>();
        }
    }
}
