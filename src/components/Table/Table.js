import React from 'react'
import styles from './styles.module.css'

export const Table = ({children}) => {
    return <div>
        <table className={styles.tableData}>
            <thead className={styles.table}>
                <tr>
                <td className={styles.td}>City</td>
                <td className={styles.td}>Country</td>
                <td className={styles.td}>t, &deg;C</td>
                <td className={styles.td}>t, &deg;F</td>
                </tr>
            </thead> 
            <tbody>{children}</tbody>              
        </table>
    </div>
}