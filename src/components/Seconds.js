import React, {useState} from 'react'

const Seconds = () => {
    const [counter, setCounter] = useState()
  return (
    <div>You spent {counter} seconds on this site</div>
  )
}

export default Seconds