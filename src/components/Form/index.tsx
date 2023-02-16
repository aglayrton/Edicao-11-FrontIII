/* eslint-disable @typescript-eslint/ban-ts-comment */
import { TextField, Button, Typography, useEventCallback } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../store/modules/userSlice';
import { RootState } from '../../store/store';
import Recados from '../../types/recados';
import User from '../../types/users';
import InputDefault, { Name } from '../InputDefault';

interface Mode {
	mode: 'login' | 'signup';
}

const Form = ({ mode }: Mode) => {
	//href html a
	const navigate = useNavigate();
	//estado local
	const [input, setInput] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	});
	//SO PARA DISPARAR AS ACOES
	const dispatch = useDispatch();

	//criar os estados de erros para cada campo
	const [errorName, setErrorName] = useState(false);
	const [errorEmail, setErrorEmail] = useState(false);
	const [errorPassword, setErrorPassword] = useState(false);
	const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);

	//vou pegar a informacao digitada, mas também vou indicar de qual campos ele esta pegando
	const pegarDados = (value: string, key: Name) => {
		switch (key) {
			case 'name':
				setInput({ ...input, name: value });
				break;
			case 'email':
				setInput({ ...input, email: value });
				break;
			case 'password':
				setInput({ ...input, password: value });
				break;
			case 'confirmPassword':
				setInput({ ...input, confirmPassword: value });
				break;
			default:
		}
	};

	//chama a outra pagina
	const outraPagina = () => {
		if (mode == 'login') {
			navigate('/signup');
		} else {
			navigate('/');
		}
	};

	//validacao
	useEffect(() => {
		if (input.name.length < 3) {
			setErrorName(true);
		} else {
			setErrorName(false);
		}

		if (!input.email.match(/\S+@\S+\.\S+/)) {
			setErrorEmail(true);
		} else {
			setErrorEmail(false);
		}

		if (mode == 'signup') {
			if (
				!input.password ||
				input.password.length < 6 ||
				!input.confirmPassword ||
				input.password !== input.confirmPassword
			) {
				setErrorPassword(true);
				setErrorConfirmPassword(true);
			} else {
				setErrorPassword(false);
				setErrorConfirmPassword(false);
			}
		}
	}, [input]);

	//CLICAR NO BOTAO ELE CRIA O USUARIO
	const register = () => {
		const newUser: User = {
			name: input.name,
			email: input.email,
			password: input.password,
			recados: []
		};
		dispatch(addUser(newUser));
	};

	const nextInput = (e: any, nameT?: string) => {
		const { key } = e;
		if (key === 'Enter') {
			if (nameT) {
				const newInput = document.querySelector(`#${nameT}`);
				// @ts-ignore
				if (newInput) newInput.focus();
			} else {
				if (
					!errorName &&
					!errorEmail &&
					!errorPassword &&
					!errorConfirmPassword
				) {
					register();
				}
			}
		}
	};

	return (
		<>
			<Stack spacing={2}>
				{mode === 'login' && (
					<>
						<InputDefault
							name="email"
							label="Digite seu email"
							type="email"
							value={input.email}
							color={errorEmail ? 'error' : 'success'}
							handleChange={pegarDados}
						/>
						<InputDefault
							name="password"
							label="Digite sua senha"
							type="password"
							value={input.password}
							color={errorPassword ? 'error' : 'success'}
							handleChange={pegarDados}
						/>
						<Button variant="contained">Acessar</Button>
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
						<InputDefault
							name="name"
							label="Digite seu nome"
							type="text"
							value={input.name}
							color={errorName ? 'error' : 'success'}
							handleChange={pegarDados}
							onKeyDown={(e) => nextInput(e, 'email')}
						/>
						<InputDefault
							name="email"
							label="Digite seu email"
							type="email"
							value={input.email}
							color={errorEmail ? 'error' : 'success'}
							handleChange={pegarDados}
							onKeyDown={(e) => nextInput(e, 'password')}
						/>
						<InputDefault
							name="password"
							label="Digite sua senha"
							type="password"
							value={input.password}
							color={errorPassword ? 'error' : 'success'}
							handleChange={pegarDados}
							onKeyDown={(e) => nextInput(e, 'confirmPassword')}
						/>

						<InputDefault
							name="confirmPassword"
							label="Confirme sua senha"
							type="password"
							value={input.confirmPassword}
							color={errorConfirmPassword ? 'error' : 'success'}
							handleChange={pegarDados}
							onKeyDown={(e) => nextInput(e)}
						/>
						<Button
							variant="outlined"
							color="success"
							disabled={errorEmail || errorPassword}
							onClick={register}
						>
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
