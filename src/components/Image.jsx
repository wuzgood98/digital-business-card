import img from '../images/me.png'

const Image = () => {
  return (
    <>
      <div className="w-full ">
        <img src={img} alt="user photo" className='w-full h-2/5 rounded-t-xl' />
      </div>
    </>
  )
}

export default Image