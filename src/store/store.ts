import { configureStore } from '@reduxjs/toolkit';
import contadorSlice from './feature/contadorSlice';
import itemSlice from './feature/itemSlice';
import produtosSlice from './feature/produtoSlice';

const store = configureStore({
	reducer: {
		produtosReducer: produtosSlice,
		contadorReducer: contadorSlice,
		itemReducer: itemSlice,
	},
});

export { store };

//TYPESCRIPT
//exportando o estado inicial
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//const persistConfig = {
// 	key: 'root',
// 	storage,
// };

// const persistedReducers = persistReducer(persistConfig, rootReducers);

// const store = configureStore({
// 	reducer: persistedReducers,
// 	devTools: process.env.NODE_ENV !== 'production',
// });

// const persistor = persistStore(store);
// export { store, persistor };
