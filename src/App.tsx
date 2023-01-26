import React, { useState } from 'react';
import { RootState } from './store/store';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { incrementar, decrementar } from './store/feature/contadorSlice';
import Produto from './page/Produto';
function App() {
	const [valor, setValor] = useState(0);
	const dispatch = useDispatch();
	const initialState = useSelector(
		(state: RootState) => state.contadorReducer
	);
	return (
		<>
			<Produto />
		</>
	);
}
export default App;
