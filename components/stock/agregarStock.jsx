import Link from 'next/link'

const AgregarStock = (props) => {
  return (
    <div className="flex flex-col w-full max-w-screen-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        <div className="bg-verylight flex flex-col items-center p-12 rounded-3xl">
          <h2 className="text-black font-title font-light text-2xl mb-5">
            Información
          </h2>
          <div className="flex flex-col max-w-xl w-full rounded-xl p-3">
            <span className="text-black font-title text-lg font-medium">
              Tipo:
            </span>
            <select
              name="tipo"
              id="selectTipo"
              className="border-0 border-b-2 w-fit bg-verylight border-verylight appearance-none text-black font-title text-lg font-normal py-1 outline-none hover:outline-none transition-all hover:border-b-2 hover:border-primary"
            >
              <option selected>Seleccione</option>
              <option value="materiaPrima">Materia Prima</option>
              <option value="productos">Productos producidos</option>
            </select>
          </div>
          <div className="flex flex-col max-w-xl w-full rounded-xl p-3">
            <span className="text-black font-title text-lg font-medium">
              Nombre:
            </span>
            <input
              type="text"
              size="14"
              className="bg-verylight text-black font-title text-lg font-normal outline-none h-10 w-48 border-b-2 border-verylight focus:border-b-2 focus:border-primary hover:border-b-2 hover:border-primary transition-all"
              placeholder="Ejemplo"
            />
          </div>
          <div className="flex flex-col max-w-xl w-full rounded-xl p-3">
            <span className="text-black font-title text-lg font-medium">
              Descripción:
            </span>
            <textarea
              name=""
              id=""
              rows="3"
              className="resize-none appearance-none bg-verylight text-black font-title text-lg font-normal outline-none h-24 max-w-xs w-auto border-b-2 border-verylight focus:border-b-2 focus:border-primary hover:border-b-2 hover:border-primary transition-all"
              placeholder="Ejemplo"
            ></textarea>
          </div>
        </div>
        <div className="bg-verylight flex flex-col items-center p-12 rounded-3xl">
          <h2 className="text-black font-title font-light text-2xl mb-5">
            Datos de stock
          </h2>
          <div className="flex flex-col max-w-xl w-full rounded-xl p-3">
            <span className="text-black font-title text-lg font-medium">
              Cantidad:
            </span>
            <input
              type="text"
              size="14"
              className="bg-verylight text-black font-title text-lg font-normal outline-none h-10 w-48 border-b-2 border-verylight focus:border-b-2 focus:border-primary transition-all hover:border-b-2 hover:border-primary"
              placeholder="0000"
            />
          </div>
          <div className="flex flex-col max-w-xl w-full rounded-xl p-3">
            <span className="text-black font-title text-lg font-medium">
              Cantidad mínima:
            </span>
            <div className="flex flex-row items-center">
              <input
                size="12"
                type="text"
                className="bg-verylight text-black font-title text-lg font-normal outline-none h-10 border-b-2 border-verylight focus:border-b-2 focus:border-primary transition-all hover:border-b-2 hover:border-primary"
                placeholder="0000"
              />
            </div>
          </div>
          <div className="flex flex-col max-w-xl w-full rounded-xl p-3">
            <span className="text-black font-title text-lg font-medium">
              Precio:
            </span>
            <input
              type="text"
              size="14"
              className="bg-verylight text-black font-title text-lg font-normal outline-none h-10 w-48 border-b-2 border-verylight focus:border-b-2 focus:border-primary transition-all hover:border-b-2 hover:border-primary"
              placeholder="0000"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center">
        <Link href="/stock" className="mb-2 sm:mb-0">
          <div className="flex justify-center items-center rounded-full bg-red p-5 mx-2 sm:w-48 hover:bg-darkred cursor-pointer transition-all">
            <img
              src="/Icons/White/cancelar.png"
              alt="Cancelar"
              className="h-6 mr-3"
            />
            <span className="text-white font-title text-lg font-medium">
              Cancelar
            </span>
          </div>
        </Link>

        <Link href="/stock">
          <div className="flex justify-center items-center rounded-full bg-primary p-5 mx-2 sm:w-48 hover:bg-primarydark cursor-pointer transition-all">
            <img
              src="/Icons/White/confirmar.png"
              alt="Cancelar"
              className="h-6 mr-3"
            />
            <span className="text-white font-title text-lg font-medium">
              Confirmar
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default AgregarStock
