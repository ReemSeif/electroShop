import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { replace, useNavigate } from 'react-router-dom';

function ProtectedRoute({children}) {
  const {currentuser} = useAuth();
  const navigate = useNavigate();
  useEffect(()=>{
 if(!currentuser){
  navigate('/login' ,{replace: true} )
  }
  }, [currentuser , navigate])

 if (!currentuser) return null;

  return children;
    
}

export default ProtectedRoute
