import DetallesStock from '../../components/stock/detallesStock'
import Header from '../../components/header'

const detalles = (props) => {
  return (
    <>
      <Header></Header>
      <div className="flex flex-col items-center p-10">
        <h1 className="font-title font-light text-3xl mb-10">
          Detalles de stock
        </h1>
        <DetallesStock></DetallesStock>
      </div>
    </>
  )
}

export default detalles
