import EditarCliente from '../../components/clientes/editarCliente'
import Header from '../../components/header'

const editar = (props) => {
  return (
    <>
      <Header></Header>
      <div className="flex flex-col items-center p-10">
        <h1 className="font-title font-light text-3xl mb-10">Editar cliente</h1>
        <EditarCliente></EditarCliente>
      </div>
    </>
  )
}

export default editar
