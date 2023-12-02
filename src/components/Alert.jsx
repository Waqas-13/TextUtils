import React from 'react'

function Alert(props) {

    const onInputUppercase = (word) => {
        const firstLetter = word.toLowerCase();
        return firstLetter.charAt(0).toUpperCase() + firstLetter.slice(1);
        
      };
    return (
        props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{onInputUppercase(props.alert.type)}</strong>: {props.alert.msg}
        </div>
    )
}

export default Alert;