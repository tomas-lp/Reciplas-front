import Link from 'next/link'
import FilaProductoEditable from './filaProductoeditable'

const AgregarPedido = (props) => {
  return (
    <div className="flex flex-col w-full max-w-screen-xl">
      <div className="flex flex-col md:flex-row justify-between items-center mb-5 md:h-12">
        <div className="flex flex-col w-full md:w-auto md:flex-row items-center mb-5 md:mb-0">
          <div className="flex flex-col sm:flex-row w-full md:w-auto justify-center items-center sm:h-10 px-4 lg:px-5 bg-verylight rounded-xl font-title font-normal text-base">
            <div className="flex flex-row items-start my-2 ">
              <span className="sm:mr-2">Cliente:</span>
              <input
                type="text"
                className="sm:mb-0 bg-verylight text-center text-black font-title text-base font-normal outline-none w-24 border-b-2 border-verylight focus:border-b-2 focus:border-primary transition-all"
                placeholder="Ejemplo" defaultValue="Ejemplo"
              />
            </div>
          </div>
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

                <div className="bg-darkgrey w-16 py-2 md:p-2 rounded-t-xl flex justify-center mx-2 h-10 hover:h-12 transition-all cursor-pointer">
                  <img
                    src="/Icons/White/agregar.png"
                    alt=""
                    className="h-5 md:h-6"
                  />
                </div>
              </div>
            </div>
            <FilaProductoEditable></FilaProductoEditable> {/*Pasar por props los default values*/}
            <div className="flex flex-row justify-end mt-5">
              <span className="flex justify-center items-center h-10 px-5 bg-darkgrey text-white rounded-xl font-title font-normal text-lg">
                Total: $0000
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center mt-8">
        <Link href="/pedidos" className="mb-2 sm:mb-0">
          <div className="flex justify-center items-center rounded-full bg-red p-5 mx-2 sm:w-48 hover:bg-darkred cursor-pointer transition-all">
            <img
              src="/Icons/White/cancelar.png"
              alt="Cancelar"
              className="h-6 mr-3"
            />
            <span className="text-white font-title text-lg font-medium">
              Cancelar
            </span>
          </div>
        </Link>

        <Link href="/pedidos">
          <div className="flex justify-center items-center rounded-full bg-primary p-5 mx-2 sm:w-48 hover:bg-primarydark cursor-pointer transition-all">
            <img
              src="/Icons/White/confirmar.png"
              alt="Cancelar"
              className="h-6 mr-3"
            />
            <span className="text-white font-title text-lg font-medium">
              Confirmar
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default AgregarPedido
