
import axios from "axios"
import React, { useEffect, useState } from 'react'

 const Perfil = () => {

    const [perfil, setPerfil] = useState({})
    const [cambiarPerfil, setCambiarPerfil] = useState(false)    
    const url = 'https://randomuser.me/api/'

  useEffect(()=>{
    axios(url)
    .then(({data}) => setPerfil(data.results[0]))
  },[cambiarPerfil])

  return (
    <div>
       
            <>
            <h1>Datos de perfil</h1>
              <h2>{perfil.name?.title} {perfil.name?.first} {perfil.name?.last}</h2>
              <img src={perfil.picture?.large} alt="" />
              <p>Edad: {perfil.dob?.age}</p>
              <p>Genero: {perfil.gender}</p>
              <p>Ciudad: {perfil.location?.city}</p>
              <p>Pais: {perfil.location?.country}</p>
            </>

            <button onClick={() => setCambiarPerfil(!cambiarPerfil)}>Cambiar Perfil</button>
        
        
    </div>
  )
}

export default Perfil