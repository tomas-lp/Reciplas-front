import Header from '../../components/header'
import ListaVentas from '../../components/ventas/listaVentas'

const index = (props) => {
  return (
    <>
      <Header></Header>
      <div className="flex flex-col items-center p-10">
        <h1 className="font-title font-light text-3xl mb-10">Ventas</h1>
        <ListaVentas></ListaVentas>
      </div>
    </>
  )
}

export default index
