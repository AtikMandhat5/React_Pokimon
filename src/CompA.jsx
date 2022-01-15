import React, { useEffect, useState } from 'react'
import axios from "axios";

const CompA = () => {

    const [num, setNum] = useState();
    const [name, setName]= useState();
    const [move,setMove]=useState();


    useEffect(()=>
    {
        // alert("hey");
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            console.log(res.data.name);
            setName(res.data.name);
            setMove(res.data.moves.length);
            // setName(res.data.name);
        };
        getData();
    });

    return (
        <>
            <h1>You Chose <span style={{color:"red"}}> {num}</span> value</h1>
            <h1>Your name is <span style={{color:"red"}}> {name} </span>value</h1>
            <h1>You have moves <span style={{color:"red"}}> {move}</span> value</h1>
            {/* <h1>You Chose {num} value</h1> */}
            <select value={num}
                onChange={(event) => {
                    setNum(event.target.value);
                }}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="5">5</option>
                <option value="4">4</option>
            </select>
        </>

    );
};
export default CompA;