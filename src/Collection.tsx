import React, { useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Collection: React.FC=()=>{

    let API = "https://pokeapi.co/api/v2/pokemon";
    const navigate = useNavigate();
    // const [data,setData] = useState([]);
    // let datapokemon:any = [];
    const [datapokemon,setDataPokemon] = useState([]);
    const fetchApiData = async(url:string)=>{
        try{
            const res = await fetch(url);
            res.json().then((val)=>{
                setDataPokemon(val.results)
            });
            // let data_pokemon = data.results;
            console.log(datapokemon);
        } catch(error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchApiData(API);
    },[])

    const pokeDetail =(val:any)=>{
        console.log("routing will be done",val);
        let s = val.url.slice(34).replace("/","");
        navigate(`info/${s}`);
    }
    return <div>
        <div className="container2"> PokeReact</div>
        <div className='container3'>

        {datapokemon.map((pokemon:any ,)=>{
            return <div key={pokemon.name} className="element" onClick={()=>{pokeDetail(pokemon)}}>
                {pokemon.name}</div>
                
        })}
        </div>
        {/* <Routes>
        <Route path="/1" element={<div>details</div>}/>
        </Routes> */}
    </div>
}

export default Collection;