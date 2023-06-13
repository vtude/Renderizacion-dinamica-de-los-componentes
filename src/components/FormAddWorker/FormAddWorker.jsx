
import { Input } from '../Input/Input';
import Button from 'react-bootstrap/Button';
import "./FormAddWorker.css";
import {useState} from "react";


function FormAddWorker({onClickAddWorker}) {
const [nombre ,setNombre] = useState();
const [correo ,setCorreo] = useState();



  const handlerOnClick = () =>{
    onClickAddWorker({
      nombre:nombre,
      correo:correo,
    });
  }
  return (
    <div className="form">

      <Input type="text" 
      placeholder="Nombre Colaborador" 
      className="form_input"
      onChangeInput={(e)=> setNombre(e.target.value)} 
      />

      <Input type="text" 
      placeholder="Correo Colaborador" 
      className="form_input"
      onChangeInput={(e)=> setCorreo(e.target.value)}
      />

      <Button variant="outline-primary" onClick={handlerOnClick} >
        Agregar colaboradores
      </Button>
    
    </div>
  );
}

export default FormAddWorker