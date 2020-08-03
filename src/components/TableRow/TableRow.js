import React from 'react'
import styles from './styles.module.css'

export const TableRow = ({city, country, tempDegC, tempDegF}) => {
    return <tr className={styles.tableRow}>
                <td className={styles.td}> {city} </td>
                <td className={styles.td}> {country} </td>
                <td className={styles.td}> {tempDegC} </td>
                <td className={styles.td}> {tempDegF} </td>
                
    </tr>
}