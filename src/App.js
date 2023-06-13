
import './App.css';
import NavBar from './components/Navbar/Navbar';
import FormAddWorker from './components/FormAddWorker/FormAddWorker';
import ListWorker from './components/ListWorker/ListWorker';
import { lista } from './Lista';
import { useState } from 'react';



function App() {
  const [listaColab, setListaColab] = useState(lista);

  const handlerClickAdd = (e) => {
    setListaColab([...listaColab, { id: listaColab.length + 1, ...e }]);
  };

  const handlerSearchNavbar = (listafilter) => {
    const newLista = listafilter.length === 0 ? lista : listafilter;
    setListaColab([...newLista]);
  };

  return (
    <>
      <NavBar onChangeNavbar={handlerSearchNavbar} lista={listaColab} />
      <section>
        <FormAddWorker onClickAddWorker={handlerClickAdd} />
        <hr />
        <ListWorker lista={listaColab} />
      </section>
    </>
  );
}

export default App;
