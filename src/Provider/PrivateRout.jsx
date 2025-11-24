import React, { useContext } from 'react'
import { AllContext } from './AuthProvider'
import { Navigate, useLocation } from 'react-router'
import Loading from '../componantes/Loading'

const PrivateRout = ( {children} ) => {

    const location = useLocation()

    const { user, loading} = useContext(AllContext)

    if(loading) {
        return<Loading></Loading>
    }

    if(user) {

        return children
    }

    else {
        return <Navigate state={location.pathname} to={'/auth/login'}> </Navigate>
    }
  
}

export default PrivateRout