using System;
using System.Collections.Generic;
using System.Linq;

namespace SpaceXLaunchWatch.Services.Helpers
{
    public static class PaginationHelper
    {
        public static List<T> Paginate<T>(this List<T> items, int limit, int offset)
        {
            return items.GetRange(offset, limit);
        }
    }
}
