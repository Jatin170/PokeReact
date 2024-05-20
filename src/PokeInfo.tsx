import React, { FC,useEffect,useState } from 'react';
import './PokeInfo.css';

import { useLocation } from 'react-router-dom';
const PokeInfo: FC = ()=>{


    // const data = "";
    // const API = `https://pokeapi.co/api/v2/pokemon/${data}`
    const location = useLocation();
    const [data,setData] = useState<any>({});
    const fetchApiD  = async(url:string)=>{
        try{
            const res = await fetch(url);
            res.json().then((val)=>{
                setData(val)
                console.log(val,"inside");
            });
            // let data_pokemon = data.results;
            // console.log(val);
        } catch(error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        console.log("ss",location.pathname);
        let v = location.pathname.slice(6)
        console.log(v);
        let url = `https://pokeapi.co/api/v2/pokemon/${v}`
    
       fetchApiD(url);
    },[])
    return <div className="container">
        
        <div><img src={data.sprites?.front_default} alt="No Image Available" /></div>

        <div>Name - {data.forms ? data?.forms[0].name:" no ability"} </div>
        <div>Base Experience - {data?.base_experience}</div>
        <div>Height - {data?.height} m</div>
        <div>Weight - {data?.weight} pound</div>
        <div>Abilities - {data.abilities ? data?.abilities[0]?.ability?.name:" no ability"} {data.abilities ? data?.abilities[1]?.ability?.name:" no ability"}</div>
        <div>Types - {data.types ? data?.types[0]?.type?.name:" no type"}  {data.types ? data?.types[1]?.type?.name:" no type"} </div>
    
        </div>

    
}

export default PokeInfo;