using Newtonsoft.Json;

namespace HDMSpaceX.Models
{
    public class Telemetry
    {
        [JsonProperty("flight_club")]
        public object? FlightClub { get; set; }
    }

}