import { useEffect, useState } from "react";
import SearchResult from "./SearchResult";

function SearchList(props){
    const [drinksList, setDrinksList] = useState([]);
    const search = () => {
        var request = new XMLHttpRequest();
        request.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + props.inputValue)
    
         request.addEventListener ('load', function (event) {
            var response = JSON.parse(request.response);
            console.log("searchList");
            setDrinksList(response.drinks);
    }) 
    request.send();
    }

    useEffect(() => {
        console.log("aaa");
        search();
        listDrinks();
    }, []);

    const listDrinks= (drinksList) =>{
        console.log(props.inputValue);
        console.log(drinksList);
        return (
            <section className="Drinks">
                <SearchResult list ={drinksList}/>
            </section>
          );
    }
   
        return (<>{listDrinks(drinksList)}</>  
            );  
}
export default SearchList;