import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        debugger;
        this.setState({
            editMode: true
        })
        console.log(this);
    }
    deactivateEditMode = () => {
        debugger;
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    render() {
        return <div>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "-------"}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} onMouseOut={this.deactivateEditMode} value={this.state.status} />
                </div>
            }

        </div>
    }
}

export default ProfileStatus;