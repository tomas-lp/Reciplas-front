import Link from "next/link"

const index = (props) => {
  return (
    <div className="min-w-screen min-h-screen bg-mediumdark flex flex-row justify-center items-center">
      <div className="bg-transparent flex flex-col items-center">
        <img src="/Logo/logo.png" className="h-52" />
        <div className="card bg-verylight flex flex-col items-center rounded-2xl py-6 px-10">
          <h1 className="mt-5 mb-16 font-light text-4xl font-title">
            Ingresar
          </h1>
          <input
            type="text"
            placeholder="Usuario"
            className="text-sm font-title py-2 px-3 w-64 text-left rounded-xl border-2 border-light focus:outline-none focus:border-primary hover:border-mediumlight mb-10 transition-colors"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="text-sm font-title py-2 px-3 w-64 text-left rounded-xl border-2 border-light focus:outline-none focus:border-primary hover:border-mediumlight transition-colors"
          />
          <Link href="/menu">
            <button className="mb-5 mt-10 py-3 px-8 bg-primary text-white font-body font-normal text-md rounded-xl hover:bg-primarydark transition-colors">
              Iniciar Sesion
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default index
