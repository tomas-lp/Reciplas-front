import Link from "next/link";
const DetallesStock = (props) => {
  return(
    <div className="flex flex-col w-full max-w-screen-xl">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-5 lg:h-12">
        <div className="flex flex-col w-full md:w-auto md:flex-row items-center mb-5 lg:mb-0">
          <div className="flex justify-center w-full md:w-auto items-center h-10 px-5 bg-medium text-white rounded-xl mb-2 md:mb-0 md:mr-5 font-title font-normal text-base"><span>Id: 0000</span></div>
          <div className="flex justify-center w-full md:w-auto items-center h-10 px-5 bg-verylight rounded-xl mb-2 md:mb-0 md:mr-5 font-title font-normal text-base"><span>Tipo: Productos producidos</span></div>
          <div className="flex justify-center w-full md:w-auto items-center h-10 px-5 bg-verylight rounded-xl font-title font-normal text-base"><span>Fecha de registro: 01/01/2000</span></div>
        </div>
        <div className="flex flex-row items-center h-12 sm:h-auto">
          <div className="bg-primary w-16 p-2 rounded-xl flex justify-center items-center mx-2 h-10 hover:h-12 transition-all cursor-pointer"><img src="/Icons/White/imprimir.png" alt="" className="h-6"/></div>
          <Link href="/stock/editar">
            <div className="bg-primary w-16 p-2 rounded-xl flex justify-center items-center mx-2 h-10 hover:h-12 transition-all cursor-pointer"><img src="/Icons/White/editar.png" alt="" className="h-6"/></div>
          </Link> 
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        <div className="bg-verylight flex flex-col items-center p-12 rounded-3xl">
          <h2 className="text-black font-title font-light text-2xl mb-5">Información</h2>
          <div className="flex flex-col max-w-xl w-full rounded-xl p-3">
            <span className="text-black font-title text-lg font-medium">Nombre:</span>
            <input disabled type="text" size="14" className="bg-verylight text-black font-title text-lg font-normal outline-none h-10 w-48 border-b-2 border-verylight" defaultValue="Ejemplo" placeholder="Ejemplo"/>
          </div>
          <div className="flex flex-col max-w-xl w-full rounded-xl p-3">
            <span className="text-black font-title text-lg font-medium">Descripción:</span>
            <textarea disabled name="" id="" rows="3" className="resize-none appearance-none bg-verylight text-black font-title text-lg font-normal outline-none h-24 w-64 border-b-2 border-verylight" defaultValue="Ejemplo" placeholder="Ejemplo"></textarea>
          </div>
        </div>
        <div className="bg-verylight flex flex-col items-center p-12 rounded-3xl">
          <h2 className="text-black font-title font-light text-2xl mb-5">Datos de stock</h2>
          <div className="flex flex-col max-w-xl w-full rounded-xl p-3">
            <span className="text-black font-title text-lg font-medium">Cantidad:</span>
            <input disabled type="text" size="14" className="bg-verylight text-black font-title text-lg font-normal outline-none h-10 w-48 border-b-2 border-verylight" defaultValue="0000" placeholder="0000"/>
          </div>
          <div className="flex flex-col max-w-xl w-full rounded-xl p-3">
            <span className="text-black font-title text-lg font-medium">Cantidad mínima:</span>
            <div className="flex flex-row items-center">
              <input disabled size="12" type="text" className="bg-verylight text-black font-title text-lg font-normal outline-none h-10 border-b-2 border-verylight" defaultValue="0000" placeholder="0000"/>
            </div>
          </div>
          <div className="flex flex-col max-w-xl w-full rounded-xl p-3">
            <span className="text-black font-title text-lg font-medium">Precio:</span>
            <input disabled type="text" size="14" className="bg-verylight text-black font-title text-lg font-normal outline-none h-10 w-48 border-b-2 border-verylight" defaultValue="0000" placeholder="0000"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetallesStock;