import React from 'react'
import styles from './styles.module.css'

export const Button = (props) =>{
  let {type,text,color,size,...newProps} =props;
  return <button 
  className={`
  ${styles["thd-button"]} 
  ${styles[color] || styles.primary}
  ${styles[type] || styles.solid} 
  ${styles[size] || styles.medium}
  `.trim()} 
  {...newProps}>{text}</button>
}