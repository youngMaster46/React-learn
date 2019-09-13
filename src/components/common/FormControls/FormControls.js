import React from 'react';
import st from './FormControls.module.css';

const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={st.redBorder + ' ' + hasError ? st.redText : ""}>
            {props.children}
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}></textarea></FormControl>
}


export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}