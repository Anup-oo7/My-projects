import React from "react";
import styles from './index.module.css';

 const ListItem = ({item, index}) => {
    const{name, country, alpha_two_code, web_pages} = item;
    const state = item['state-province'];

    return (
            <table className={styles.listItemContainer} cellPadding={'0'} cellSpacing={'0'} border={'0'} width={'100%'}>
              <tr>
              <td width={'35%'} className={styles.name}>{name}</td>
              <td  width={'20%'} className={styles.country}>{country}</td>
              <td  width={'20%'} className={styles.state}>{state ?? 'N/A'}</td>
              <td  width={'25%'} className={styles.web_pages}>{web_pages}</td>
              </tr>
           </table>
         );
 }

 export default ListItem;