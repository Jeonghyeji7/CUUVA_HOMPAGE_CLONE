import { useEffect } from 'react';
//import dataArrays from '../portfolio/dataArrays';
import TestData from './TestData';
function Test ({test}) { 

    
     let arr = TestData[test];
     console.log(arr);
    useEffect(()=>{
        return () =>{
            console.log('클린업');
        }
    },[])
    return ( 
        <>
            넘겨받은값 :  {test} 
        </>
    )
}

export default Test;