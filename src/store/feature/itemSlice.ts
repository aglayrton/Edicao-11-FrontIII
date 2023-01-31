import { RootState } from './../store';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
//CRIADO UM TIPO
interface Item {
	id: number;
	description: string;
	checked: boolean;
}
//CREATEENTITYADAPTER - crie uma lista que já vem comandos de CRUD.
const adapter = createEntityAdapter<Item>({
	selectId: (item) => item.id,
});
const itemSlice = createSlice({
	name: 'item',
	initialState: adapter.getInitialState(),
	reducers: {
		cadastrar: adapter.addOne,//cadastrar
		remover: adapter.removeOne,//remover
	},
});
export const { cadastrar, remover } = itemSlice.actions;
export default itemSlice.reducer;
//lista
export const { selectAll, selectById } = adapter.getSelectors((state: RootState) => state.itemReducer);
