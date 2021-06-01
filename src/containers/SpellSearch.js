// import React, { Component, useState, useEffect } from 'react';
// import { SearchBar } from '../components/SearchBar';

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import CardDeck from 'react-bootstrap/CardDeck';

// import SpellsList from '../components/SpellsList';

//  const SpellSearch = () => {

//   const [spells, setSpells] = useState([]);


//   useEffect(() => {
//     let isActive = true;

//     fetch(`http://localhost:3001/api/v1/spells`)
//       .then((data) => data.json())
//       .then((data) => setSpells(data))
//       .catch((error) => console.log(error));
//     return () => {
//       isActive = false;
//     };
//   }, []);

// class SpellSearch extends Component {


//   componentDidMount() {
//    const {
//      spells,
//      actions: { fetchSpells },
//       } = this.props;
     
//       if (!spells) {
//         fetchSpells();
//       }
//   }
 
 
//      render() {
    
//      const {
//        spells
//      } = this.props;

//   console.log(spells);
// filter logic belongs here
//   return    
//     <div>
//       <SearchBar />
//       <SpellsList spells={filteredSpells} />;
//     </div>

  
// }
// }

// export default SpellSearch;