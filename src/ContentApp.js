import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import styled from 'styled-components';
import { useQuery, useSubscription } from '@apollo/react-hooks';

import Global from 'styles/Global';
import ContextApp from 'context/ContextApp';
import RouterApp from 'routes/RouterApp';
import { setToken, clearToken, isAuthenticated } from 'storage';
import { GET_CURRENTY_USER, getImageUser } from 'services/api/query';
import { STUDENT } from 'services/api/responseAPI';
import objectSubscription, { STUDENT_UPDATED } from 'services/api/subscription';
import ComponentLoading from 'components/ComponentLoading';

const Container = styled(Row)`
	min-height: 100vh;
`;

function ContentApp() {
	const [authenticated, setAuthenticated] = useState(isAuthenticated());
	const [currentyUser, setCurrentyUser] = useState(null);
	const [currentyUserImage, setCurrentyUserImage] = useState(null);
	const { data, loading, refetch, error } = useQuery(GET_CURRENTY_USER);
	const { data: dataUpdateUser } = useSubscription(STUDENT_UPDATED, objectSubscription({ adminId: currentyUser && currentyUser[STUDENT.ID] }));

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
			
			if (data && data.response) {
				const user = data.response;
				setCurrentyUser(user);
				setCurrentyUserImage(getImageUser(user[STUDENT.PROFILE_IMAGE]));
				setAuthenticated(true);
			} else {
				await doLogout();
			}
		})()
	}, [data, error]);

	useEffect(() => {
		(async () => {
			if (dataUpdateUser && dataUpdateUser.response) {
				const user = dataUpdateUser.response;
				setCurrentyUser(user);
				setCurrentyUserImage(getImageUser(user[STUDENT.PROFILE_IMAGE]));
			}
		})()
	}, [dataUpdateUser]);

	let values = {
		authenticated,
		currentyUser,
		currentyUserImage,
		loading,
		reloadPage,
		doLogin,
		doLogout,
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