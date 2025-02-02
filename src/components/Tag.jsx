import {  useState } from "react"
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Tag() {

  // ***************The commented part will be defined in "useGif" hook. so we don't need it here************************

  const [tag,setTag]=useState("Car");
  // const [gif,setGif]=useState("");
  // const API_KEY=process.env.REACT_APP_GIPHY_API_KEY
  // const [loading,setLoading]=useState(false)

  // async function fetchData(){
  //   setLoading(true)
  //   const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`   //URL to generate GIF according to specified tag 
  //   const {data}=await axios.get(url)
  //   const imageSource=data.data.images.downsized_large.url
  //   setGif(imageSource);
  //   setLoading(false);
  //   console.log(imageSource)
  // }

  // useEffect(()=>{
  //   fetchData()
  // },[])

  const {gif,fetchData,loading}=useGif(tag);


  function changeHandler(event){
    setTag(event.target.value)
  }

  return (
    <div className="w-1/2 bg-yellow-500 rounded-lg border border-black flex flex-col  items-center gap-y-5 mt-[15px]">
      <h1 className=" mt-[15px] text-2xl underline uppercase font-bold ">Random "{tag}" GIF</h1>

      {
        loading? (<Spinner/>) : (<img src={gif} alt="GIF Image" width={450} className="h-auto "/>)
      }

      <input className="w-10/12 bg-white text-lg py-2 rounded-lg text-center" onChange={changeHandler} value={tag}/>
      <button onClick={()=>{fetchData(tag)}} className="w-10/12 bg-white text-lg py-2 rounded-lg mb-[20px]">Generate</button>
    </div>
  )
}
