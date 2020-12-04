import React from 'react';
import s from './ProfileInfo.module.css';
import { updateStatusThunk } from './../../../redux/profile-reducer';


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatusThunk(this.state.status);
    }

    onStatusChange = (e) => {
       this.setState({
           status: e.currentTarget.value
       }); 
    }

    render() {
        //  debugger
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode} >{this.props.status || 'NO STATUS'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
                    </div>
                }

            </div>
        )
    }
}

export default ProfileStatus;