import Buttons from "./Buttons";
import Image from "./Image";
import About from "./About";
import Interest from "./Interests";


const Info = () => {
  return (
    <>
      <Image />
      <div className="flex flex-col py-8 px-8  items-center bg-darkL w-full">
        <Name />
        <JobTitle />
        <Website />
        <Buttons />
        <About />
        <Interest />
      </div>
    </>
  )
}

export default Info

function Name() {
  return (
    <>
      <h1 className="capitalize text-white font-bold text-3xl mb-1">gideon addo</h1>
    </>
  )
}


function JobTitle() {
  return (
    <>
      <h5 className="text-lightBrown font-normal text-sm capitalize mb-1">frontend developer</h5>
    </>
  )
}

function Website() {
  return (
    <>
      <a className="text-xs text-offWhite font-normal mb-4" href="#link">gideonaddo.website</a>
    </>
  )
}