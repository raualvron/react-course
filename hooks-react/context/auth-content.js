import React from 'react';

// Pass to all components without using props
const authContext = React.createContext({
    authenticated: false,
    login: () => { }
});

export default authContext;