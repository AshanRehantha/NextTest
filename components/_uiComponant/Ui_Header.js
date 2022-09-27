import React from 'react';
import styles from '../../styles/Home.module.css';

const Headers = (props) => {
  return (
    <div className={styles.header_top}>
    <div className={styles.header_logo}>
        FACES
    </div>
    <div className={styles.header_button}>
      {props.pathname == "/" ? 
        <button className={styles.gen_button} onClick={props.genNewUsers} >generate new users</button> :
        <button className={styles.gen_button} onClick={props.backButton}>Back</button>
      }
    </div>
    </div>
  )
}

export default Headers