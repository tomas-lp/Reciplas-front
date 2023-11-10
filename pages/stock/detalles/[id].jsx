import DetallesStock from '../../../components/stock/detallesStock'
import Header from '../../../components/header'
import { useRouter } from 'next/router';

const Detalles = (props) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Header></Header>
      <div className="flex flex-col items-center p-10">
        <h1 className="font-title font-light text-3xl mb-10">
          Detalles de stock
        </h1>
        <DetallesStock id={router.query.id} />
      </div>
    </>
  )
}

export default Detalles