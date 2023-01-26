//slice cria a funcao para o reducer, payloadaction (é o parametro de mudanca do estado)
import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'; //as importações
import { Produtos } from '../../types/produtos';
import { RootState } from '../store';

// SLICE SEM ENTITYADAPTER
// //CRIAR UM VETOR
// const produto: Produtos[] = [];
// //CADASTRAR, DELETAR, CONSULTAS PERSONALIZADAS, ATUALIZAR .. (LISTA DE INFORMACAO)

// const produtosSlice = createSlice(
// 	{
// 		name: 'produtos',//NOME DA REDUCER
// 		initialState: {//ESTADO INICIAL
// 			produto
// 		},
// 		reducers: {//AÇOES
// 			//funcao sempre vai ter o state e quando necessário tornar dinamico a funcao, voce terá o action, dentro do action posso usar a propriedade payload - padrao
// 			cadastrar: (state, action: PayloadAction<Produtos>)=>{
// 				state.produto.push(action.payload);
// 			},
// 			//outra funcao que recebe no action um valor que é do tipo number
// 			apagar: (state, action: PayloadAction<number>)=>{
// 				const index = state.produto.findIndex((elemento) => elemento.id === action.payload);
// 				state.produto.splice(index, 1);
// 			}
// 		},
// 	}
// );
// //exporto as acoes que estao dentro do slice
// export const { cadastrar, apagar } = produtosSlice.actions;
// //exporto o meu slice como reducer
// export default produtosSlice.reducer;

// COM ENTITYADAPTER

const produtoAdapter = createEntityAdapter<Produtos>({
    selectId: (produto) => produto.id,
});

export const { selectAll, selectById } = produtoAdapter.getSelectors(
    (state: RootState) => state.produtosReducer
);

const produtosSlice = createSlice({
    name: 'produtos', //NOME DA REDUCER
    initialState: produtoAdapter.getInitialState(), //ESTADO INICIAL

    reducers: {
        //AÇOES
        //funcao sempre vai ter o state e quando necessário tornar dinamico a funcao, voce terá o action, dentro do action posso usar a propriedade payload - padrao
        cadastrar: produtoAdapter.addOne, // add um
        adicionarMuitos: produtoAdapter.addMany,
        apagar: produtoAdapter.removeOne, // apaga um pelo id
        apagarMuitos: produtoAdapter.removeMany, // deve passar um array com os id a serem apagados
        apagarTudo: produtoAdapter.removeAll,
        modificarUm: produtoAdapter.updateOne,
        modificarMuitos: produtoAdapter.updateMany,
        setarTudo: produtoAdapter.setAll,
        setarOqueDiferenciaDoOriginal: produtoAdapter.setMany,
        setarUm: produtoAdapter.setOne,
    },
});
//exporto as acoes que estao dentro do slice
export const { cadastrar, apagar, modificarUm, apagarTudo } = produtosSlice.actions;
//exporto o meu slice como reducer
export default produtosSlice.reducer;
