import React from 'react'

function Alerts(props) {
    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
  return (
    props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert" >
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
    </div>
  )
}

export default Alerts;
