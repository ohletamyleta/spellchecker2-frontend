   import React from 'react';
   import { Link } from 'react-router-dom';
import SpellsPage from '../containers/SpellsPage';
import SpellForm from '../components/SpellForm';



   const Home = () => {
     return (
   <div id='outer'>
            <div className='text-center' id='inner_fixed'>
              <h1>Welcome to Spellchecker!</h1>
              <h3>What would you like to do?</h3>
              <Link to='/spells' component={SpellsPage}>
                See All Spells
              </Link>
              <Link to='/spell/new' component={SpellForm}>
                Add a New Spell
              </Link>
              </div>
             </div> 
)};

export default Home;
                