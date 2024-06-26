import { useState } from 'react'
import './Form.css'

function Formulario() {

  const [alumno,setAlumno] = useState({
    "nombre": "",
    "apellido": "",
    "segundoNombre": ""
  })

  const mostrarDatos = () =>{
    console.log(alumno);
  }
  // const [nombre, setNombre] = useState("");

  return (
    <>
    <h1>Form de Registro</h1>
    <h4>Por favor complete con sus datos el formulario</h4>
    <h3><b>Datos del Estudiante</b></h3>
    <div className='Contenedor_estudiante'>
      {/* Datos del Estudiante */}
    <div>
    <input name='Nombre' onChange={(e)=>{ setAlumno({...alumno, "nombre": e.target.value}) }} /><br />
    <label htmlFor="Nombre">Nombre</label><br />
    </div>
    <div>
    <input name='SegundoNombre' onChange={(e)=> { setAlumno({...alumno, "segundoNombre": e.target.value}) } }/><br />
    <label htmlFor="SegundoNombre">Segundo Nombre</label><br />
    </div>
    <div>
    <input name='Apellido' onChange={(e)=> { setAlumno({...alumno, "apellido": e.target.value}) } }/><br />
    <label htmlFor="Apellido">Apellido</label><br />
    </div>
    </div>
      {/* Direccion */}
    <div className='Contenedor_direccion'>
    <h3><b>Direccion</b></h3>
    <label htmlFor="Calle">Calle</label><br />
    <input type="text" /><br />
    <label htmlFor="Numero">Numero</label><br />
    <input type="number" /><br />
    <div>
    <div className='ciudad-provincia'>
    <div>
    <label htmlFor="Ciudad">Ciudad</label><br />
    <input type="text" />
    </div>
    <div>
    <label htmlFor="Provincia">Provincia</label><br />
    <input type="text" /><br />
    </div>
    </div>
    </div>
    <label htmlFor="CodigoPostal">Codigo Postal</label><br />
    <input type="text" /><br />

    <h3><b>Email</b></h3>
    <input type="email" />

    <h3><b>Contraseña</b></h3>
    <input type="password" />

    <h3><b>Carrera</b></h3>
    <select name="Carrera" id="">
      <option value="">Ing Electronica</option>
      <option value="">Ing Electronic</option>
      <option value="">Ing Electronic</option>
      <option value="">Ing Electronic</option>
    </select>
    </div><br />
    <div>
    <button className='registrar' onClick={mostrarDatos}>Registrar</button>
    </div><br />
    {/* HTML */}

    </>
  )
}

export default Formulario
