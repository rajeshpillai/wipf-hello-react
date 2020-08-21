import React,{useState} from 'react';
import TextInput from '../components/textinput';

export default function ContactUs() {

  const [contact, setContact] = useState({
    name: "Rajesh Pillai",
    email: "",
    age:""
  });

  const handleChange = (e) => {
    console.log(e.target.value);

    setContact({
      ...contact,
      [e.target.name]: e.target.value
    }) 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(contact));
  }
    
  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <TextInput
        label="Name"
        name="name"
        value= {contact.name}
        placeholder="Enter your name"
        onInputChange = {handleChange}
        />

        <TextInput
          label="Email"
          name="email"
          value={contact.email}
          onInputChange = {handleChange}
          required
        />

      <TextInput
        label="Age"
        type="number"
        name="age"
        value= {contact.age}
        placeholder="Enter your age"
        onInputChange = {handleChange}
        />
        <input type="submit" value="SUBMIT"/>
      </form>
    </div>
  )
}