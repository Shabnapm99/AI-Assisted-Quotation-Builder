// import {configureStore} from '@reduxjs/toolkit'
// import userSlice from '../features/userSlice.js'

// export const store = configureStore({
//     reducer:{
//         user:userSlice
//     }
// })

import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../features/userSlice.js'
import clientSlice from '../features/clientSlice.js'
import quoteSlice from '../features/quotationSlice.js'
import storage from 'redux-persist/es/storage';
import { persistReducer, persistStore } from 'redux-persist'

const persistConfig = {
    key: 'user',
    storage,
}

const persistedReducer = persistReducer(persistConfig, userSlice)
export const store = configureStore({
    reducer: {
        user: persistedReducer,
        client: clientSlice,
        quote:quoteSlice
    },
     middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false
        })
    }
})

export const persistor = persistStore(store)