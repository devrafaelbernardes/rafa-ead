import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useQuery, useSubscription } from '@apollo/react-hooks';

import * as storage from 'storage';
import { GET_CURRENTY_USER } from 'services/api/query';
import objectSubscription, { STUDENT_UPDATED } from 'services/api/subscription';
import { STUDENT } from 'services/api/responseAPI';

const useRequest = ({ request, url, autoLoad = true, data, config }) => {
    let [reload, setReload] = useState(false);
    let [loading, setLoading] = useState(false);
    let [_data, setData] = useState(null);
    let [error, setError] = useState(null);

    const load = useCallback(async () => {
        setLoading(true);
        let result = null;
        try {
            let query = await request(url, data, config);
            result = query.data;
            setData(result);
        } catch (err) {
            setError(err);
        }
        setLoading(false);
        return result;
    }, [request, url, data, config]);

    useEffect(() => {
        if (reload || autoLoad) {
            load();
        }
    }, [reload, autoLoad, load]);

    const refresh = useCallback(async () => {
        setReload(prev => !prev);
    }, []);

    return [load, { loading, data: _data, error, refresh }];
}

export const usePost = ({ url, autoLoad = true, data, config }) => {
    return useRequest({ request: axios.post, autoLoad, url, data, config });
};

export const useGet = ({ url, autoLoad = true, data, config }) => {
    return useRequest({ request: axios.get, autoLoad, url, data, config });
};

export function usePersistedState(key, initialState, isJSON = false) {
    const [state, setState] = useState(() => {
        const storageValue = storage.get(key);
        if (storageValue) {
            return isJSON ? JSON.parse(storageValue) : storageValue;
        }
        return initialState;
    });

    useEffect(() => {
        storage.set(key, isJSON ? JSON.stringify(state) : state);
    }, [key, state, isJSON]);

    return [state, setState];
}

export const useAuth = () => {
    let [currentyData, setCurrentyData] = useState(null);
    let [currentyError, setCurrentyError] = useState(null);
    
    const { data, loading, error, refetch } = useQuery(GET_CURRENTY_USER);
    const { data: dataUpdateUser, error : errorUpdateUser } = useSubscription(STUDENT_UPDATED, objectSubscription({ studentId: currentyData && currentyData[STUDENT.ID] }));

    useEffect(() => {
        if (error) {
            setCurrentyError(error);
        } else if (data && data.response) {
            setCurrentyData(data.response);
        }
    }, [data, error]);

    useEffect(() => {
        if (errorUpdateUser) {
            setCurrentyError(errorUpdateUser);
        } else if (dataUpdateUser && dataUpdateUser.response) {
            setCurrentyData(dataUpdateUser.response);
        }
    }, [dataUpdateUser, errorUpdateUser]);

    return { loading, data: currentyData, error: currentyError, refetch };
}