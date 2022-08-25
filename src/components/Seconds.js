import React, {useEffect, useState} from 'react'

const Seconds = () => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            // setCounter(counter+1)
            setCounter(counter => counter+1)
        }, 1000)

        return () => {
            clearInterval(timer)
        }

    }, [])
    
  
    return (
    <div>You spent {counter} seconds on this site. </div>
  )
}

export default Seconds

// useEffect hook is like componentDidMount