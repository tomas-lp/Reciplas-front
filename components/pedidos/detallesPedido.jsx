import FilaProducto from './filaProducto'
import Link from 'next/link'
const DetallesPedido = (props) => {
  return (
    <div className="flex flex-col w-full max-w-screen-xl">
      <div className="flex flex-col md:flex-row justify-between items-center mb-5 md:h-12">
        <div className="flex flex-col w-full md:w-auto md:flex-row items-center mb-5 md:mb-0">
          <div className="flex w-full md:w-auto mb-2 md:mb-0 md:mr-5 justify-center items-center h-10 px-5 bg-medium text-white rounded-xl font-title font-normal text-base">
            <span>Id: 0000</span>
          </div>
          <div className="flex flex-col sm:flex-row w-full md:w-auto justify-center items-center sm:h-10 px-5 bg-verylight rounded-xl font-title font-normal text-base">
            <span className="sm:mr-8">Cliente: Nombre</span>
            <span>Fecha de registro: 01/01/2000</span>
          </div>
        </div>
        <div className="flex flex-row items-center h-12 md:h-auto">
          <Link href="/pedidos/editar">
            <div className="bg-primary w-16 p-2 rounded-xl flex justify-center items-center mx-2 h-10 hover:h-12 transition-all cursor-pointer">
              <img src="/Icons/White/editar.png" alt="" className="h-6" />
            </div>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5">
        <div className="bg-verylight flex flex-col items-center px-4 py-12 sm:p-12 rounded-3xl">
          <h2 className="text-black font-title font-light text-2xl mb-5">
            Historial de compras
          </h2>
          <div className="bg-verylight flex flex-col rounded-3xl w-full">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row items-end h-12 justify-between w-full">
                <div className="flex flex-row items-end h-12">
                  <div className="bg-light w-16 p-2 rounded-t-xl flex justify-center mx-2 h-8 hover:h-10 transition-all cursor-pointer">
                    <span className="text-title text-sm text-grey">Id</span>
                  </div>
                  <div className="bg-light w-24 p-2 rounded-t-xl hidden sm:flex justify-center mx-2 h-8 hover:h-10 transition-all cursor-pointer">
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

                <div className="bg-darkgrey w-16 py-2 md:p-2 rounded-t-xl flex justify-center mx-2 h-10 hover:h-12 transition-all cursor-pointer">
                  <img
                    src="/Icons/White/ordenar.png"
                    alt=""
                    className="h-5 md:h-6"
                  />
                </div>
              </div>
            </div>
            <FilaProducto></FilaProducto>
            <div className="flex flex-row justify-end mt-5">
              <span className="flex justify-center items-center h-10 px-5 bg-darkgrey text-white rounded-xl font-title font-normal text-lg">
                Total: $0000
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between mt-5">
        <div className="flex flex-col sm:flex-row w-full md:w-auto justify-center items-center md:h-10 py-2 md:py-0  px-5 bg-verylight rounded-xl font-title font-normal text-base">
          <span className="text-black font-title font-normal text-lg">
            Estado actual: Fabricacion
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-center mt-5 md:mt-0">
          <div className="flex justify-center items-center h-10 px-5 mb-2 sm:mr-5 bg-primary rounded-xl cursor-pointer hover:bg-primarydark transition-all">
            <img src="/Icons/White/confirmar.png" alt="" className="h-5 mr-2" />
            <span className="text-white font-title font-normal text-lg">
              Fabricacion
            </span>
          </div>
          <div className="flex justify-center items-center h-10 px-5 mb-2 sm:mr-5 bg-primary rounded-xl cursor-pointer hover:bg-primarydark transition-all">
            <img src="/Icons/White/confirmar.png" alt="" className="h-5 mr-2" />
            <span className="text-white font-title font-normal text-lg">
              Entrega
            </span>
          </div>
          <div className="flex justify-center items-center h-10 px-5 mb-2 bg-primary rounded-xl cursor-pointer hover:bg-primarydark transition-all">
            <img src="/Icons/White/confirmar.png" alt="" className="h-5 mr-2" />
            <span className="text-white font-title font-normal text-lg">
              Finalizar
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetallesPedido
