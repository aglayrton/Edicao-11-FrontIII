# instala o redux (legado - sistema mais antigo)
# instala o redux-toolkit (sistema refatorado - atualização)
# criar o diretorio onde vai ficar o meu store para disponibilizar os reducers
# criar os slices dentro de uma pasta para organizar os reducers

# entre outras palavras: vou colocar o slice dentro do store para deixar disponivel
# os estados que se encontram no slice e seus actions(reducers)























//configurar o meu localstorage
const persistConfig = {
	key: 'produtos', //nome da key
	storage, //armazena no local storage
};

//(configuracao, o meu reducer) que vai ser retornado na persistencia no local storage
const persistedReducer = persistReducer(persistConfig, produtoSlice);

const store = configureStore({
	reducer: {
		contadorReducer: contadorSlice,
		produtosReducer: persistedReducer //agora o meu persistReducer é o reducer(localstorage)
	},
});
//exportar o persistor para minha aplicacao porque ela entende que é o persist
const persistor = persistStore(store);
export {store, persistor};


//TYPESCRIPT
//exportando o estado inicial
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
