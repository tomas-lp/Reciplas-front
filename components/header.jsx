import Link from 'next/link'

const Header = (props) => {
  return (
    <div className="">
      <div className="bg-mediumdark w-full p-5 flex flex-row justify-between items-center">
        <Link href="/menu">
          <img
            src="/Logo/logo2.png"
            alt=""
            className="h-12 sm:h-16 md:h-20 cursor-pointer"
          />
        </Link>
        <div className="flex flex-col-reverse sm:flex-row items-center">
          <div className="flex flex-col items-center sm:items-end mr-3">
            <span className="text-white font-normal text-lg font-title hidden sm:block">
              Bienvenido, Usuario
            </span>
            <Link
              href="/"
              className="text-white font-normal text-base md:text-lg underline font-title hover:text-light transition-colors"
            >
              Cerrar Sesión
            </Link>
          </div>
          <img src="/Other/perfil.png" alt="" className="h-12 md:h-16" />
        </div>
      </div>
    </div>
  )
}

export default Header
