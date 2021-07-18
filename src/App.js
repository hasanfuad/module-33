import {useEffect, useState} from 'react';

function App() {

  const heroes = [{name:'aamir', age: 40},{name:'akshay',age: 35},{name:'srk',age: 40},{name:'jacky chen', age:50}];

  // const [apiUser, setApiUser] = useState([])
  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res => res.json())
  //   .then(data => setApiUser(data))
  // },[])

  // const products = [
  //   {name: 'MSI Leopard', price: 1400, location: 'USA'},
  //   {name: 'Macbook Pro', price: 1500, location: 'USA'},
  //   {name: 'Lenovo', price: 1200, location: 'China'}
  // ]

const [randomUser, setRandomUser] = useState([]);

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => setRandomUser(data))
},[])



  return (
    <div>
      {/* <Movie/> */}

      {/* {
        heroes.map((heroName)=> <Hero name={heroName.name} age={heroName.age} nickname={heroName.name}/>)
      } */}

      {/* <Products/> */}

      {/* {
        products.map(pd=> <Products name={pd.name} key={pd.id} price={pd.price} location={pd.location}/>)
      }
      {
        apiUser.map(pd=> <Products name={pd.name} key={pd.id} price={pd.username} location={pd.email}/>)
      } */}

      {/* <RandomUser/> */}

      {
        
        randomUser.map(rand => <RandomUser name={rand.name} id={rand.id}/>)
      }
      
    </div>
  );
}


function RandomUser(props){
  const {id, name} = props
  return <div>
    <h1>name: {name}</h1>
    <h4>id: {id}</h4>
  </div>
}


function Products(props){

  const styles = {
    border: '1px solid gray',
    textAlign: 'center',
    padding: '10px',
    margin: '15px',
    borderRadius: '8px'
  }
  
  return <div style={styles}>
      <h2>{props.name}</h2>
      <h3>${props.price}</h3>
      <p>{props.location}</p>
  </div>
}


function Hero(props){
  const styles = {
    border: '1px solid gray',
    padding: '10px',
    margin: '10px',
    color: 'goldenrod',
    textAlign: 'center',
    borderRadius: '10px',
    boxShadow: '5px 5px 10px gray',
    width: '300px'

  }
  return <div style={styles}>
        <h1>Name:{props.name} </h1>
        <h4>Age: {props.age} </h4>
        <p>Nickname: {props.nickname} </p>
  </div>
}

function Movie(){

  const [count, setCount] = useState(0);

  const handleChange=(()=>{
    setCount(count+1);
  })

  return <div>
    <button onClick={handleChange}>Add movies</button>
    <h2>Movies:{count}</h2>
    <AnotherMovie movie={count}/>
  </div>
}

function AnotherMovie(props){
  return <div>
        <h2>Movie I acted: {props.movie}</h2>
  </div>
}



export default App;
