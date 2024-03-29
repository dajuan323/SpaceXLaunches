﻿using SpaceXLaunchWatch.Converters;
using Newtonsoft.Json;
using System.Text.Json.Serialization;


namespace SpaceXLaunchWatch.Models
{
    public class OrbitParams
    {
        [JsonProperty("reference_system")]
        public string? ReferenceSystem { get; set; }

        [JsonProperty("regime")]
        public string? Regime { get; set; }

        [JsonProperty("longitude")]
        public object? Longitude { get; set; }

        [JsonProperty("semi_major_axis_km")]
        public object? SemiMajorAxisKm { get; set; }

        [JsonProperty("eccentricity")]
        public object? Eccentricity { get; set; }

        [JsonPropertyName("periapsis_km")]
        [System.Text.Json.Serialization.JsonConverter(typeof(ConverterForPeriapsisKm))]
        public int? PeriapsisKm { get; set; }

        [JsonProperty("apoapsis_km")]
        public float? ApoapsisKm { get; set; }

        [JsonProperty("inclination_deg")]
        public float? InclinationDeg { get; set; }

        [JsonProperty("period_min")]
        public object? PeriodMin { get; set; }

        [JsonProperty("lifespan_years")]
        public object? LifespanYears { get; set; }

        [JsonProperty("epoch")]
        public object? Epoch { get; set; }

        [JsonProperty("mean_motion")]
        public object? MeanMotion { get; set; }

        [JsonProperty("raan")]
        public object? Raan { get; set; }

        [JsonProperty("arg_of_pericenter")]
        public object? ArgOfPericenter { get; set; }

        [JsonProperty("mean_anomaly")]
        public object? MeanAnomaly { get; set; }
    }

}