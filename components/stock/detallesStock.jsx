import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import router from 'next/router'

const parseFecha = (fecha) => {
  //Convierte fecha a formato dd/mm/aaaa
  const dd = new Date(fecha).getDate()
  const mm = new Date(fecha).getMonth() + 1
  const aaaa = new Date(fecha).getFullYear()
  return `${dd}/${mm}/${aaaa}`
}

const DetallesStock = (props) => {
  const { id } = props

  const [producto, setProducto] = useState([])
  const [materiasPrima, setMateriasPrima] = useState([])
  const [tipo, setTipo] = useState('')
  const [extra, setExtra] = useState('')

  useEffect(() => {
    if (!id) {
      //Espera a que el router refresque el id para hacer el fetch de datos.
      return
    }

    const esProdEnURL = router.query.es_prod === 'true'

    const url = esProdEnURL
      ? `http://localhost:4000/api/productos/${id}`
      : `http://localhost:4000/api/materiaprima/${id}`

    setTipo(esProdEnURL ? 'Producto Producido' : 'Materia Prima')
    setExtra(esProdEnURL ? 'Precio' : 'Cantidad Mínima')

    axios
      .get(url, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json;charset=UTF-8',
        },
      })
      .then(({ data }) => {
        setProducto(data)
      })
  }, [id])

  return (
    <div className="flex flex-col w-full max-w-screen-xl">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-5 lg:h-12">
        <div className="flex flex-col w-full md:w-auto md:flex-row items-center mb-5 lg:mb-0">
          <div className="flex justify-center w-full md:w-auto items-center h-10 px-5 bg-medium text-white rounded-xl mb-2 md:mb-0 md:mr-5 font-title font-normal text-base">
            <span>Id: {producto.id}</span>
          </div>
          <div className="flex justify-center w-full md:w-auto items-center h-10 px-5 bg-verylight rounded-xl mb-2 md:mb-0 md:mr-5 font-title font-normal text-base">
            <span>Tipo: {tipo}</span>
          </div>
          <div className="flex justify-center w-full md:w-auto items-center h-10 px-5 bg-verylight rounded-xl font-title font-normal text-base">
            <span>
              Fecha de registro: {parseFecha(producto.fecha_actualizacion)}
            </span>
          </div>
        </div>
        <div className="flex flex-row items-center h-12 lg:h-auto">
          <div className="bg-primary w-16 p-2 rounded-xl flex justify-center items-center mx-2 h-10 hover:h-12 transition-all cursor-pointer">
            <img src="/Icons/White/imprimir.png" alt="" className="h-6" />
          </div>
          <Link href="/stock/editar">
            <div className="bg-primary w-16 p-2 rounded-xl flex justify-center items-center mx-2 h-10 hover:h-12 transition-all cursor-pointer">
              <img src="/Icons/White/editar.png" alt="" className="h-6" />
            </div>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        <div className="bg-verylight flex flex-col items-center p-12 rounded-3xl">
          <h2 className="text-black font-title font-light text-2xl mb-5">
            Información
          </h2>
          <div className="flex flex-col max-w-xl w-full rounded-xl p-3">
            <span className="text-black font-title text-lg font-medium">
              Nombre:
            </span>
            {producto.nombre}
          </div>
          <div className="flex flex-col max-w-xl w-full rounded-xl p-3">
            <span className="text-black font-title text-lg font-medium">
              Descripción:
            </span>
            {producto.descripcion}
          </div>
        </div>
        <div className="bg-verylight flex flex-col items-center p-12 rounded-3xl">
          <h2 className="text-black font-title font-light text-2xl mb-5">
            Datos de Almacenamiento
          </h2>
          <div className="flex flex-col max-w-xl w-full rounded-xl p-3">
            <span className="text-black font-title text-lg font-medium">
              Cantidad:
            </span>
            {producto.cantidad}
          </div>
          <div className="flex flex-col max-w-xl w-full rounded-xl p-3">
            <span className="text-black font-title text-lg font-medium">
              {extra}
            </span>
            <div className="flex flex-row items-center">
              {producto.precio ? (
                <input
                  disabled
                  type="text"
                  size="14"
                  className="bg-verylight text-black font-title text-md font-normal outline-none h-10 w-48 border-b-2 border-verylight"
                  defaultValue={'$' + producto.precio}
                  placeholder="Precio"
                />
              ) : (
                <input
                  disabled
                  size="14"
                  type="text"
                  className="bg-verylight text-black font-title text-md font-normal outline-none h-10 border-b-2 border-verylight"
                  defaultValue={producto.cantidad_min}
                  placeholder="Cantidad Mínima"
                />
              )}
            </div>
          </div>
          <div className="flex flex-col max-w-xl w-full rounded-xl p-3">
            <span className="text-black font-title text-lg font-medium"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetallesStock
