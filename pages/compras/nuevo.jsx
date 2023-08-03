import AgregarCompra from '../../components/compras/agregarCompra'
import Header from '../../components/header'

const detalles = (props) => {
  return (
    <>
      <Header></Header>
      <div className="flex flex-col items-center p-10">
        <h1 className="font-title font-light text-3xl mb-10">Agregar compra</h1>
        <AgregarCompra></AgregarCompra>
      </div>
    </>
  )
}

export default detalles
