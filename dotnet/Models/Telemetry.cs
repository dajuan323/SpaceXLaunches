using Newtonsoft.Json;

namespace SpaceXLaunchWatch.Models
{
    public class Telemetry
    {
        [JsonProperty("flight_club")]
        public object? FlightClub { get; set; }
    }

}