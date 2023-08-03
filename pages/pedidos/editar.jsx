import EditarPedido from '../../components/pedidos/editarPedido'
import Header from '../../components/header'

const editar = (props) => {
  return (
    <>
      <Header></Header>
      <div className="flex flex-col items-center p-10">
        <h1 className="font-title font-light text-3xl mb-10">
          Editar pedido
        </h1>
        <EditarPedido></EditarPedido>
      </div>
    </>
  )
}

export default editar
