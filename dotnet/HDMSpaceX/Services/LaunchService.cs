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

        public async Task<List<Launch>> GetPastLaunches(int limit, int offset)
        {
            var response = await _httpClient.GetAsync("https://api.spacexdata.com/v3/launches/past");
            var content = await response.Content.ReadAsStringAsync();
            var launches = JsonConvert.DeserializeObject<List<Launch>>(content);
            return launches != null ? launches.Paginate(limit, offset) : new List<Launch>();
        }
        
        public async Task<List<Launch>> GetFutureLaunches()
        {
            var response = await _httpClient.GetAsync("https://api.spacexdata.com/v3/launches/upcoming");
            var content = await response.Content.ReadAsStringAsync();
            var launches = JsonConvert.DeserializeObject<List<Launch>>(content);
            return launches != null ? launches : new List<Launch>();
        }
        
        public async Task<Launch?> GetSingleLaunch(int launchId)
        {
            var response = await _httpClient.GetAsync($"https://api.spacexdata.com/v3/launches/{launchId}");

            if (!response.IsSuccessStatusCode)
            {
                throw new HttpRequestException($"Failed to get launch {launchId}. Status code: {response.StatusCode}");
            }

            var content = await response.Content.ReadAsStringAsync();
            var launch = JsonConvert.DeserializeObject<Launch>(content);
            if (launch == null)
            {
                throw new Exception($"Launch {launchId} not found.");
            }

            return launch;
        }
    }
}
