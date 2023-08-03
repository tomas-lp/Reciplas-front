import Header from '../../components/header'
import ListaStock from '../../components/stock/listaStock'

const index = (props) => {
  return (
    <>
      <Header></Header>
      <div className="flex flex-col items-center p-10">
        <h1 className="font-title font-light text-3xl mb-10">Stock</h1>
        <ListaStock></ListaStock>
      </div>
    </>
  )
}

export default index
