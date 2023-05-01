using Newtonsoft.Json;

namespace HDMSpaceX.Models
{
    public class SecondStage
    {
        [JsonProperty("block")]
        public int? Block { get; set; }

        [JsonProperty("payloads")]
        public Payload[]? Payloads { get; set; }
    }

}