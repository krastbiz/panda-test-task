import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ItemDto, ItemPaginatedDto, PaginationMetaDto } from "./api/models"
import { getBrowserApiClient } from "./api/browserApiClient"

export interface CardState {
    items: ItemDto[]
    page: number
    pageSize: number
    totalPages: number
    isLoading: boolean
    isError: boolean
}

const initialState: CardState = {
    items: [],
    page: 1,
    pageSize: 9,
    totalPages: null,
    isLoading: true,
    isError: false 
}

export const fetchCards = createAsyncThunk(
    'cards/page',
    async ({page, pageSize }: { page: number, pageSize: number }, { signal }) => {
        const apiClient = getBrowserApiClient()

        const query = new URLSearchParams({ page: page.toString(), pageSize: pageSize.toString() }).toString()

        const response = await apiClient.get<ItemPaginatedDto>(`/list?${query}`, { signal })
        return response.data
  },
)

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setPageSize: (state, action: PayloadAction<number>) => {
            state.pageSize = action.payload
        },
    }, 
    extraReducers: (builder) => {
        builder.addCase(fetchCards.pending, (state) => {
            state.isLoading = true
            state.isError = false
        }).addCase(fetchCards.rejected, (state) => {
            state.isLoading = false
            state.isError = true
        }).addCase(fetchCards.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = false
            state.items = action.payload.data
            state.totalPages = action.payload.meta.count
        })
    }
})

export const { setPage, setPageSize } = cardSlice.actions

export default cardSlice.reducer