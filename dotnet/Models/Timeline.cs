using Newtonsoft.Json;

namespace SpaceXLaunchWatch.Models
{
    public class Timeline
    {
        [JsonProperty("webcast_liftoff")]
        public int? WebcastLiftoff { get; set; }
    }

}