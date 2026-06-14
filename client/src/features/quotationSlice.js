import { createSlice } from '@reduxjs/toolkit'

const quoteSlice = createSlice({
    name: 'quote',
    initialState: {
        quotes: [],
        currentQuote: null,
        isEditing: false,
        uniqueId: null
    },
    reducers: {
        setQuotes: (state, action) => {
            state.quotes = action.payload;
        },
        setCurrentQuote: (state, action) => {
            state.currentQuote = action.payload
        },
        clearCurrentQuote: (state) => {
            state.currentQuote = null
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

export const { setQuotes, setCurrentQuote, clearCurrentQuote, setIsEditing, removeQuote } = quoteSlice.actions
export default quoteSlice.reducer