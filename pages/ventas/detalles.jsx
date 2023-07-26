import DetallesVenta from "../../components/ventas/detallesVenta";
import Header from "../../components/header";

const detalles = (props) => {
  return(
    <>
      <Header></Header>
      <div className='flex flex-col items-center p-10'>
        <h1 className='font-title font-light text-3xl mb-10'>Detalles de venta</h1>
        <DetallesVenta></DetallesVenta>
      </div>
    </>
  )
}

export default detalles;