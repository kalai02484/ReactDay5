import React, { useState } from 'react'

const Forms = () => {

    const [formData, setFormData] = useState({
        name: 'Kalai',
        email: '',
        gender: 'other',
        password: ''
    });

  return (
    <div>
        <h1>Form component</h1>
        <form>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" value={formData.name} required /><br /><br />
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" value={formData.email}  required /><br /><br />
            <label htmlFor='gender' >Gender: </label>
            <select id="gender" name="gender" value={formData.gender}  required >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select><br /><br />   
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password" required /><br /><br />
            <input type="submit" value="Submit" />
        </form>      
    </div>
  )
}

export default Forms
