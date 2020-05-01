import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import styled from 'styled-components';

import Global from 'styles/Global';
import ContextApp from 'context/ContextApp';
import RouterApp from 'routes/RouterApp';
import { setToken, clearToken, isAuthenticated } from 'storage';
import { getImageUser } from 'services/api/query';
import { STUDENT } from 'services/api/responseAPI';
import ComponentLoading from 'components/ComponentLoading';
import { useAuth } from 'services/hooks';

const Container = styled(Row)`
	min-height: 100vh;
`;

function ContentApp() {
	const [authenticated, setAuthenticated] = useState(isAuthenticated());
	const [isValidatedEmail, setIsValidatedEmail] = useState(false);
	const [currentyUser, setCurrentyUser] = useState(null);
	const [currentyUserImage, setCurrentyUserImage] = useState(null);
	const { data, loading, refetch, error } = useAuth();
	
	const reloadPage = () => refetch();

	const doLogin = async (token) => {
		if (token) {
			setAuthenticated(true);
			await setToken(token);
			await refetch();
		}
	}

	const doLogout = async () => {
		await clearToken();
		await setAuthenticated(false);
	}

	useEffect(() => {
		(async () => {
			if(!data){
				if(error){
					await doLogout();
				}
				return;
			}
			
			if (data) {
				const user = data;
				setCurrentyUser(user);
				setIsValidatedEmail(user[STUDENT.IS_VALIDATED_EMAIL] === true);
				setCurrentyUserImage(getImageUser(user[STUDENT.PROFILE_IMAGE]));
				setAuthenticated(true);
				return;
			} else {
				await doLogout();
			}
		})()
	}, [data, error]);

	let values = {
		authenticated,
		currentyUser,
		currentyUserImage,
		loading,
		reloadPage,
		doLogin,
		doLogout,
		isValidatedEmail,
	};

	return (
		<ContextApp.Provider value={values}>
			<Container>
				<Global />
				<ComponentLoading loading={loading}>
					<RouterApp />
				</ComponentLoading>
			</Container>
		</ContextApp.Provider>
	);
}

export default ContentApp;