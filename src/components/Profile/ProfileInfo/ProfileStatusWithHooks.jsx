import React, { useEffect, useState } from 'react';



const ProfileStatusWithHooks = (props) => {


    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    // хок useEffect вызывается при render компоненты 
    // в useEffect вторым параметром передаётся массив зависимостей 

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatusThunk(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <b>Status: </b>
                    <span onDoubleClick={activateEditMode}>{props.status || 'NO STATUS'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input
                        onChange={onStatusChange} onBlur={deactivateEditMode}
                        value={status} autoFocus={true} />
                </div>
            }

        </div>
    )

}

export default ProfileStatusWithHooks;