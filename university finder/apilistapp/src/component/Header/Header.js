import React from "react";
import styles from './Header.module.css'
import  img from './img/OIP.jpeg'
const Header=()=> {

    return(
        <div className={styles.container}> 
           <div className={styles.textWrapper}>
           <span>University Finder</span>
           <span><img src={img} alt="" width={'30px'}/></span>
          </div> 
           <div className={styles.inputWrapper}>
           <span>Search University </span><input type="text" placeholder="Enter University Name"/>
          </div> 
        </div>
    ) 
       
    
}
export default Header;