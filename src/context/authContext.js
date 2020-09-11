import React from 'react';

const authContext = React.createContext({ status: false, signin: () => {} });

export default authContext;