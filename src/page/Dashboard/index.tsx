import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import { cadastrar, remover, selectAll } from '../../store/feature/itemSlice';

const Dashboard = () => {
	//chamar o estado inicial que eu preciso
	const items = useSelector(selectAll);
	//coloco uma variavel como funcao para disparar as actions
	const dispatch = useDispatch();
	//tenho estado para capturar a informação digitada
	const [description, setDescription] = useState<string>('');

	//quando clicado no botao, ele chama a actio para ser dispara
	const handleAdd = () => {
		dispatch(cadastrar({ id: items.length + 1, description, checked: false }));
	};

	const handleRemover = (id: number) => {
		dispatch(remover(id));
	};

	return (
		<>
			<TextField
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				label="Digite a tarefa"
			/>
			<Button onClick={handleAdd}>Add</Button>
			<Box>
				{items.map((item) => (
					<Box key={item.id}>
						<Typography variant="h1">{item.description}</Typography>
						<Button onClick={() => handleRemover(item.id)}>Remover</Button>
					</Box>
				))}
			</Box>
		</>
	);
};

export default Dashboard;
