import Recados from './recados';

interface User {
	name: string;
	email: string;
	password: string;
	recados?: Recados[];
}

export default User;
