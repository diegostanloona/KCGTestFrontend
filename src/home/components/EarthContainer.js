import React, { useState, useEffect } from 'react';

import { useHttpClient } from '../../shared/hooks/http-hook';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

import Earth from './Earth';

const EarthContainer = props => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const [existingUsers, setExistingUsers] = useState([]);

    useEffect(() => {
    	const fetchUsers = async () => {
    		try {
    			const responseData = await sendRequest(`https://kcg-test.herokuapp.com/users`, 'GET', null, {});
    			setExistingUsers(responseData.users);
    		} catch(e) {
    			console.log(e);
    		}
	    	
    	};
    	fetchUsers();
    }, []);

    return(
    	<>
    	{!isLoading && existingUsers && 
    		<Earth users={existingUsers}/>
    	}
    	{isLoading && 
    		<LoadingSpinner asOverlay/>
    	}
    	</>
    );
};

export default EarthContainer;