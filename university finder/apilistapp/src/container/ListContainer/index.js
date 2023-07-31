import React from "react";
import ListItem from "../../component/ListItem";
import styles from './index.module.css'

const ListContainer=({data})=>{

    return(
      <div>
        <table cellPadding={'0'} cellSpacing={'0'} border={'0'} width={'100%'}>
          <tr className={styles.heading}>
            <td width={'35%'}  className={styles.Name}>Name</td>
            <td width={'20%'}  className={styles.Country}>Country</td>
            <td width={'20%'}  className={styles.State}>State</td>
            <td width={'25%'}  className={styles.Link}>Link</td>
          </tr>
        </table> 
        {data.map((item, index)=>{ 
          return <ListItem item={item} index={index} />                
            })}
         
      </div>
            
          
       
    )
}
export default ListContainer;