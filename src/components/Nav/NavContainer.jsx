import React from 'react';
import StoreContext from './../../StoreContext';
import Nav from './Nav';


const NavContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                 
                    return <Nav navPage={store.getState().navPage} />
                }
            }

        </StoreContext.Consumer>
    );
}

export default NavContainer;


