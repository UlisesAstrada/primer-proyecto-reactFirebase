import React, { useState } from 'react'

function Form() {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  const Validation = (e) => {
    e.preventDefault()
    console.log('Button pressed')
    !name.trim() ? console.log('Name is empty') : console.log(`Hello ${name}!`)
    !age.trim() ? console.log('Age is empty') : console.log(`Your age is ${age}`)
  }

  return (
    <div className='container'>
      <form onSubmit={Validation} className='form-group'>
        <input 
          placeholder='Introduce your name' 
          className='form-control mb-3 mt-3' 
          type="text"
          onChange={(event) => {setName(event.target.value)}}
        />
        
        <input 
          placeholder='Introduce your age' 
          className='form-control mb-3' 
          type="text"
          onChange={(event) => {setAge(event.target.value)}}
        />
        <input className='btn btn-info btn-block' type="submit"/>
      </form>
    </div>
  )
}

export default Form
