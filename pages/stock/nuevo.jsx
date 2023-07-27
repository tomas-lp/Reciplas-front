import AgregarStock from "../../components/stock/agregarStock";
import Header from "../../components/header";

const nuevo = (props) => {
  return(
    <>
      <Header></Header>
      <div className='flex flex-col items-center p-10'>
        <h1 className='font-title font-light text-3xl mb-10'>Agregar stock</h1>
        <AgregarStock></AgregarStock>
      </div>
    </>
  )
}

export default nuevo;