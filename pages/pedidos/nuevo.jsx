import AgregarPedido from '../../components/pedidos/agregarPedido'
import Header from '../../components/header'

const nuevo = (props) => {
  return (
    <>
      <Header></Header>
      <div className="flex flex-col items-center p-10">
        <h1 className="font-title font-light text-3xl mb-10">Agregar pedido</h1>
        <AgregarPedido></AgregarPedido>
      </div>
    </>
  )
}

export default nuevo
