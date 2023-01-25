//slice cria a funcao para o reducer, payloadaction (é o parametro de mudanca do estado)
import { createSlice, PayloadAction } from '@reduxjs/toolkit'; //as importações
import { Produtos } from '../../types/produtos';

//CRIAR UM VETOR
const produto: Produtos[] = [];
//CADASTRAR, DELETAR, CONSULTAS PERSONALIZADAS, ATUALIZAR .. (LISTA DE INFORMACAO)

const produtosSlice = createSlice(
	{
		name: 'produtos',//NOME DA REDUCER
		initialState: {//ESTADO INICIAL
			produto
		},
		reducers: {//AÇOES
			//funcao sempre vai ter o state e quando necessário tornar dinamico a funcao, voce terá o action, dentro do action posso usar a propriedade payload - padrao
			cadastrar: (state, action: PayloadAction<Produtos>)=>{
				state.produto.push(action.payload);
			},
			//outra funcao que recebe no action um valor que é do tipo number
			apagar: (state, action: PayloadAction<number>)=>{
				const index = state.produto.findIndex((elemento) => elemento.id === action.payload);
				state.produto.splice(index, 1);
			}
		},
	}
);
//exporto as acoes que estao dentro do slice
export const { cadastrar, apagar } = produtosSlice.actions;
//exporto o meu slice como reducer
export default produtosSlice.reducer;