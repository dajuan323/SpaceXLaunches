using Newtonsoft.Json;

namespace SpaceXLaunchWatch.Models
{
    public class SecondStage
    {
        [JsonProperty("block")]
        public int? Block { get; set; }

        [JsonProperty("payloads")]
        public Payload[]? Payloads { get; set; }
    }

}