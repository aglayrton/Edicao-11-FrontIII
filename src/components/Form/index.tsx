import { TextField, Button, Typography, useEventCallback } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Mode {
	mode: 'login' | 'signup';
}

const Form = ({ mode }: Mode) => {
	//href html a
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');
	const [erro, setErro] = useState(false);
	// const senha = useRef<HTMLInputElement>(null);

	const logar = () => {
		console.log(email, senha);
		// 	console.log(senha.current?.value);
	};

	const outraPagina = () => {
		if (mode == 'login') {
			navigate('/signup');
		} else {
			navigate('/');
		}
	};

	useEffect(() => {
		if (senha.length >= 1 && senha.length <= 3) {
			setErro(true);
		}else{
			setErro(false);
		}
	}, [email, senha]);

	return (
		<>
			<Stack spacing={2}>
				{mode === 'login' && (
					<>
						<TextField
							label="email"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						{/* <TextField label="senha" type="password" inputRef={senha} /> */}
						<TextField
							label="senha"
							type="password"
							value={senha}
							onChange={(e) => setSenha(e.target.value)}
							error={erro}
						/>
						<Button variant="contained" onClick={() => logar()}>
							Acessar
						</Button>
						<Typography>
							Não tem conta?{' '}
							<Typography variant="caption" onClick={() => outraPagina()}>
								Registre-se
							</Typography>
						</Typography>
					</>
				)}

				{mode === 'signup' && (
					<>
						<TextField label="email" type="email" />
						<TextField label="senha" type="password" />
						<TextField label="confirmar senha" type="password" />
						<Button variant="outlined" color="success">
							Registro
						</Button>
						<Button
							variant="outlined"
							color="warning"
							onClick={() => outraPagina()}
						>
							Voltar
						</Button>
					</>
				)}
			</Stack>
		</>
	);
};

export default Form;
