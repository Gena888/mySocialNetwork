import React from 'react';

const StoreContext = React.createContext(null);

export const Provider = (props) => {
    return (
        <StoreContext.provider value={props.store}>
            {props.children}
        </StoreContext.provider>
    )
}

export default StoreContext;