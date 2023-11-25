import Link from 'next/link'
import Header from '../components/header'

const Menu = (props) => {
  return (
    <>
      <Header></Header>
      <div className="w-full h-full bg-white flex flex-col items-center p-10">
        <h1 className="font-title text-3xl font-light mb-10">
          Menú de usuario
        </h1>
        <div className="grid grid-cols-1 gap-4 w-full max-w-screen-md sm:grid-cols-2 md:grid-cols-3">
          <Link href="/usuarios" className="">
            <div className="rounded-3xl bg-mediumdark flex flex-row items-center justify-center p-5 hover:bg-dark cursor-pointer transition-all hover:shadow-2xl sm:flex-col">
              <img
                src={'/Icons/white/usuario.png'}
                alt=""
                className="h-10 mr-4 sm:h-12 sm:mr-0 sm:mb-4"
              />
              <span className="font-medium text-white text-lg font-title">
                Usuarios
              </span>
            </div>
          </Link>
          <Link href="/clientes">
            <div className="rounded-3xl bg-mediumdark flex flex-row items-center justify-center p-5 hover:bg-dark cursor-pointer transition-all hover:shadow-2xl sm:flex-col">
              <img
                src={'/Icons/white/clientes.png'}
                alt=""
                className="h-10 mr-4 sm:h-12 sm:mr-0 sm:mb-4"
              />
              <span className="font-medium text-white text-md font-title">
                Clientes
              </span>
            </div>
          </Link>
          <Link href="/proveedores">
            <div className="rounded-3xl bg-mediumdark flex flex-row items-center justify-center p-5 hover:bg-dark cursor-pointer transition-all hover:shadow-2xl sm:flex-col">
              <img
                src={'/Icons/white/proveedores.png'}
                alt=""
                className="h-10 mr-4 sm:h-12 sm:mr-0 sm:mb-4"
              />
              <span className="font-medium text-white text-md font-title">
                Proveedores
              </span>
            </div>
          </Link>
          <Link href="/ventas">
            <div className="rounded-3xl bg-mediumdark flex flex-row items-center justify-center p-5 hover:bg-dark cursor-pointer transition-all hover:shadow-2xl sm:flex-col">
              <img
                src={'/Icons/white/ventas.png'}
                alt=""
                className="h-10 mr-4 sm:h-12 sm:mr-0 sm:mb-4"
              />
              <span className="font-medium text-white text-md font-title">
                Ventas
              </span>
            </div>
          </Link>
          <Link href="/compras">
            <div className="rounded-3xl bg-mediumdark flex flex-row items-center justify-center p-5 hover:bg-dark cursor-pointer transition-all hover:shadow-2xl sm:flex-col">
              <img
                src={'/Icons/white/compras.png'}
                alt=""
                className="h-10 mr-4 sm:h-12 sm:mr-0 sm:mb-4"
              />
              <span className="font-medium text-white text-md font-title">
                Compras
              </span>
            </div>
          </Link>
          <Link href="/stock">
            <div className="rounded-3xl bg-mediumdark flex flex-row items-center justify-center p-5 hover:bg-dark cursor-pointer transition-all hover:shadow-2xl sm:flex-col">
              <img
                src={'/Icons/white/stock.png'}
                alt=""
                className="h-10 mr-4 sm:h-12 sm:mr-0 sm:mb-4"
              />
              <span className="font-medium text-white text-md font-title">
                Stock
              </span>
            </div>
          </Link>
          <Link href="/pedidos">
            <div className="rounded-3xl bg-mediumdark flex flex-row items-center justify-center p-5 hover:bg-dark cursor-pointer transition-all hover:shadow-2xl sm:flex-col">
              <img
                src={'/Icons/white/pedidos.png'}
                alt=""
                className="h-10 mr-4 sm:h-12 sm:mr-0 sm:mb-4"
              />
              <span className="font-medium text-white text-md font-title">
                Pedidos
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Menu
