﻿using Newtonsoft.Json;

namespace HDMSpaceX.Models
{
    public class FirstStage
    {
        [JsonProperty("cores")]
        public Core[]? Cores { get; set; }
    }

}