import React from 'react';
import { BannerLogin } from '../../components/Banner/BannerLogin';
import { ContainerStyled } from '../../components/ContainerStyled';
import Form from '../../components/Form';
import { FormStyled } from '../../components/FormStyled';

const Signup = () => {
	return (
		<React.Fragment>
			<ContainerStyled>
				<BannerLogin />
				<FormStyled>
					<Form mode="signup" />
				</FormStyled>
			</ContainerStyled>
		</React.Fragment>
	);
};

export default Signup;
