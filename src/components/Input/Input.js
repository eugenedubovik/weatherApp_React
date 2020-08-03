import React from 'react'
import styles from './styles.module.css'

export const Input = ({value, onChange}) => {
    
    
    // console.log(value)
    return <input type="search" 
            placeholder="Type a city..." 
            className={styles.input} 
            value={value} 
            onChange={onChange}></input>
            
}