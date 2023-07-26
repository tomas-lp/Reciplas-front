import Link from "next/link";
import Header from "../components/header";

const Menu = (props) => {
  return(
    <>
      <Header></Header>
      <div className="w-full h-full bg-white flex flex-col items-center p-10">
        <h1 className="font-title text-3xl font-light mb-10">Menú de usuario</h1>
        <div className="grid grid-cols-3 gap-10">
          <Link href="/usuarios">
            <div className="w-40 h-40 rounded-3xl bg-mediumdark flex flex-col items-center justify-center p-5 hover:bg-dark cursor-pointer transition-all hover:shadow-2xl">
              <img src="/Icons/white/usuario.png" alt="" className="h-16 mb-5"/>
              <span className="font-medium text-white text-md font-title">Usuarios</span>
            </div>
          </Link>
          <Link href="/clientes">
            <div className="w-40 h-40 rounded-3xl bg-mediumdark flex flex-col items-center justify-center p-5 hover:bg-dark cursor-pointer transition-all hover:shadow-2xl">
              <img src="/Icons/white/clientes.png" alt="" className="h-16 mb-5"/>
              <span className="font-medium text-white text-md font-title">Clientes</span>
            </div>
          </Link>
          <Link href="/proveedores">
            <div className="w-40 h-40 rounded-3xl bg-mediumdark flex flex-col items-center justify-center p-5 hover:bg-dark cursor-pointer transition-all hover:shadow-2xl">
              <img src="/Icons/white/proveedores.png" alt="" className="h-16 mb-5"/>
              <span className="font-medium text-white text-md font-title">Proveedores</span>
            </div>
          </Link>
          <Link href="/ventas">
            <div className="w-40 h-40 rounded-3xl bg-mediumdark flex flex-col items-center justify-center p-5 hover:bg-dark cursor-pointer transition-all hover:shadow-2xl">
              <img src="/Icons/white/ventas.png" alt="" className="h-16 mb-5"/>
              <span className="font-medium text-white text-md font-title">Ventas</span>
            </div>
          </Link>
          <Link href="#f">
            <div className="w-40 h-40 rounded-3xl bg-mediumdark flex flex-col items-center justify-center p-5 hover:bg-dark cursor-pointer transition-all hover:shadow-2xl">
              <img src="/Icons/white/compras.png" alt="" className="h-16 mb-5"/>
              <span className="font-medium text-white text-md font-title">Compras</span>
            </div>
          </Link>
          <Link href="#f">
            <div className="w-40 h-40 rounded-3xl bg-mediumdark flex flex-col items-center justify-center p-5 hover:bg-dark cursor-pointer transition-all hover:shadow-2xl">
              <img src="/Icons/white/stock.png" alt="" className="h-16 mb-5"/>
              <span className="font-medium text-white text-md font-title">Stock</span>
            </div>
          </Link>
          <Link href="#f">
            <div className="w-40 h-40 rounded-3xl bg-mediumdark flex flex-col items-center justify-center p-5 hover:bg-dark cursor-pointer transition-all hover:shadow-2xl">
              <img src="/Icons/white/pedidos.png" alt="" className="h-16 mb-5"/>
              <span className="font-medium text-white text-md font-title">Pedidos</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Menu;