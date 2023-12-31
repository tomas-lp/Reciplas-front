import FilaProducto from './filaProducto'
import Link from 'next/link'
const DetallesCompra = (props) => {
  return (
    <div className="flex flex-col w-full max-w-screen-xl">
      <div className="flex flex-col md:flex-row justify-between items-center mb-5 md:h-12">
        <div className="flex flex-col w-full md:w-auto md:flex-row items-center mb-5 md:mb-0">
          <div className="flex w-full md:w-auto mb-2 md:mb-0 md:mr-5 justify-center items-center h-10 px-4 lg:px-5 bg-medium text-white rounded-xl font-title font-normal text-base">
            <span>Recepcionista: Nombre</span>
          </div>
          <div className="flex flex-col sm:flex-row w-full md:w-auto justify-center items-center sm:h-10 px-4 lg:px-5 bg-verylight rounded-xl font-title font-normal text-base">
            <span className="sm:mr-8">Proveedor: 0000</span>
            <span>Fecha de compra: 01/01/2000</span>
          </div>
        </div>
        <div className="flex flex-row items-center h-12 md:h-auto">
          <div className="bg-primary w-16 p-2 rounded-xl flex justify-center items-center mx-2 h-10 hover:h-12 transition-all cursor-pointer">
            <img src="/Icons/White/eliminar.png" alt="" className="h-6" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5">
        <div className="bg-verylight flex flex-col items-center px-4 py-12 sm:p-12 rounded-3xl">
          {/* <h2 className="text-black font-title font-light text-2xl mb-5">Productos</h2> */}
          <div className="bg-verylight flex flex-col rounded-3xl w-full">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row items-end h-12 justify-between w-full">
                <div className="flex flex-row items-end h-12">
                  <div className="bg-light w-24 p-2 rounded-t-xl flex justify-center mx-2 h-8 hover:h-10 transition-all cursor-pointer">
                    <span className="text-title text-sm text-grey">
                      Producto
                    </span>
                  </div>
                  <div className="bg-light w-24 p-2 rounded-t-xl flex justify-center mx-2 h-8 hover:h-10 transition-all cursor-pointer">
                    <span className="text-title text-sm text-grey">
                      Cantidad
                    </span>
                  </div>
                  <div className="bg-light w-24 p-2 rounded-t-xl hidden sm:flex justify-center mx-2 h-8 hover:h-10 transition-all cursor-pointer">
                    <span className="text-title text-sm text-grey">Precio</span>
                  </div>
                </div>

                <div className="bg-darkgrey w-16 p-2 rounded-t-xl flex justify-center mx-2 h-10 hover:h-12 transition-all cursor-pointer">
                  <img src="/Icons/White/ordenar.png" alt="" className="h-6" />
                </div>
              </div>
            </div>
            <FilaProducto></FilaProducto>
            <div className="flex flex-col sm:flex-row justify-end mt-5">
              <span className="flex justify-center items-center h-10 px-5 bg-darkgrey text-white rounded-xl font-title font-normal text-base mb-2 sm:mb-0 sm:ml-5">
                Cantidad total: 0000
              </span>
              <span className="flex justify-center items-center h-10 px-5 bg-darkgrey text-white rounded-xl font-title font-normal text-base sm:ml-5">
                Importe total: $0000
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row mt-5">
        <div className="flex justify-center items-center h-10 px-5 mb-2 sm:mr-5 bg-primary rounded-xl cursor-pointer hover:bg-primarydark transition-all">
          <img
            src="/Icons/White/registrarpago.png"
            alt=""
            className="h-5 mr-2"
          />
          <span className="text-white font-title font-normal text-lg">
            Registrar Pago
          </span>
        </div>
      </div>
    </div>
  )
}

export default DetallesCompra
