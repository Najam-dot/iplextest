import React from 'react'
import styles from './contact.module.css'
const Contact = (props) => {
  return (
    <div className={styles.display}>
      <h1>Contact Page</h1>
      {<img src={props.location.item.imageUrl}></img>}
      {<p>{props.location.item.id}</p>}
      {<p>{props.location.item.firstName}</p>}
      {<p>{props.location.item.lastName}</p>}
      {<p>{props.location.item.fullName}</p>}
      {<p>{props.location.item.title}</p>}
      {<p>{props.location.item.family}</p>}
    </div>
  )
}

export default Contact
