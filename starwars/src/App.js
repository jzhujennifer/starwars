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
    const fetchPlanets = async () => {
      setIsLoading(true);
      const result =  await axios(`https://swapi.dev/api/planets`);

      console.log(result.data);

      setPlanets(result.data.results);
      setData(result.data);
      setIsLoading(false);
    };
    const fetchStarships = async () => {
      setIsLoading(true);
      const result = await axios(`https://swapi.dev/api/starships`);

      console.log(result.data);

      setStarships(result.data.results);
      setData(result.data);
      setIsLoading(false);
    };

    fetchPeople();
    fetchPlanets();
    fetchStarships();
  }, [url,query]);


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
             
             <PlanetsGrid isLoading={isLoading} items={planets} />    
             {data.next && <button onClick={nextHandler}>next</button>}
             {data.previous && <button onClick={previusHandler}>previous</button>}  
             </Route> 

             <Route   exact path='/starships'> 
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

