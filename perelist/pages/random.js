import Head from 'next/head'
import styles from '../styles/Random.module.css'
import Link from 'next/link'
import React, { useState } from 'react'


const Random = () => {

    const [color, setColor] = useState("red");


    return ( 
        <>
        <Head>
            <title>Ninja List | Random</title>
        </Head>

    
            <h1>My favorite color is {color}</h1>
            <button onClick={()=> setColor('Blue')}>Blue</button>
            <button onClick={()=> setColor('Green')}>Green</button>
            <button onClick={()=> setColor('Purple')}>Purple</button>

        </>
     );
}
 
export default Random;