
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Random() {

  // const [gif,setGif]=useState("");
  // const API_KEY=process.env.REACT_APP_GIPHY_API_KEY
  // const [loading,setLoading]=useState(false)

  // async function fetchData(){
  //   setLoading(true)
  //   const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`  //It is the URL to use Giphy API.It contains complete functionalities/data about API
  //   const {data}=await axios.get(url)   //axios.get() will fetch the complete data from URL and converted into JSON format
  //   const imageSource=data.data.images.downsized_large.url  //It is just a path to get the actual URL of the meme
  //   setGif(imageSource);
  //   setLoading(false);
  //   console.log(imageSource)
  // }

  // useEffect(()=>{
  //   fetchData()
  // },[])

  const {gif,fetchData,loading}=useGif("");

  return (
    <div className="w-1/2 bg-green-500 rounded-lg border border-black flex flex-col  items-center gap-y-5 mt-[15px]">
      <h1 className=" mt-[15px] text-2xl underline uppercase font-bold ">A Random GIF</h1>

      {
        loading? (<Spinner/>) : (<img src={gif}  width={450} className="h-auto "/>)
      }

      <button onClick={()=>{fetchData()}} className="w-10/12 bg-white text-lg py-2  rounded-lg mb-[20px]">Generate</button>
    </div>
  )
}
