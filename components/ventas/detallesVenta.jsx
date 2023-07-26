import FilaProducto from "./filaProducto"
import Link from "next/link";
const DetallesVenta = (props) => {
  return(
    <div className="flex flex-col w-full max-w-screen-xl">
        <div className="flex flex-row justify-between items-center mb-5 h-12">
          <div className="flex flex-row items-center">
            <div className="flex justify-center items-center h-10 px-5 bg-medium text-white rounded-xl mr-5 font-title font-normal text-base"><span>Id: 0000</span></div>
            <div className="flex justify-center items-center h-10 px-5 bg-verylight rounded-xl font-title font-normal text-base">
              <span className="mr-8">Cliente: 0000</span>
              <span>Fecha de realización: 01/01/2000</span>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="bg-primary w-16 p-2 rounded-xl flex justify-center items-center mx-2 h-10 hover:h-12 transition-all cursor-pointer"><img src="/Icons/White/eliminar.png" alt="" className="h-6"/></div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5">
          <div className="bg-verylight flex flex-col items-center p-12 rounded-3xl">
            {/* <h2 className="text-black font-title font-light text-2xl mb-5">Productos</h2> */}
            <div className="bg-verylight flex flex-col rounded-3xl w-full">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row items-end h-12 justify-between w-full">
                  <div className="flex flex-row items-end h-12">
                    <div className="bg-light w-24 p-2 rounded-t-xl flex justify-center mx-2 h-8 hover:h-10 transition-all cursor-pointer"><span className="text-title text-sm text-grey">Producto</span></div>
                    <div className="bg-light w-24 p-2 rounded-t-xl flex justify-center mx-2 h-8 hover:h-10 transition-all cursor-pointer"><span className="text-title text-sm text-grey">Cantidad</span></div>
                    <div className="bg-light w-24 p-2 rounded-t-xl flex justify-center mx-2 h-8 hover:h-10 transition-all cursor-pointer"><span className="text-title text-sm text-grey">Precio</span></div>
                  </div>
                  
                  <div className="bg-darkgrey w-16 p-2 rounded-t-xl flex justify-center mx-2 h-10 hover:h-12 transition-all cursor-pointer"><img src="/Icons/White/ordenar.png" alt="" className="h-6"/></div>
                </div>
              </div>
              <FilaProducto></FilaProducto>
              <div className="flex flex-row justify-end mt-5">
                <span className="flex justify-center items-center h-10 px-5 bg-darkgrey text-white rounded-xl font-title font-normal text-lg">Total: $0000</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row mt-5">
          <div className="flex justify-center items-center h-10 px-5 mr-5 bg-primary rounded-xl cursor-pointer hover:bg-primarydark transition-all">
            <img src="/Icons/White/facturar.png" alt="" className="h-5 mr-2"/>
            <span className="text-white font-title font-normal text-lg">Facturar</span>
          </div>
          <div className="flex justify-center items-center h-10 px-5 mr-5 bg-primary rounded-xl cursor-pointer hover:bg-primarydark transition-all">
            <img src="/Icons/White/imprimir.png" alt="" className="h-5 mr-2"/>
            <span className="text-white font-title font-normal text-lg">Imprimir</span>
          </div>
          <div className="flex justify-center items-center h-10 px-5 mr-5 bg-primary rounded-xl cursor-pointer hover:bg-primarydark transition-all">
            <img src="/Icons/White/enviar.png" alt="" className="h-5 mr-2"/>
            <span className="text-white font-title font-normal text-lg">Enviar</span>
          </div>
        </div>
    </div>
  )
}

export default DetallesVenta;