const DetallesUsuario = (props) => {
  return(
    <div className="flex flex-col w-full max-w-screen-xl">
        <div className="flex flex-row justify-between items-center mb-5 h-12">
          <div className="flex flex-row items-center">
            <div className="flex justify-center items-center h-10 px-5 bg-medium text-white rounded-xl mr-5 font-title font-normal text-base"><span>Id: 0000</span></div>
            <div className="flex justify-center items-center h-10 px-5 bg-verylight rounded-xl font-title font-normal text-base"><span>Fecha de registro: 01/01/2000</span></div>
          </div>
          <div className="flex flex-row items-center">
            <div className="bg-primary w-16 p-2 rounded-xl flex justify-center items-center mx-2 h-10 hover:h-12 transition-all cursor-pointer"><img src="/Icons/White/eliminar.png" alt="" className="h-6"/></div>
            <div className="bg-primary w-16 p-2 rounded-xl flex justify-center items-center mx-2 h-10 hover:h-12 transition-all cursor-pointer"><img src="/Icons/White/editar.png" alt="" className="h-6"/></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="bg-verylight flex flex-col items-center p-12 rounded-3xl">
            <h2 className="text-black font-title font-light text-2xl mb-5">Información</h2>
            <div className="flex flex-col max-w-xl w-full rounded-xl p-3">
              <span className="text-black font-title text-lg font-medium">Nombre y Apellido:</span>
              <input disabled type="text" size="14" className="bg-verylight text-black font-title text-lg font-normal outline-none h-10 w-48" value="John Doe"/>
            </div>
            <div className="flex flex-col max-w-xl w-full rounded-xl p-3">
              <span className="text-black font-title text-lg font-medium">Edad:</span>
              <input disabled type="number" size="14" className="bg-verylight text-black font-title text-lg font-normal outline-none h-10 w-48" value="99"/>
            </div>
            <div className="flex flex-col max-w-xl w-full rounded-xl p-3">
              <span className="text-black font-title text-lg font-medium">Sector:</span>
              <input disabled type="text" size="14" className="bg-verylight text-black font-title text-lg font-normal outline-none h-10 w-48" value="Ejemplo"/>
            </div>
          </div>
          <div className="bg-verylight flex flex-col items-center p-12 rounded-3xl">
            <h2 className="text-black font-title font-light text-2xl mb-5">Información de usuario</h2>
            <div className="flex flex-col max-w-xl w-full rounded-xl p-3">
              <span className="text-black font-title text-lg font-medium">Nombre de usuario:</span>
              <input disabled type="text" size="14" className="bg-verylight text-black font-title text-lg font-normal outline-none h-10 w-48" value="johndoe1234"/>
            </div>
            <div className="flex flex-col max-w-xl w-full rounded-xl p-3">
              <span className="text-black font-title text-lg font-medium">Contraseña:</span>
              <div className="flex flex-row items-center">
                <input disabled size="12" type="password" className="bg-verylight text-black font-title text-lg font-normal outline-none h-10" value="ejemploEjemplo"/>
                <img src="/Icons/mostrar.png" alt="mostrar" className="h-5 mr-2"/>
              </div>
            </div>
            <div className="flex flex-col max-w-xl w-full rounded-xl p-3">
              <span className="text-black font-title text-lg font-medium">Registrado por:</span>
              <input disabled type="text" size="14" className="bg-verylight text-black font-title text-lg font-normal outline-none h-10 w-48" value="Usuario"/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default DetallesUsuario;