using Newtonsoft.Json;

namespace SpaceXLaunchWatch.Models
{
    public class Fairings
    {
        [JsonProperty("reused")]
        public bool? Reused { get; set; }

        [JsonProperty("recovery_attempt")]
        public bool? RecoveryAttempt { get; set; }

        [JsonProperty("recovered")]
        public bool? Recovered { get; set; }

        [JsonProperty("ship")]
        public object? Ship { get; set; }
    }

}