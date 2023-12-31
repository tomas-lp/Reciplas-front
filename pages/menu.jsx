import Link from 'next/link'
import Header from '../components/header'
import { useState, useEffect } from 'react'

const Menu = (props) => {
  const [usuario, setUsuario] = useState('')

  useEffect(() => {
    setUsuario(localStorage.getItem('usuario'))
  }, [])
  return (
    <>
      <Header></Header>
      <div className="w-full h-full bg-white flex flex-col items-center p-10">
        <h1 className="font-title text-3xl font-light mb-10">
          Menú de {usuario}
        </h1>
        <div className="grid grid-cols-1 gap-4 w-full max-w-screen-md sm:grid-cols-2 md:grid-cols-3">
          {['admin'].includes(usuario) && (
            <Link href="/usuarios" className="">
              <div className="rounded-3xl bg-mediumdark flex flex-row items-center justify-center p-5 hover:bg-dark cursor-pointer transition-all hover:shadow-2xl sm:flex-col">
                <img
                  src={'/Icons/White/usuario.png'}
                  alt=""
                  className="h-10 mr-4 sm:h-12 sm:mr-0 sm:mb-4"
                />
                <span className="font-medium text-white text-lg font-title">
                  Usuarios
                </span>
              </div>
            </Link>
          )}
          {['admin', 'ventas'].includes(usuario) && (
            <Link href="/clientes">
              <div className="rounded-3xl bg-mediumdark flex flex-row items-center justify-center p-5 hover:bg-dark cursor-pointer transition-all hover:shadow-2xl sm:flex-col">
                <img
                  src={'/Icons/White/clientes.png'}
                  alt=""
                  className="h-10 mr-4 sm:h-12 sm:mr-0 sm:mb-4"
                />
                <span className="font-medium text-white text-md font-title">
                  Clientes
                </span>
              </div>
            </Link>
          )}
          {['admin', 'ventas'].includes(usuario) && (
            <Link href="/proveedores">
              <div className="rounded-3xl bg-mediumdark flex flex-row items-center justify-center p-5 hover:bg-dark cursor-pointer transition-all hover:shadow-2xl sm:flex-col">
                <img
                  src={'/Icons/White/proveedores.png'}
                  alt=""
                  className="h-10 mr-4 sm:h-12 sm:mr-0 sm:mb-4"
                />
                <span className="font-medium text-white text-md font-title">
                  Proveedores
                </span>
              </div>
            </Link>
          )}
          {['admin', 'ventas'].includes(usuario) && (
            <Link href="/ventas">
              <div className="rounded-3xl bg-mediumdark flex flex-row items-center justify-center p-5 hover:bg-dark cursor-pointer transition-all hover:shadow-2xl sm:flex-col">
                <img
                  src={'/Icons/White/ventas.png'}
                  alt=""
                  className="h-10 mr-4 sm:h-12 sm:mr-0 sm:mb-4"
                />
                <span className="font-medium text-white text-md font-title">
                  Ventas
                </span>
              </div>
            </Link>
          )}
          {['admin', 'compras'].includes(usuario) && (
            <Link href="/compras">
              <div className="rounded-3xl bg-mediumdark flex flex-row items-center justify-center p-5 hover:bg-dark cursor-pointer transition-all hover:shadow-2xl sm:flex-col">
                <img
                  src={'/Icons/White/compras.png'}
                  alt=""
                  className="h-10 mr-4 sm:h-12 sm:mr-0 sm:mb-4"
                />
                <span className="font-medium text-white text-md font-title">
                  Compras
                </span>
              </div>
            </Link>
          )}
          {['admin', 'ventas', 'compras', 'produccion'].includes(usuario) && (
            <Link href="/stock">
              <div className="rounded-3xl bg-mediumdark flex flex-row items-center justify-center p-5 hover:bg-dark cursor-pointer transition-all hover:shadow-2xl sm:flex-col">
                <img
                  src={'/Icons/White/stock.png'}
                  alt=""
                  className="h-10 mr-4 sm:h-12 sm:mr-0 sm:mb-4"
                />
                <span className="font-medium text-white text-md font-title">
                  Stock
                </span>
              </div>
            </Link>
          )}
          {['ventas', 'produccion'].includes(usuario) && (
            <Link href="/pedidos">
              <div className="rounded-3xl bg-mediumdark flex flex-row items-center justify-center p-5 hover:bg-dark cursor-pointer transition-all hover:shadow-2xl sm:flex-col">
                <img
                  src={'/Icons/White/pedidos.png'}
                  alt=""
                  className="h-10 mr-4 sm:h-12 sm:mr-0 sm:mb-4"
                />
                <span className="font-medium text-white text-md font-title">
                  Pedidos
                </span>
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default Menu
