using Newtonsoft.Json;

namespace SpaceXLaunchWatch.Models
{
    public class LaunchFailureDetails
    {
        [JsonProperty("time")]
        public int Time { get; set; }

        [JsonProperty("altitude")]
        public object? Altitude { get; set; }

        [JsonProperty("reason")]
        public string? Reason { get; set; }
    }

}