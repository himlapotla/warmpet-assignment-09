import React, { useContext } from 'react'
import { AllContext } from './AuthProvider'
import { Navigate, useLocation } from 'react-router'

const PrivateRout = ( {children} ) => {

    const location = useLocation()
    console.log(location);
    

    const { user } = useContext(AllContext)

    if(user) {

        return children
    }
    else {
        return <Navigate state={location.pathname} to={'/auth/login'}> </Navigate>
    }
  
}

export default PrivateRout