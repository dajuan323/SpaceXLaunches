using System.Collections.Generic;

namespace SpaceXLaunchWatch.Web.Models.Responses
{

    public class ItemsResponse<T> : SuccessResponse
    {
        public List<T>? Items { get; set; }
    }
}