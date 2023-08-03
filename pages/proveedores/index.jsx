import Header from '../../components/header'
import ListaProveedores from '../../components/proveedores/listaProveedores'

const index = (props) => {
  return (
    <>
      <Header></Header>
      <div className="flex flex-col items-center p-10">
        <h1 className="font-title font-light text-3xl mb-10">Proveedores</h1>
        <ListaProveedores></ListaProveedores>
      </div>
    </>
  )
}

export default index
