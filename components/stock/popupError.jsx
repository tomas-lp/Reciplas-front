import { useEffect } from 'react'

const PopupError = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.set(false)
    }, 3000)
  }, [])

  return (
    <>
      <div className="flex justify-center items-center fixed left-0 right-0 bottom-5 bg-red w-fit mx-auto rounded-xl p-4">
        <p className="mr-4 text-white">
          Ocurrió un error. Revise los datos ingresados.
        </p>
        <button
          onClick={() => {
            props.set(false)
          }}
        >
          <img src="/Icons/White/cancelar.png" alt="x" className="h-4"></img>
        </button>
      </div>
    </>
  )
}

export default PopupError
