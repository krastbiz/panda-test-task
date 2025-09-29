import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ItemDto } from "./api/models"
import { cardService } from "./api"
import { HYDRATE } from 'next-redux-wrapper'
import { RootState } from "./store"

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
    async ({page, pageSize }: { page: number, pageSize: number }, thunkApi) => {
        const response = await cardService.getCards({ page, pageSize }, thunkApi)
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
        setCards: (state, action: PayloadAction<ItemDto[]>) => {
            state.items = action.payload
        }
    }, 
    extraReducers: (builder) => {
        builder.addCase(
            HYDRATE, (state, action: { type: string; payload: RootState }) => {
                return {
                    ...state,
                    ...action.payload.cards,
                }
            }
        ).addCase(fetchCards.pending, (state) => {
            state.isLoading = true
            state.isError = false
        }).addCase(fetchCards.rejected, (state, action) => {
            if (!action.meta?.aborted) {
                state.isLoading = false
                state.isError = true
            }
        }).addCase(fetchCards.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = false
            state.items = action.payload.data
            state.totalPages = action.payload.meta.count
        })
    }
})

export const { setPage, setPageSize, setCards } = cardSlice.actions

export default cardSlice.reducer