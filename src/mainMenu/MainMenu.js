import { Component } from 'react';
import HistoryComponent from '../HistoryComponent';
import './MainMenu.css';

const cocktailTypes = ['Alcoholic', 'Non Alcoholic',
                         'Ordinary Drink', 'Cocktail glass', 
                         'Champagne flute'];

class MainMenu extends Component{
     render() {
        return (
        <>
          <ul className="CocktailListNav">
              {cocktailTypes.map(item => <li key={item}><a href={item}>{item}</a></li>)}
          </ul>
          <HistoryComponent/>
        </>
   )
 }
}

export default MainMenu;