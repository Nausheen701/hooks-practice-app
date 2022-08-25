import React, {useEffect}  from 'react'

const Test = () => {
   
    useEffect(() => { 
        console.log("Merhaba")
    })    
    // }, [testVar])
    // empty array means only render on first render
    // testVar means render on first render and whenever testVar variable is updated
  return (
    <div>Test</div>
  )
}

export default Test