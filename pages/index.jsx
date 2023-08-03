import Link from 'next/link'

const index = (props) => {
  return (
    <div className="min-w-screen min-h-screen bg-mediumdark flex flex-row justify-center items-center">
      <div className="bg-transparent flex flex-col items-center">
        <img src="/Logo/logo.png" className="h-32 md:h-60 lg:h-48 2xl:h-60" />
        <div className="card bg-verylight flex flex-col items-center rounded-2xl py-3 px-8  lg:py-3 lg:px-8 2xl:py-3 2xl:px-8">
          <h1 className="mt-5 mb-8 font-light text-2xl font-title md:text-3xl md:mb-12 lg:text-2xl lg:mb-8 2xl:text-3xl 2xl:mb-12">
            Ingresar
          </h1>
          <input
            type="text"
            placeholder="Usuario"
            className="text-sm font-title py-2 px-3 w-48 text-left rounded-xl border-2 border-light focus:outline-none focus:border-primary hover:border-mediumlight mb-6 transition-colors md:w-64 lg:w-48 2xl:w-60"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="text-sm font-title py-2 px-3 w-48 text-left rounded-xl border-2 border-light focus:outline-none focus:border-primary hover:border-mediumlight transition-colors md:w-64 lg:w-48 2xl:w-60"
          />
          <Link href="/menu" className="mb-5 mt-10 md:mt-16 lg:mt-10 2xl:mt-16">
            <button className="py-3 px-8 bg-primary text-white font-body font-normal text-sm rounded-xl hover:bg-primarydark transition-colors">
              Iniciar Sesion
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default index
