// SurveyField
import React from 'react';
// {input} same as props.input
export default ({ input, label, meta: { error, touched } }) => {
  // console.log(meta);
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }}/>
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  )
  // if touched is false, it will stop interpreting  && error
}

