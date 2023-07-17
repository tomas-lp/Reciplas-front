import Header from '../components/header'
import ListaUsuarios from '../components/listaUsuarios';

const usuarios = (props) => {
  return (
    <>
      <Header></Header>
      <div className='flex flex-col items-center p-10'>
        <h1 className='font-title font-light text-3xl mb-10'>Usuarios</h1>
        <ListaUsuarios></ListaUsuarios>
      </div>
    </>
  )
}

export default usuarios;