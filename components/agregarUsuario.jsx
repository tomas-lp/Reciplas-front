import Link from "next/link";

const AgregarUsuario = (props) => {
  return(
    <div className="flex flex-col w-full max-w-screen-xl">
      <div className="grid grid-cols-2 gap-5 mb-8">
        <div className="bg-verylight flex flex-col items-center p-12 rounded-3xl">
          <h2 className="text-black font-title font-light text-2xl mb-5">Información</h2>
          <div className="flex flex-col max-w-xl w-full rounded-xl p-3">
            <span className="text-black font-title text-lg font-medium">Nombre y Apellido:</span>
            <input type="text" size="14" className="bg-verylight text-black font-title text-lg font-normal outline-none h-10 w-48 border-b-2 border-verylight focus:border-b-2 focus:border-primary transition-all" placeholder="John Doe"/>
          </div>
          <div className="flex flex-col max-w-xl w-full rounded-xl p-3">
            <span className="text-black font-title text-lg font-medium">Edad:</span>
            <input type="number" size="14" className="bg-verylight text-black font-title text-lg font-normal outline-none h-10 w-48 border-b-2 border-verylight focus:border-b-2 focus:border-primary transition-all" placeholder="99"/>
          </div>
          <div className="flex flex-col max-w-xl w-full rounded-xl p-3">
            <span className="text-black font-title text-lg font-medium">Sector:</span>
            <input type="text" size="14" className="bg-verylight text-black font-title text-lg font-normal outline-none h-10 w-48 border-b-2 border-verylight focus:border-b-2 focus:border-primary transition-all" placeholder="Ejemplo"/>
          </div>
        </div>
        <div className="bg-verylight flex flex-col items-center p-12 rounded-3xl">
          <h2 className="text-black font-title font-light text-2xl mb-5">Información de usuario</h2>
          <div className="flex flex-col max-w-xl w-full rounded-xl p-3">
            <span className="text-black font-title text-lg font-medium">Nombre de usuario:</span>
            <input type="text" size="14" className="bg-verylight text-black font-title text-lg font-normal outline-none h-10 w-48 border-b-2 border-verylight focus:border-b-2 focus:border-primary transition-all" placeholder="johndoe1234"/>
          </div>
          <div className="flex flex-col max-w-xl w-full rounded-xl p-3">
            <span className="text-black font-title text-lg font-medium">Contraseña:</span>
            <div className="flex flex-row items-center">
              <input size="12" type="password" className="bg-verylight text-black font-title text-lg font-normal outline-none h-10 border-b-2 border-verylight focus:border-b-2 focus:border-primary transition-all" placeholder="Ejemplo"/>
              <img src="/Icons/mostrar.png" alt="mostrar" className="h-5 mr-2"/>
            </div>
          </div>
          <div className="flex flex-col max-w-xl w-full rounded-xl p-3">
            <span className="text-black font-title text-lg font-medium">Registrado por:</span>
            <input type="text" size="14" className="bg-verylight text-black font-title text-lg font-normal outline-none h-10 w-48 border-b-2 border-verylight focus:border-b-2 focus:border-primary transition-all" placeholder="Usuario"/>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center">
        <Link href="/usuarios">
          <div className="flex justify-center items-center rounded-full bg-red p-5 mx-2 w-48 hover:bg-darkred cursor-pointer transition-all">
            <img src="/Icons/White/cancelar.png" alt="Cancelar" className="h-6 mr-3"/>
            <span className="text-white font-title text-lg font-medium">Cancelar</span>
          </div>
        </Link>

        <Link href="/usuarios">
          <div className="flex justify-center items-center rounded-full bg-primary p-5 mx-2 w-48 hover:bg-primarydark cursor-pointer transition-all">
            <img src="/Icons/White/confirmar.png" alt="Cancelar" className="h-6 mr-3"/>
            <span className="text-white font-title text-lg font-medium">Confirmar</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default AgregarUsuario;