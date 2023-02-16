import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import userSlice from './modules/userSlice';

const persistConfig = {
	key: 'users', //nome do item que fica no local storage
	storage, //storage que basicamente é o recurso que já fazer as funcionalidades do local storage
};

const persistedReducers = persistReducer(persistConfig, userSlice);
//store disponibiliza as reducers
const store = configureStore({
	reducer: {
		userReducer: persistedRe 
const persistor = persistStore(store);

export { store, persistor };  