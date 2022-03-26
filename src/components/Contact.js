import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function Contact() {
	const [formState, setFormState] = useState({ name: '', email: '', message: '' });

	const [errorMessage, setErrorMessage] = useState('');
	const { name, email, message } = formState;
  
	const handleSubmit = (e) => {
	  e.preventDefault();
	  if (!errorMessage) {
		console.log('Submit Form', formState);
	  }
	};
  
	const handleChange = (e) => {
	  if (e.target.name === 'email') {
		const isValid = validateEmail(e.target.value);
		if (!isValid) {
		  setErrorMessage('Your email is invalid.');
		} else {
		  setErrorMessage('');
		}
	  } else {
		if (!e.target.value.length) {
		  setErrorMessage(`${e.target.name} is required.`);
		} else {
		  setErrorMessage('');
		}
	  }
	  if (!errorMessage) {
		setFormState({ ...formState, [e.target.name]: e.target.value });
		console.log('Handle Form', formState);
	  }
	};
	return(
		<>
		<div className="header">
				<h3>Contact</h3>
			</div>
		

			<form onSubmit={handleSubmit} >
          <div className="form-group">
            <label for="nameImput">Name</label>
            <input type="text" name="name" defaultValue={name} onBlur={handleChange} className="form-control" id="nameImput" placeholder="Name" />
          </div>
          <div className="form-group">
            <label for="emailImput">Email</label>
            <input name="email" type="email" defaultValue={email} onBlur={handleChange} className="form-control" id="emailImput" placeholder="email@domain.com" />
          </div>
		  <div className="form-group">
            <label for="emailImput">Message</label>
            <textarea name="message" type="message" defaultValue={message} onBlur={handleChange} className="form-control" />
          </div>
          <input type="submit" value="Submit" className="btn btn-primary mt-4 mb-4" />
        </form>
  
		</>
	)
}

export default Contact;