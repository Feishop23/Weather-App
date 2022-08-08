import React, { useState } from 'react'

const useTemp = () => {
    const [temp, setTemp] = useState(false)
    const Clim = () => {
        setTemp(!temp)
    }
 return{
    
    Clim,
    temp
 }
}

export default useTemp