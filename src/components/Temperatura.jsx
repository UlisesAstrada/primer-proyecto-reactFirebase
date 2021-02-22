import React, { useState } from 'react'

function Temperatura() {
  
  const [temperatura, setTemperatura] = useState(19)

  const Subir = () => setTemperatura(temperatura + 1)
  const Bajar = () => setTemperatura(temperatura - 1)

  return (
    <div className='container'>
      <h2>La temperatura es: {temperatura}</h2>
      <div>
        {
          temperatura > 21 ? <p className='alert alert-danger' role='alert'>Hace calor!</p> : <p className='alert alert-primary' role='alert'>Hace frío!</p>
        }
      </div>
      <button className='btn btn-success btn-block me-3' onClick={Bajar}>Reducir temperatura</button>
      <button className='btn btn-success btn-block' onClick={Subir}>Aumentar temperatura</button>
    </div>
  )
}

export default Temperatura
