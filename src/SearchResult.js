import './SearchResult.css';

function SearchResult(props){
        return (<>
            <section className="DrinksTable">
                {props.list.map(item => 
                <div className="DrinkBox" key={item.idDrink}>
                    <img src={item.strDrinkThumb} alt={item.strDrink}></img>
                    <div>{item.strDrink}</div>
        </div>
                )}
            </section>
            </>
        );
}

export default SearchResult;