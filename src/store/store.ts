import { configureStore } from '@reduxjs/toolkit';
import contadorSlice from './feature/contadorSlice';
import produtosSlice from './feature/produtoSlice';

const store = configureStore({
	reducer: {
		produtosReducer: produtosSlice,
		contadorReducer: contadorSlice	
	},
});

export {store};


//TYPESCRIPT
//exportando o estado inicial
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

