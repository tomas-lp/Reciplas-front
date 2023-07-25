import Header from '../../components/header'
import ListaClientes from '../../components/clientes/listaClientes';

const index = (props) => {
  return (
    <>
      <Header></Header>
      <div className='flex flex-col items-center p-10'>
        <h1 className='font-title font-light text-3xl mb-10'>Clientes</h1>
        <ListaClientes></ListaClientes>
      </div>
    </>
  )
}

export default index;