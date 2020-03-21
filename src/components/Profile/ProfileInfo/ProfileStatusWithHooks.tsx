import React, { useState, useEffect } from 'react';
type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {
    let [editMode, setEditMode] = useState<boolean>(false);
    let [status, setStatus] = useState<string>(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e:any) => {
        setStatus(e.currentTarget.value);
    }
    return <div>
        {!editMode &&
            <div>
                Status:
                    <span onDoubleClick={activateEditMode} >{status || "-------"}</span>
            </div>
        }
        {editMode &&
            <div>
                <input onBlur={deactivateEditMode} onChange={onStatusChange} value={status} />
            </div>
        }

    </div>
}

export default ProfileStatusWithHooks;