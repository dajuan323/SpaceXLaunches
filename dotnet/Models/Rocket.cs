using Newtonsoft.Json;

namespace HDMSpaceX.Models
{
    public class Rocket
    {
        [JsonProperty("rocket_id")]
        public string? RocketId { get; set; }

        [JsonProperty("rocket_name")]
        public string? RocketName { get; set; }

        [JsonProperty("rocket_type")]
        public string? RocketType { get; set; }

        [JsonProperty("first_stage")]
        public FirstStage? FirstStage { get; set; }

        [JsonProperty("second_stage")]
        public SecondStage? SecondStage { get; set; }

        [JsonProperty("fairings")]
        public Fairings? Fairings { get; set; }
    }
}