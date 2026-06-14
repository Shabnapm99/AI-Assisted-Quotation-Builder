import { createSlice } from '@reduxjs/toolkit'

const quoteSlice = createSlice({
    name: 'quote',
    initialState: {
        quotes: [],
        selectedQuote: null,
        isEditing: false,
        uniqueId: null
    },
    reducers: {
        setQuotes: (state, action) => {
            state.quotes = action.payload;
        },
        setSelectedQuote: (state, action) => {
            state.setSelectedQuote = action.payload
        },
        clearSelectedQuote: (state) => {
            state.clearSelectedQuote = null
        },
        setIsEditing: (state, action) => {
            state.isEditing = action.payload.boolean;
            state.uniqueId = action.payload.id;
        },
        removeQuote: (state, action) => {
            let quoteId = action.payload
            state.quotes = state.quotes.filter((quote) => quote._id != quoteId)
        }
    }
})

export const { setQuotes, setSelectedQuote, clearSelectedQuote, setIsEditing, removeQuote } = quoteSlice.actions
export default quoteSlice.reducer