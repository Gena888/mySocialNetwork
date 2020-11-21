import { connect } from 'react-redux';
import Nav from './Nav';




let mapStateToProps = (state) => {
    return {
        navPage: state.navPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const NavContainer = connect(mapStateToProps, mapDispatchToProps) (Nav);

export default NavContainer;


