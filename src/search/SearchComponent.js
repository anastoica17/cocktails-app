import {  useState } from "react";
import SearchList from "../SearchList";
import {useRef} from 'react';
import './SearchComponent.css';

function SearchComponent (){
 const [inputValue, setInputValue ] = useState("");
 const inputRef = useRef(null);

    const handleChange = e =>{
        console.log("search component");
        setInputValue(inputRef.current.value);
    }

     return (
        <>
            <section className="SearchCocktail">
                <div className="ButtonInput">
                    <input type="text"
                            ref={inputRef}
                            id="searchInput"
                            placeholder="Search here"
                            className="SearchBox"
                            />
                    <button onClick={handleChange}/>
                </div>
            </section>
            <SearchList inputValue={inputValue}/>
        </>
    );
}

export default SearchComponent;