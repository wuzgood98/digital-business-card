const Buttons = () => {
  return (
    <>{/* add justify-between and remove space-x-4 */}
      <div className="flex space-x-4 w-full mb-8">
        <a className="space-x-2 rounded-md flex items-center justify-center bg-white text-darkBlue w-full h-8" href="#link">
          <i className="fa-solid fa-envelope"></i>
          <span className="text-darkBlue text-sm font-medium capitalize">email</span>
        </a>
        <a className="space-x-2 rounded-md flex items-center justify-center bg-oceanBlue text-white w-full h-8" href="#link">
          <i className="fa-brands fa-linkedin"></i>
          <span className="text-white text-sm font-medium capitalize">linkedIn</span>
        </a>
      </div>
    </>
  )
}

export default Buttons