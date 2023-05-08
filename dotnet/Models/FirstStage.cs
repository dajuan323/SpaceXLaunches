using Newtonsoft.Json;

namespace SpaceXLaunchWatch.Models
{
    public class FirstStage
    {
        [JsonProperty("cores")]
        public Core[]? Cores { get; set; }
    }

}