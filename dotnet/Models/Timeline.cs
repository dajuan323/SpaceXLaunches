using Newtonsoft.Json;

namespace HDMSpaceX.Models
{
    public class Timeline
    {
        [JsonProperty("webcast_liftoff")]
        public int? WebcastLiftoff { get; set; }
    }

}