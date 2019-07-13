import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    Max
                </div>
                <div className={classes.dialog}>
                    Dimych
                </div>
                <div className={classes.dialog}>
                    Vitya
                </div>
                <div className={classes.dialog}>
                    Dyadya
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>I am Jack. Nice to meet you, Sandra.</div>
                <div className={classes.message}>Glad to see you too, Jack. Are you alone at this party?</div>
                <div className={classes.message}>Yes, I am. My friend has fallen ill today and decided to stay at home. And you?</div>
            </div>
        </div>
    );
}

export default Dialogs;