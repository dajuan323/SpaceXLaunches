﻿namespace HDMSpaceX.Web.Models.Responses
{
    public class ItemResponse<T> : SuccessResponse, IItemResponse
    {
        public T? Item { get; set; }

        object? IItemResponse.Item { get { return this.Item; } }
    }
}