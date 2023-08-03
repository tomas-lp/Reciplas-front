import Header from '../../components/header'
import ListaPedidos from '../../components/pedidos/listaPedidos'

const index = (props) => {
  return (
    <>
      <Header></Header>
      <div className="flex flex-col items-center p-10">
        <h1 className="font-title font-light text-3xl mb-10">Pedidos</h1>
        <ListaPedidos></ListaPedidos>
      </div>
    </>
  )
}

export default index
