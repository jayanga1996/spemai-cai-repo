import React from 'react'
import styles from './styles.module.css'
// import ChatContainer from './components/ChatContainer';
// import chat_icon from './assets/Frame 5182.png'
// import chat_close_icon from '../src/assets/Group 3178.png'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
export const Capitalize = ({ str }) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
