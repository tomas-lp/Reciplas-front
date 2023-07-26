import Header from '../../components/header'
import ListaCompras from '../../components/compras/listaCompras';

const index = (props) => {
  return (
    <>
      <Header></Header>
      <div className='flex flex-col items-center p-10'>
        <h1 className='font-title font-light text-3xl mb-10'>Compras</h1>
        <ListaCompras></ListaCompras>
      </div>
    </>
  )
}

export default index;