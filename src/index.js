import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
export const Capitalize = ({ str }) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
