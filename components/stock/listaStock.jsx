import Link from 'next/link'
import FilaStock from './filaStock'
import { useEffect, useState } from 'react'
import axios from 'axios'

const ListaStock = (props) => {
  const [usuario, setUsuario] = useState('')
  const [productos, setProductos] = useState([])
  const [productosFiltrados, setProductosFiltrados] = useState([])
  const [materiasPrimas, setMateriasPrimas] = useState([])
  const [materiasPrimasFiltradas, setMateriasPrimasFiltradas] = useState([])
  const [selectorTipo, setSelectorTipo] = useState('productos')
  const [busqueda, setBusqueda] = useState('')

  const filtrarElementos = () => {
    if (busqueda != '') {
      setProductosFiltrados(
        productos.filter((elem) => String(elem.id).includes(busqueda))
      )
      setMateriasPrimasFiltradas(
        materiasPrimas.filter((elem) => String(elem.id).includes(busqueda))
      )
    } else {
      setProductosFiltrados(productos)
      setMateriasPrimasFiltradas(materiasPrimas)
    }
  }

  const fetchProductos = async () => {
    const urlProd = `https://${process.env.NEXT_PUBLIC_APIURL}/api/productos`

    await axios
      .get(urlProd, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json;charset=UTF-8',
        },
      })
      .then(({ data }) => {
        setProductos(data)
        setProductosFiltrados(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const fetchMateriasPrimas = async () => {
    const urlMat = `https://${process.env.NEXT_PUBLIC_APIURL}/api/materiaprima`

    await axios
      .get(urlMat, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json;charset=UTF-8',
        },
      })
      .then(({ data }) => {
        setMateriasPrimas(data)
        setMateriasPrimasFiltradas(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    setUsuario(localStorage.getItem('usuario'))
    fetchProductos()
    fetchMateriasPrimas()
  }, [])

  useEffect(filtrarElementos, [busqueda])

  return (
    <>
      <div className="flex flex-col w-full max-w-screen-xl">
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center mb-5">
          <div className="flex flex-row items-center w-full sm:w-auto justify-between bg-light px-5 py-2 border-2 border-light rounded-full focus-within:border-primary hover:border-primary transition-all">
            <input
              type="text"
              placeholder="Busque un ID"
              className="bg-light text-black placeholder-gr text-md font-normal font-title focus:outline-none"
              onChange={(e) => {
                setBusqueda(e.target.value)
              }}
            />
            <img src="/Icons/Grey/buscar.png" alt="" className="h-6" />
          </div>
          <Link href="#f" className="w-full sm:w-auto">
            <div className="mb-5 sm:mb-0 bg-primary flex flex-row justify-center px-5 py-5 rounded-3xl cursor-pointer hover:bg-primarydark transition-all">
              <img
                src="/Icons/White/generarreporte.png"
                alt=""
                className="h-6 pr-2"
              />
              <span className="font-title text-white font-normal text-md">
                Generar Reporte
              </span>
            </div>
          </Link>
        </div>

        <div className="flex flex-row items-center justify-start mb-5">
          <span className="text-title text-lg text-black mr-5">Tipo:</span>
          <select
            name="tipo"
            defaultValue="productos"
            id="selectTipo"
            className="border-2 border-light appearance-none py-1 px-2 outline-none hover:outline-none hover:border-primary rounded-xl transition-all"
            onChange={(e) => {
              setSelectorTipo(e.target.value)
            }}
          >
            <option value="productos">Productos producidos</option>
            <option value="materiaPrima">Materia Prima</option>
          </select>
        </div>

        <div className="bg-verylight flex flex-col p-8 rounded-3xl">
          <div className="flex flex-col-reverse lg:flex-row justify-between">
            <div className="flex flex-row w-full justify-between items-end h-12">
              <div className="flex flex-row items-end h-12">
                <div className="bg-light w-16 p-2 rounded-t-xl flex justify-center mx-2 h-8 hover:h-10 transition-all cursor-pointer">
                  <span className="text-title text-sm text-grey">ID</span>
                </div>
                <div className="bg-light w-24 p-2 rounded-t-xl flex justify-center mx-2 h-8 hover:h-10 transition-all cursor-pointer">
                  <span className="text-title text-sm text-grey">Nombre</span>
                </div>
                <div className="bg-light w-24 p-2 rounded-t-xl hidden sm:flex justify-center mx-2 h-8 hover:h-10 transition-all cursor-pointer">
                  <span className="text-title text-sm text-grey">Cantidad</span>
                </div>
                <div className="bg-light w-28 p-2 rounded-t-xl hidden sm:flex justify-center mx-2 h-8 hover:h-10 transition-all cursor-pointer">
                  <span className="text-title text-sm text-grey">
                    {selectorTipo == 'productos' ? 'Precio ($)' : 'Cant Minima'}
                  </span>
                </div>
              </div>

              <div className="bg-darkgrey w-16 p-2 rounded-t-xl flex justify-center mx-2 h-10 hover:h-12 transition-all cursor-pointer">
                <img src="/Icons/White/ordenar.png" alt="" className="h-6" />
              </div>
            </div>

            <div className="flex flex-row items-end justify-center h-12">
              <Link href="#f">
                <div className="bg-primary w-16 p-2 rounded-xl lg:rounded-b-none flex justify-center mx-2 h-10 hover:h-12 transition-all cursor-pointer">
                  <img src="/Icons/White/eliminar.png" alt="" className="h-6" />
                </div>
              </Link>
              {['admin'].includes(usuario) && (
                <Link href="/stock/nuevo">
                  <div className="bg-primary w-16 p-2 rounded-xl lg:rounded-b-none flex justify-center mx-2 h-10 hover:h-12 transition-all cursor-pointer">
                    <img
                      src="/Icons/White/agregar.png"
                      alt=""
                      className="h-6"
                    />
                  </div>
                </Link>
              )}
            </div>
          </div>
          {selectorTipo == 'productos'
            ? productosFiltrados.map((producto) => (
                <FilaStock
                  key={producto.id}
                  id={producto.id}
                  nombre={producto.nombre}
                  cantidad={producto.cantidad}
                  precio={producto.precio}
                  es_prod={true}
                ></FilaStock>
              ))
            : materiasPrimasFiltradas.map((materiaPrima) => (
                <FilaStock
                  key={materiaPrima.id}
                  id={materiaPrima.id}
                  nombre={materiaPrima.nombre}
                  cantidad={materiaPrima.cantidad}
                  cantidadMin={materiaPrima.cantidad_min}
                  es_prod={false}
                ></FilaStock>
              ))}
        </div>
      </div>
    </>
  )
}

export default ListaStock
