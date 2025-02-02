import Random from "./components/Random"
import Tag from "./components/Tag"

export default function App() {
  return(
    <div className="w-full h-full flex flex-col items-center background relative pb-[20px]">
      <h1 className=" bg-white w-11/12 px-10 py-2 text-4xl font-bold rounded-lg text-center mt-[40px] ">Random GIFs</h1>

      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}
