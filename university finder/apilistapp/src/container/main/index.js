import React, { useEffect, useState } from 'react';
import Header from '../../component/Header/Header';
import styles from './index.module.css'
import ListContainer from '../ListContainer';

 const API_CONSTANT = 'http://universities.hipolabs.com/search?country=India&';
const Main=()=>{
    const[data, setData] = useState([])
    const[page, setPage] = useState(1)
    const[limit, setlimit] = useState(10)

    const fetchData=()=>{
        fetch(API_CONSTANT+'limit='+limit)
         .then((res)=>res.json())
         .then((response)=>{
          setData(response)
         })
         .catch((err)=>{
            console.log(err)
         })
    }
    useEffect(()=>{
        setlimit(page*10)
    }, [page])

    useEffect(()=>{
        fetchData()
    }, [limit])
    return(

        <div className={styles.container}>
            
            <Header/>
            <ListContainer data={data}/>


            <button onClick={()=>setPage(page+1)} className={styles.next}>Next</button> 
            
        </div>
    )
}
export default Main;