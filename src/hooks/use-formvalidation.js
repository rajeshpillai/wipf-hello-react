import React, {useState, useEffect} from 'react';

export function useFormValidation(initialState={}, validate, afterSubmit) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);


  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      setSubmitting(false);
      if (noErrors) {
        afterSubmit();
      } 
    }
  },[errors])

  function handleChange(e){
    console.log(e.target);
    e.persist();
    setValues(previousValues => ({
      ...previousValues,
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    // logic goes here
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
  }

  return {
    handleSubmit,
    handleChange,
    values,
    errors,
    isSubmitting
  }
}

