using Newtonsoft.Json;
using System.Net.Sockets;

namespace HDMSpaceX.Models
{
    public class Launch
    {
        [JsonProperty("flight_number")]
        public int FlightNumber { get; set; }

        [JsonProperty("mission_name")]
        public string? MissionName { get; set; }

        [JsonProperty("mission_id")]
        public object[]? MissionId { get; set; }

        [JsonProperty("upcoming")]
        public bool Upcoming { get; set; }

        [JsonProperty("launch_year")]
        public string? LaunchYear { get; set; }

        [JsonProperty("launch_date_unix")]
        public int? LaunchDateUnix { get; set; }

        [JsonProperty("launch_date_utc")]
        public DateTime? LaunchDateUtc { get; set; }

        [JsonProperty("launch_date_local")]
        public DateTime LaunchDateLocal { get; set; }

        [JsonProperty("is_tentative")]
        public bool IsTentative { get; set; }

        [JsonProperty("tentative_max_precision")]
        public string? TentativeMaxPrecision { get; set; }

        [JsonProperty("tbd")]
        public bool Tbd { get; set; }

        [JsonProperty("launch_window")]
        public int? LaunchWindow { get; set; }

        [JsonProperty("rocket")]
        public Rocket? Rocket { get; set; }

        [JsonProperty("ships")]
        public object[]? Ships { get; set; }

        [JsonProperty("telemetry")]
        public Telemetry? Telemetry { get; set; }

        [JsonProperty("launch_site")]
        public LaunchSite? LaunchSite { get; set; }

        [JsonProperty("launch_success")]
        public bool? LaunchSuccess { get; set; }

        [JsonProperty("launch_failure_details")]
        public LaunchFailureDetails? LaunchFailureDetails { get; set; }

        [JsonProperty("links")]
        public Links? Links { get; set; }

        [JsonProperty("details")]
        public string? Details { get; set; }

        [JsonProperty("static_fire_date_utc")]
        public DateTime? StaticFireDateUtc { get; set; }

        [JsonProperty("static_fire_date_unix")]
        public int? StaticFireDateUnix { get; set; }

        [JsonProperty("timeline")]
        public Timeline? Timeline { get; set; }

        [JsonProperty("crew")]
        public object? Crew { get; set; }
    }

}