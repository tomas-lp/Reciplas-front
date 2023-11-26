import Link from 'next/link'
import { useState } from 'react'
import axios from 'axios'
import PopupError from './popupError'
import { useRouter } from 'next/router'

const AgregarStock = (props) => {
  const router = useRouter()

  const [selectorTipo, setSelectorTipo] = useState('productos')
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [cantidad, setCantidad] = useState(0)
  const [extra, setExtra] = useState(0)
  const [errorDatos, setErrorDatos] = useState(false)

  const datosIncorrectos = () => {
    if (nombre == '' || descripcion == '' || cantidad <= 0 || extra <= 0) {
      return true
    } else {
      return false
    }
  }

  const guardarProducto = () => {
    if (datosIncorrectos()) {
      setErrorDatos(true)
      return
    }

    axios
      .post(`${process.env.NEXT_PUBLIC_APIURL}/api/productos`, {
        nombre: nombre,
        descripcion: descripcion,
        cantidad: cantidad,
        precio: parseFloat(extra),
      })
      .then(function (response) {
        console.log(response)
        router.replace('/stock')
      })
      .catch(function (error) {
        setErrorDatos(true)
        setTimeout(() => {
          setErrorDatos(false)
        }, 3000)
      })
  }

  const guardarMateriaPrima = () => {
    if (datosIncorrectos()) {
      setErrorDatos(true)
      return
    }

    axios
      .post(`${process.env.NEXT_PUBLIC_APIURL}/api/materiaprima`, {
        nombre: nombre,
        descripcion: descripcion,
        cantidad: cantidad,
        cantidad_min: parseInt(extra),
      })
      .then(function (response) {
        console.log(response)
        router.replace('/stock')
      })
      .catch(function (error) {
        setErrorDatos(true)
        setTimeout(() => {
          setErrorDatos(false)
        }, 3000)
      })
  }

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
              defaultValue="productos"
              className="border-0 border-b-2 w-fit bg-verylight border-verylight appearance-none text-black font-title text-lg font-normal py-1 outline-none hover:outline-none transition-all hover:border-b-2 hover:border-primary"
              onChange={(e) => {
                setSelectorTipo(e.target.value)
              }}
            >
              <option value="productos">Productos producidos</option>
              <option value="materiaPrima">Materia Prima</option>
            </select>
          </div>
          <div className="flex flex-col max-w-xl w-full rounded-xl p-3">
            <span className="text-black font-title text-lg font-medium">
              Nombre:
            </span>
            <input
              type="text"
              size="14"
              maxLength={20}
              className="bg-verylight text-black font-title text-lg font-normal outline-none h-10 w-48 border-b-2 border-verylight focus:border-b-2 focus:border-primary hover:border-b-2 hover:border-primary transition-all"
              placeholder="Ejemplo"
              onChange={(e) => {
                setNombre(e.target.value)
              }}
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
              maxLength={100}
              className="resize-none appearance-none bg-verylight text-black font-title text-lg font-normal outline-none h-24 max-w-xs w-auto border-b-2 border-verylight focus:border-b-2 focus:border-primary hover:border-b-2 hover:border-primary transition-all"
              placeholder="Ejemplo"
              onChange={(e) => {
                setDescripcion(e.target.value)
              }}
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
              type="number"
              size="14"
              className="bg-verylight text-black font-title text-lg font-normal outline-none h-10 w-48 border-b-2 border-verylight focus:border-b-2 focus:border-primary transition-all hover:border-b-2 hover:border-primary"
              placeholder="0000"
              onChange={(e) => {
                setCantidad(e.target.value)
              }}
            />
          </div>
          <div className="flex flex-col max-w-xl w-full rounded-xl p-3">
            <span className="text-black font-title text-lg font-medium">
              {selectorTipo == 'productos' ? 'Precio:' : 'Cantidad minima:'}
            </span>
            <input
              type="number"
              size="14"
              className="bg-verylight text-black font-title text-lg font-normal outline-none h-10 w-48 border-b-2 border-verylight focus:border-b-2 focus:border-primary transition-all hover:border-b-2 hover:border-primary"
              placeholder="0000"
              onChange={(e) => {
                setExtra(e.target.value)
              }}
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

        <Link href="#f">
          <div
            className="flex justify-center items-center rounded-full bg-primary p-5 mx-2 sm:w-48 hover:bg-primarydark cursor-pointer transition-all"
            onClick={
              selectorTipo == 'productos'
                ? guardarProducto
                : guardarMateriaPrima
            }
          >
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
      {errorDatos && <PopupError set={setErrorDatos} />}
    </div>
  )
}

export default AgregarStock
