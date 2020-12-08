import React from 'react';
import s from './FormsControls.module.css'
import { Field } from 'redux-form';



const FormControl = ({ input, meta: { touched, error }, ...props }) => {
    const hasError = touched && error;
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}


export const Textarea = (props) => {

    const { input, meta, child, ...restProps } = props
    return (
        <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
    )
}

export const Input = (props) => {

    const { input, meta, child, ...restProps } = props
    return (
        <FormControl {...props}><input {...input} {...restProps} /></FormControl>
    )
}

export const createField = (validate, placeholder, component, name, type) => (
    <div>
        <Field
            validate={validate}
            placeholder={placeholder}
            component={component}
            name={name}
            type={type}
        />
    </div>
)


