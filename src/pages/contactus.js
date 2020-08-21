import React from 'react';
import TextInput from '../components/textinput';

export default function ContactUs() {
  const handleChange = (value) => {
    console.log(value);
  }
  
  return (
    <div>
      <h2>Contact Us</h2>
      <TextInput
       label="Name"
       name="name"
       value="Rajesh Pillai"
       placeholder="Enter your name"
       onInputChange = {handleChange}
      />

      <TextInput
        label="Email"
        name="email"
      />

    </div>
  )
}