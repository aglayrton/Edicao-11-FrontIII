import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import User from '../../types/users';
import Recados from '../../types/recados';

const users: User[] = [];

interface AddRecadoPayload {
    email: string;
    recado: Recados;
  }
  

export const userSlice = createSlice({
	//vai o nome da minha reducer
	name: 'user',
	// estado inicial global
	initialState: {
		users,
	},
	//acoes
	reducers: {
		addUser(state, action: PayloadAction<User>) {
			state.users = [...state.users, action.payload];
		},
		deleteUser(state,         action: PayloadAction<User>) {
			const index = state.users.findIndex(
				(obj) => obj.name === action.payload.name
			);
			state.users.splice(index, 1);
		},

		adicionarRecado(state, action: PayloadAction<AddRecadoPayload>) {
            const { email, recado } = action.payload;
            const userIndex = state.users.findIndex((user) => user.email === email);
      
            if (userIndex !== -1) {
              state.users[userIndex].recados?.push(recado);
            }
		},
	},
});

export const { addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
