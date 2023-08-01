import FilaCompras from "./filaCompra"
import Link from "next/link";
const DetallesProveedor = (props) => {
  return(
    <div className="flex flex-col w-full max-w-screen-xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-5 md:h-12">
          <div className="flex flex-col w-full md:w-auto md:flex-row items-center mb-5 md:mb-0">
            <div className="flex w-full md:w-auto mb-2 md:mb-0 md:mr-5 justify-center items-center h-10 px-5 bg-medium text-white rounded-xl font-title font-normal text-base"><span>Id: 0000</span></div>
            <div className="flex w-full md:w-auto justify-center items-center h-10 px-5 bg-verylight rounded-xl font-title font-normal text-base"><span>Fecha de registro: 01/01/2000</span></div>
          </div>
          <div className="flex flex-row items-center h-12 md:h-auto">
            <div className="bg-primary w-16 p-2 rounded-xl flex justify-center items-center mx-2 h-10 hover:h-12 transition-all cursor-pointer"><img src="/Icons/White/imprimir.png" alt="" className="h-6"/></div>
            <div className="bg-primary w-16 p-2 rounded-xl flex justify-center items-center mx-2 h-10 hover:h-12 transition-all cursor-pointer"><img src="/Icons/White/eliminar.png" alt="" className="h-6"/></div>
            <Link href="/proveedores/editar">
              <div className="bg-primary w-16 p-2 rounded-xl flex justify-center items-center mx-2 h-10 hover:h-12 transition-all cursor-pointer"><img src="/Icons/White/editar.png" alt="" className="h-6"/></div>
            </Link> 
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="bg-verylight flex flex-col items-center p-12 rounded-3xl">
            <h2 className="text-black font-title font-light text-2xl mb-5">Información</h2>
            <div className="flex flex-col max-w-xl w-full rounded-xl p-3">
              <span className="text-black font-title text-lg font-medium">Nombre o razón social:</span>
              <input disabled type="text" size="14" className="bg-verylight text-black font-title text-lg font-normal outline-none h-10 w-48" value="John Doe"/>
            </div>
            <div className="flex flex-col max-w-xl w-full rounded-xl p-3">
              <span className="text-black font-title text-lg font-medium">Rubro:</span>
              <input disabled type="text" size="14" className="bg-verylight text-black font-title text-lg font-normal outline-none h-10 w-48" value="Ejemplo"/>
            </div>
            <div className="flex flex-col max-w-xl w-full rounded-xl p-3">
              <span className="text-black font-title text-lg font-medium">IVA:</span>
              <input disabled type="text" size="14" className="bg-verylight text-black font-title text-lg font-normal outline-none h-10 w-48" value="Ejemplo"/>
            </div>
            <div className="flex flex-col max-w-xl w-full rounded-xl p-3">
              <span className="text-black font-title text-lg font-medium">CUIT:</span>
              <input disabled type="text" size="14" className="bg-verylight text-black font-title text-lg font-normal outline-none h-10 w-48" value="Ejemplo"/>
            </div>
          </div>
          <div className="bg-verylight flex flex-col items-center p-12 rounded-3xl">
            <h2 className="text-black font-title font-light text-2xl mb-5">Contacto</h2>
            <div className="flex flex-col max-w-xl w-full rounded-xl p-3">
              <span className="text-black font-title text-lg font-medium">Telefono:</span>
              <input disabled type="text" size="14" className="bg-verylight text-black font-title text-lg font-normal outline-none h-10 w-48" value="0000123456"/>
            </div>
            <div className="flex flex-col max-w-xl w-full rounded-xl p-3">
              <span className="text-black font-title text-lg font-medium">Dirección:</span>
              <input disabled type="text" size="14" className="bg-verylight text-black font-title text-lg font-normal outline-none h-10 w-48" value="Ejemplo"/>
            </div>
            <div className="flex flex-col max-w-xl w-full rounded-xl p-3">
              <span className="text-black font-title text-lg font-medium">Email:</span>
              <input disabled type="text" size="14" className="bg-verylight text-black font-title text-lg font-normal outline-none h-10 w-48" value="Ejemplo"/>
            </div>
          </div>
          <div className="bg-verylight flex flex-col items-center px-4 py-12 sm:p-12 rounded-3xl col-span-full">
            <h2 className="text-black font-title font-light text-2xl mb-5">Historial de compras</h2>
            
            <div className="bg-verylight flex flex-col rounded-3xl w-full">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row items-end h-12 justify-between w-full">
                  <div className="flex flex-row items-end h-12">
                    <div className="bg-light w-24 p-2 rounded-t-xl flex justify-center mx-2 h-8 hover:h-10 transition-all cursor-pointer"><span className="text-title text-sm text-grey">Fecha</span></div>
                    <div className="hidden bg-light w-24 p-2 rounded-t-xl sm:flex justify-center mx-2 h-8 hover:h-10 transition-all cursor-pointer"><span className="text-title text-sm text-grey">Total en kg</span></div>
                    <div className="bg-light w-24 p-2 rounded-t-xl flex justify-center mx-2 h-8 hover:h-10 transition-all cursor-pointer"><span className="text-title text-sm text-grey">Total en $</span></div>
                  </div>
                  
                  <div className="bg-darkgrey w-16 py-2 sm:p-2 rounded-t-xl flex justify-center mx-2 h-10 hover:h-12 transition-all cursor-pointer"><img src="/Icons/White/ordenar.png" alt="" className="h-5 sm:h-6"/></div>
                </div>
              </div>
              <FilaCompras></FilaCompras>
            </div>
          </div>
        </div>
    </div>
  )
}

export default DetallesProveedor;