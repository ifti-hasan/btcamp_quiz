// import { useState } from 'react'
// import './App.css'

// export default function App(){
//   const numbers = [1,2,3,4,5,6,7,8,9,10];
//   const [tiles,setTiles] = useState(numbers);

//   function oddFilter(){
//     const oddNumber = numbers.filter( item=> item%2!==0)
//     console.log(oddFilter);
//     setTiles(oddNumber)
//   }
//   function evenFilter(){
//     const evenNumber = numbers.filter( item=> item%2===0)
//     console.log(evenFilter);
//     setTiles(evenNumber)
//   }
//   return (
//     <div className='grid'>
//       <div className='tile-container'>{tiles.map( (tile,index)=><div className='tile' key={index}>{tile}</div>)}</div>
//       <button onClick={oddFilter}>odd</button>
//       <button onClick={evenFilter}>even</button>
//       <button onClick={()=>setTiles(numbers)}>all</button>
      
//     </div>
//   )
// }

// function App() {
//   // const numbers = [1,2,3,4,5,6,7,8,9,10];
//   const [tiles,setTiles] = useState(generateTiles());
//   const buttonCategories = ["all","odd","even"]
  // console.log(tiles);


  // function newTiles(index){
  //   return {
  //     value:index,
  //     category : index%2 === 0 ?'even':'odd'
  //   }
  // }
  // function generateTiles(){
  //   const array = []
  //   for (let i = 1;i<11;i++){
  //     array.push(newTiles(i))
  //   }
  //   return array;
  // }
  // function filterItems(category){
  //   if (category==='all'){
  //     setTiles(generateTiles())
  //     return;
  //   }
  //   const filtered = generateTiles().filter(item => item.category === category)
  //   setTiles(filtered);
  // }

//   return (
//     <div>
//       <div className='tile-container'>{tiles.map( (tile,index)=><div className='tile' key={index}>{tile.value}</div>)}</div>
//       <div>{buttonCategories.map( (category,index)=><button onClick={()=>filterItems(category)} key={index}>{category}</button>)}</div>
//     </div>
//   )
// }

// export default App


// .grid {
//   display: grid;
//   grid-template-columns: repeat(3,1fr);
//   grid-template-rows: 60px 20px;
//   gap: 15px;
// }

// .tile-container {
//   grid-column: 1/-1;
//   display: flex;
// }
// .tile {
//   height: 2em;
//   width: 2em;
//   background-color: blue;
//   color: aliceblue;
//   text-align: center;
//   margin: 1rem;
//   cursor: pointer;
// }
// button {
//   background-color: #4CAF50; /* Green */
//   border: none;
//   color: white;
//   padding: 15px 32px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;
//   height: 2rem;
//   width: 5rem;
// }