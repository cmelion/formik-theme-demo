import React from 'react'
import styles from './Button.module.css'

export default ({ onClick = e=>{}, text}) => (
    <button
        className={styles.Button}
        onClick={onClick}
        >{ text }
    </button>
)
