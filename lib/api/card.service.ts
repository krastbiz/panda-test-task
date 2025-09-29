import { AxiosRequestConfig } from "axios";
import { getApiClient } from "./apiClient";
import { ItemPaginatedDto } from "./models";

export const cardService = {
    getCards: ({page, pageSize }: { page: number, pageSize: number }, config?: AxiosRequestConfig) => {
        const queryParams = new URLSearchParams({ page: page.toString(), pageSize: pageSize.toString() }).toString()
        const query = queryParams ? `?${queryParams}` : ''

        return getApiClient().get<ItemPaginatedDto>(`/list${query}`, config)
    }
}