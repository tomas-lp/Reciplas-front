import Link from "next/link";

const CoverSesionNoIniciada = (props) => {
  return(
    <>
      <div className="flex flex-col justify-center items-center fixed top-0 w-screen h-screen bg-verylight z-10">
        <p className="text-2xl m-3">Usuario incorrecto o sesion no iniciada.</p>
        <Link href="/" className="text-xl text-blue underline">Volver al login.</Link>
      </div>
    </>
  )
}

export default CoverSesionNoIniciada;