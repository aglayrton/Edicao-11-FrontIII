import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import contadorSlice from './feature/contadorSlice';
import itemSlice from './feature/itemSlice';
import produtosSlice from './feature/produtoSlice';

const persistConfig = {
	key: 'items',
	storage,
};

const persistedReducers = persistReducer(persistConfig, itemSlice);

const store = configureStore({
	reducer: {
		produtosReducer: produtosSlice,
		contadorReducer: contadorSlice,
		itemReducer: persistedReducers,
	},
});

const persistor = persistStore(store);
export { store, persistor };

//TYPESCRIPT
//exportando o estado inicial
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
