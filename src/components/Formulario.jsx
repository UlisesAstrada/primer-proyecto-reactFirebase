import React, { useState } from 'react'

function Formulario() {
  return (
    <div>
      <form className='form-group'>
        <input className='form-control' type="text"/>
        <input className='form-control' type="text"/>
        <input className='btn btn-info btn-block' type="submit"/>
      </form>
    </div>
  )
}

export default Formulario
