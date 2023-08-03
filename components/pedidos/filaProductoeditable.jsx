import Link from 'next/link'

const FilaProductoEditable = (props) => {
  return (
    <div className="flex flex-row items-center bg-white h-14 rounded-xl shadow-lg transition-all">
      <div className="flex flex-row justify-center w-24 mx-2">
        <input
          type="text"
          className="text-title text-sm text-grey w-full outline-none text-center border-b-2 border-b-white focus:border-b-grey transition-all"
          placeholder="Nombre" defaultValue=''
        />
      </div>
      <div className="flex flex-row justify-center w-24 mx-2">
        <input
          type="text"
          className="text-title text-sm text-grey w-full outline-none text-center border-b-2 border-b-white focus:border-b-grey transition-all"
          placeholder="0000" defaultValue=''
        />
      </div>
      <div className="hidden sm:flex flex-row justify-center w-24 mx-2">
        <input
          type="text"
          className="text-title text-sm text-grey w-full outline-none text-center border-b-2 border-b-white focus:border-b-grey transition-all"
          placeholder="0000" defaultValue=''
        />
      </div>
    </div>
  )
}

export default FilaProductoEditable
