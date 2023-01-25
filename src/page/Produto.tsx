import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apagar, cadastrar } from '../store/feature/produtoSlice';
import { RootState } from '../store/store';

const Produto: React.FC = () => {
	const [nome, setNome] = useState(''); //crio estado inicial localmente
	const [preco, setPreco] = useState(0); //crio estado inicial localmente
	const [quantidade, setQuantidade] = useState(0); //crio estado inicial localmente

	const dispatch = useDispatch(); //funcao para usar as actions

	const initialState = useSelector(
		//chama o estado global da reducer
		(state: RootState) => state.produtosReducer.produto
	);

	//funcao qualquer somente para acionar o cadastro
	const acionarAcao = () => {
		dispatch(
			cadastrar({
				id: initialState.length + 1,
				nome,
				preco,
				quantidade,
			})
		);
	};

	const apagarDado = (id: number) => {
		dispatch(apagar(id));
	};

	return (
		<React.Fragment>
			<div>
				<div>
					<input
						type="text"
						placeholder="nome do Produto"
						value={nome}
						onChange={(e) => setNome(e.target.value)}
					/>
					<input
						type="number"
						placeholder="preço do Produto"
						value={preco}
						onChange={(e) => setPreco(Number(e.target.value))}
					/>
					<input
						type="number"
						placeholder="Quantidade"
						value={quantidade}
						onChange={(e) => setQuantidade(Number(e.target.value))}
					/>
					<button onClick={acionarAcao}>Salvar</button>
				</div>
				{initialState.map((elemento, indice) => {
					return (
						<div key={indice}>
							<h1>{elemento.nome}</h1>
							<p>R$ {elemento.preco}</p>
							<p>Quant: {elemento.quantidade}</p>
							<button onClick={() => apagarDado(elemento.id)}>deletar</button>
						</div>
					);
				})}
			</div>
		</React.Fragment>
	);
};

export default Produto;
