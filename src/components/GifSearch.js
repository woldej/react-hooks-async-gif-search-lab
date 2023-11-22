import React,{useState}  from "react";

function GifSearch({onSearch}){
const [searchValue,setSeachValue]=useState("");
function handleSubmit(e){
    e.preventDefault()

    onSearch(searchValue)

}

function handleChange(e){

    setSeachValue(e.target.value)
}

    return(
        <form onSubmit={handleSubmit}>
            <label>Search
                <input onChange={handleChange} type="text" value={searchValue} ></input>
                <button type="submit">Submit</button>
            </label>
        </form>
    )

}

export default GifSearch;