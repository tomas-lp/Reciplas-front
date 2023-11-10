import Link from 'next/link';

const FilaStock = (props) => {
  return (
    <Link href={`/stock/detalles/${props.id}?es_prod=${props.es_prod}`}>
      <div className="flex flex-row items-center bg-white h-14 rounded-xl shadow-lg hover:scale-102 transition-all cursor-pointer mb-1">
        <div className="flex flex-row justify-center w-16 mx-2">
          <span className="text-title text-sm text-grey">{props.id}</span>
        </div>
        <div className="flex flex-row justify-center w-24 mx-2">
          <span className="text-title text-sm text-grey">{props.nombre}</span>
        </div>
        <div className="hidden sm:flex flex-row justify-center w-24 mx-2">
          <span className="text-title text-sm text-grey">{props.cantidad}</span>
        </div>
        <div className="hidden sm:flex flex-row justify-center w-28 mx-2">
          <span className="text-title text-sm text-grey">{props.precio ? "$"+props.precio : props.cantidadMin}</span>
        </div>
      </div>
    </Link>
  );
};

export default FilaStock;
