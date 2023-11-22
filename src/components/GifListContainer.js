import React,{useState,useEffect} from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer(){

const [gifs,setGifs]=useState([])
const [searchValue,setSeachValue]=useState("");

function handleSearch(searchValue){
    console.log(searchValue)
  
setSeachValue(searchValue)
}
useEffect(()=>{
    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=8MSA2xGp6u40v7xAmXq97Mc6KtYEBTcK&rating=g`)
.then((response)=>response.json())
.then((data)=>{
setGifs(data.data.slice(0, 3))
})
},[searchValue])

return(
    <>
    <GifSearch onSearch={handleSearch}/>
    <GifList gifs={gifs} key={gifs.id}/>

    </>
)
}

export default GifListContainer;