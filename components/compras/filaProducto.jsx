import Link from 'next/link'

const FilaProducto = (props) => {
  return (
    <div className="flex flex-row items-center bg-white h-14 rounded-xl shadow-lg transition-all">
      <div className="flex flex-row justify-center w-24 mx-2">
        <span className="text-title text-sm text-grey">Ejemplo</span>
      </div>
      <div className="flex flex-row justify-center w-24 mx-2">
        <span className="text-title text-sm text-grey">100</span>
      </div>
      <div className="hidden sm:flex flex-row justify-center w-24 mx-2">
        <span className="text-title text-sm text-grey">0000</span>
      </div>
    </div>
  )
}

export default FilaProducto
