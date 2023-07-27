import EditarStock from "../../components/stock/editarStock";
import Header from "../../components/header";

const editar = (props) => {
  return(
    <>
      <Header></Header>
      <div className='flex flex-col items-center p-10'>
        <h1 className='font-title font-light text-3xl mb-10'>Editar stock</h1>
        <EditarStock></EditarStock>
      </div>
    </>
  )
}

export default editar;