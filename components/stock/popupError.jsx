const PopupError = (props) => {
  return(
    <>
      <div className="flex justify-center fixed left-0 right-0 bottom-5 bg-red w-fit mx-auto rounded-xl transition-all duration-100">
        <p className="m-4 text-white">Ocurrió un error. Revise los datos.</p>
      </div>
    </>
  )
}

export default PopupError;