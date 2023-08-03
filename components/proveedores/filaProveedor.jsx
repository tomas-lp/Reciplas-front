import Link from 'next/link'

const FilaProveedor = (props) => {
  return (
    <Link href="/proveedores/detalles">
      <div className="flex flex-row items-center bg-white h-14 rounded-xl shadow-lg hover:scale-102 transition-all cursor-pointer">
        <div className="flex flex-row justify-center w-16 mx-2">
          <span className="text-title text-sm text-grey">0001</span>
        </div>
        <div className="flex flex-row justify-center w-24 mx-2">
          <span className="text-title text-sm text-grey">Nombre</span>
        </div>
        <div className="hidden sm:flex flex-row justify-center w-24 mx-2">
          <span className="text-title text-sm text-grey">Ejemplo</span>
        </div>
        <div className="hidden sm:flex flex-row justify-center w-24 mx-2">
          <span className="text-title text-sm text-grey">0000123456</span>
        </div>
      </div>
    </Link>
  )
}

export default FilaProveedor
