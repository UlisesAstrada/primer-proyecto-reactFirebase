import React, { Fragment, useState } from 'react'

function Temperatura() {
  
  const [temperatura, setTemperatura] = useState(19)

  const Subir = () => setTemperatura(temperatura + 1)
  const Bajar = () => setTemperatura(temperatura - 1)

  return (
    <Fragment>
      <h2>La temperatura es: {temperatura}</h2>
      <p>
        {
          temperatura > 21 ? 'Hace calor!' : 'Hace frío!'
        }
      </p>
      <button onClick={Subir}>Aumentar temperatura</button>
      <button onClick={Bajar}>Reducir temperatura</button>
    </Fragment>
  )
}

export default Temperatura
