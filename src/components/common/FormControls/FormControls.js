import React from 'react';
import st from './FormControls.module.css';
import {Field} from 'redux-form';

const FormControl = ({ input, meta:{touched, error}, child, ...props }) => {
    const hasError = touched && error;
    return (
        <div className={st.redBorder + ' ' + hasError ? st.redText : ""}>
            {props.children}
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><textarea {...input} {...restProps}></textarea></FormControl>
}


export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const createField = (placeholder, name, validators, component, props = {}, text = '') => {
    return <div><Field placeholder={placeholder} component={component}
        name={name} validate={validators} {...props} /> {text}
    </div>
}