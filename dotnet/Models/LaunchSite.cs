using Newtonsoft.Json;

namespace HDMSpaceX.Models
{
    public class LaunchSite
    {
        [JsonProperty("site_id")]
        public string? SiteId { get; set; }

        [JsonProperty("site_name")]
        public string? SiteName { get; set; }

        [JsonProperty("site_name_long")]
        public string? SiteNameLong { get; set; }
    }

}