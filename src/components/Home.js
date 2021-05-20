   import React from 'react';
   import { Link } from 'react-router-dom';
import SpellsPage from '../containers/SpellsPage';
import SpellForm from '../components/SpellForm';



   const Home = () => {
     return (
   <div id='outer'>
            <div className='text-center' id='inner_fixed'>
              <h1>Welcome to Spellchecker!</h1>
              <h3>You can view all of the spells in the library</h3>
              <h3><em>or even add new homebrew creations!</em></h3>

              </div>
             </div> 
)};

export default Home;
                