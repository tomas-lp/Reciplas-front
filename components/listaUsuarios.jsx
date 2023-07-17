import FilaUsuario from "./filaUsuario";

const ListaUsuarios = (props) => {
  return(
    <>
      <div className="flex flex-col w-full max-w-screen-xl">
        <div className="flex flex-row justify-between items-center mb-5">
          <div className="flex flex-row items-center bg-light px-5 py-2 border-2 border-light rounded-full focus-within:border-primary hover:border-primary transition-all">
            <input type="text" placeholder="Busque un ID" className="bg-light text-black placeholder-gr text-md font-normal font-title focus:outline-none"/>
            <img src="/Icons/Grey/buscar.png" alt="" className="h-6"/>
          </div>
          <div className="bg-primary flex flex-row justify-center px-5 py-5 rounded-3xl cursor-pointer hover:bg-primarydark transition-all">
            <img src="/Icons/white/generarreporte.png" alt="" className="h-6 pr-2"/>
            <span className="font-title text-white font-normal text-md">Generar Reporte</span>
          </div>
        </div>

        <div className="bg-verylight flex flex-col p-8 rounded-3xl">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-end h-12">
              <div className="bg-light w-16 p-2 rounded-t-xl flex justify-center mx-2 h-8 hover:h-10 transition-all cursor-pointer"><span className="text-title text-sm text-grey">ID</span></div>
              <div className="bg-light w-24 p-2 rounded-t-xl flex justify-center mx-2 h-8 hover:h-10 transition-all cursor-pointer"><span className="text-title text-sm text-grey">Nombre</span></div>
              <div className="bg-light w-24 p-2 rounded-t-xl flex justify-center mx-2 h-8 hover:h-10 transition-all cursor-pointer"><span className="text-title text-sm text-grey">Fecha nac.</span></div>
              <div className="bg-light w-24 p-2 rounded-t-xl flex justify-center mx-2 h-8 hover:h-10 transition-all cursor-pointer"><span className="text-title text-sm text-grey">Sector</span></div>
              
              <div className="bg-darkgrey w-16 p-2 rounded-t-xl flex justify-center mx-2 h-10 hover:h-12 transition-all cursor-pointer"><img src="/Icons/White/ordenar.png" alt="" className="h-6"/></div>
            </div>

            <div className="flex flex-row items-end h-12">
              <div className="bg-primary w-16 p-2 rounded-t-xl flex justify-center mx-2 h-10 hover:h-12 transition-all cursor-pointer"><img src="/Icons/White/imprimir.png" alt="" className="h-6"/></div>
              <div className="bg-primary w-16 p-2 rounded-t-xl flex justify-center mx-2 h-10 hover:h-12 transition-all cursor-pointer"><img src="/Icons/White/eliminar.png" alt="" className="h-6"/></div>
              <div className="bg-primary w-16 p-2 rounded-t-xl flex justify-center mx-2 h-10 hover:h-12 transition-all cursor-pointer"><img src="/Icons/White/agregar.png" alt="" className="h-6"/></div>
            </div>
          </div>

          <FilaUsuario></FilaUsuario>
        </div>
      </div>
    </>
  )
}

export default ListaUsuarios;