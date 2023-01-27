import { configureStore, combineReducers } from '@reduxjs/toolkit';
import contadorSlice from './feature/contadorSlice';
import produtosSlice from './feature/produtoSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //usando o localStorage

const rootReducers = combineReducers({
	produtosReducer: produtosSlice,
	contadorReducer: contadorSlice,
});

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducers = persistReducer(persistConfig, rootReducers);

const store = configureStore({
	reducer: persistedReducers,
	devTools: process.env.NODE_ENV !== 'production',
});

const persistor = persistStore(store);
export { store, persistor };

//TYPESCRIPT
//exportando o estado inicial
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
