import React from "react";

function GifList({gifs}){
    console.log(gifs)
return(
    <ul>
        {gifs.map((gif)=>{
           // console.log(img)
            return(
              <li key={gif.id} >
             <img src={gif.images.original.url} alt={gif.title} />

                </li>
              
           )
        })

    }
        
    </ul>
)
}

export default GifList;