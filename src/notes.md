STRETCHY THINGS:
- add school icons to singleSpell render

 Hooks experiment - worked! But needed to use to pull single item, so modified. (SpellDetail)
 
 // useEffect(() => {
  //   let mounted = true;
  //   getSingleSpell(spellId)
  //     .then(spells => {
  //       if(mounted) {
  //         setSpell([spell])
  //       }
  //     })
  //     return () => mounted = false;
  // }, []);

  // const SelectedSpell = spellId => {
  //   const spell = useSelector(state => state.spells[spellId])
  // }

// const selectSpellById = (state) => state.spells.spells.filter(spell => {
//   return spell.id === spellId;
// })

// const spell = useSelector(selectSpellById);


  // console.log(spell);