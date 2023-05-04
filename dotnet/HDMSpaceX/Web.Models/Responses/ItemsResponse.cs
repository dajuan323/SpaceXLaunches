using System.Collections.Generic;

namespace HDMSpaceX.Web.Models.Responses
{

    public class ItemsResponse<T> : SuccessResponse
    {
        public List<T>? Items { get; set; }
    }
}