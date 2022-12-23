import React, { useState, useEffect } from "react";
import axios from "axios";
import PeopleGrid from './components/People/PeopleGrid';
import StarshipsGrid from "./components/starships/StarshipsGrid";
import PlanetsGrid from "./components/Planets/PlanetsGrid";

import Search from './components/ui/Search';
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
// import { Container, Dimmer,Loader } from "semantic-ui-react";
import Home from "./components/Home";



const App = () => {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [url, setUrl] = useState("https://swapi.dev/api/people/");
  const [url2, setUrl2] = useState("https://swapi.dev/api/planets");
  const [url3, setUrl3] = useState("https://swapi.dev/api/starships/");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      setIsLoading(true);
      const result = await axios(`${url}${query}`);

      console.log(result.data);

      setPeople(result.data.results);
      setData(result.data);
      setIsLoading(false);
    };
    // const fetchPlanets = async () => {
    //   setIsLoading(true);
    //   const result =  await axios(`${url2}${query}`);

    //   console.log(result.data);

    //   setPlanets(result.data.results);
    //   setData(result.data);
    //   setIsLoading(false);
    // };
    // const fetchStarships = async () => {
    //   setIsLoading(true);
    //   const result = await axios(`https://swapi.dev/api/starships`);

    //   console.log(result.data);

    //   setStarships(result.data.results);
    //   setData(result.data);
    //   setIsLoading(false);
    // };

    fetchPeople();
    // fetchPlanets();
    // fetchStarships();
  }, [url,query]);

  useEffect(() => {
    
    const fetchPlanets = async () => {
      setIsLoading(true);
      const result = await axios(`${url2}${query}`);

      console.log(result.data);

      setPlanets(result.data.results);
      setData(result.data);
      setIsLoading(false);
    };
  
    fetchPlanets();
    
  }, [url2, query]);
  
  useEffect(() => {
   
    const fetchStarships = async () => {
      setIsLoading(true);
      const result = await axios(`${url3}${query}`);

      console.log(result.data);

      setStarships(result.data.results);
      setData(result.data);
      setIsLoading(false);
    };

  
    fetchStarships();
  }, [url3, query]);

  const queryFunction = (q) => {
    if (q === "") {
      setQuery(q);
    } else {
      setQuery("?search=" + q);
    }
  };

  const nextHandler = () => {
    setUrl(data.next);
  };

  const previusHandler = () => {
    setUrl(data.previous);
  };

  return (
    <div className="container">

          <Router>
            <Navbar/>
           
            <Switch >
             <Route   exact path='/'>  
             <Home  />
            </Route>
           
            <Route   exact path='/people'> 
            <Search getQuery={queryFunction} /> 
            <PeopleGrid isLoading={isLoading} items={people} /> 
            {data.next && <button onClick={nextHandler}>next</button>}
             {data.previous && <button onClick={previusHandler}>previous</button>}  
             </Route>
             <Route   exact path='/planets'> 
             <Search getQuery={queryFunction} /> 
             <PlanetsGrid isLoading={isLoading} items={planets} />    
             {data.next && <button onClick={nextHandler}>next</button>}
             {data.previous && <button onClick={previusHandler}>previous</button>}  
             </Route> 
             <Route   exact path='/starships'> 
             <Search getQuery={queryFunction} /> 
             <StarshipsGrid isLoading={isLoading} items={starships} />    
             {data.next && <button onClick={nextHandler}>next</button>}
             {data.previous && <button onClick={previusHandler}>previous</button>}  
             </Route> 
           
             </Switch>
            
              
      </Router>
    
    
    </div>
  );
};

export default App;

// const App = () => {
//  const [people, setPeople] = useState([]);
//  const [planets, setPlanets] = useState([]);
//  const [starships, setStarships] = useState([]);
//  const [loading, setLoading]= useState(true);

 
//  useEffect(()=>{
//   const fetchPeople =async () =>{
//    const result =await axios(`https://swapi.dev/api/people/`)
//    setPeople(result.data)
//    setLoading(false)
//    console.log(result.data)

//   } 
//   const fetchPlanets =async () =>{
//     const result =await axios(`https://swapi.dev/api/planets/`)
//     setPlanets(result.data)
//     setLoading(false)
//     console.log(result.data)
 
   
//    } 
//    const fetchStarships =async () =>{
//     const result =await axios(`https://swapi.dev/api/starships/`)
//     setStarships(result.data)
//     setLoading(false)
//     console.log(result.data)
 
   
//    } 
//   fetchPeople();
//   fetchPlanets();
//   fetchStarships();
// },[])


//   return (
//     // <div className="container">
//     <>
//       <Router>
//         <Navbar/>
//         <Header />
//          <Container>
//           {loading ?(
//             <Dimmer active inverted>
//               <Loader inverted>Loading</Loader>
//             </Dimmer>
//           ):( 
//             <Switch>
//              <Route   exact path='/'>
//               <Home  />
//             </Route>
//             <Route   exact path='/people'>
//               <People data={people}/>
//             </Route>
//             <Route  exact path='/planets'>
//               <Planets  data={planets}/>
//             </Route>
//             <Route  exact path='/starships'>
//               <Starships  data={starships}/>
//             </Route>
//             </Switch>
//              )}  
//         </Container> 
//       </Router>
      
//       {/* <Search getQuery={queryFunction} />
     
    
      
    
//   </>);
// };

// export default App;
