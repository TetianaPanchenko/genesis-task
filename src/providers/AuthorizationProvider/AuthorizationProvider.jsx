import React, {
    useMemo,
    useState,
    useEffect,
    createContext,
} from 'react';
import axios from 'axios';

export const AuthorizationContext = createContext(undefined);

const AuthorizationProvider = ({children}) => {
    const [token, setToken] = useState('');

    const getAuthorizationData = async () => {
        try {
            const response = await axios.get('http://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions');
            setToken(response.data.token);
        } catch {}
    };

    useEffect(() => {
        getAuthorizationData();
    }, []);

    const providerValue = useMemo(() => {
        return {
            token,
        };
    }, [token]);

    return (
        <AuthorizationContext.Provider value={providerValue}>
            {children}
        </AuthorizationContext.Provider>
    );
};

export { AuthorizationProvider };
