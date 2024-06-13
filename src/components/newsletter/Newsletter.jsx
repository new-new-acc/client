import React from 'react'
import classes from './newsletter.module.css'
import {FiSend} from 'react-icons/fi'

const Newsletter = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h5>Хотите получать обновления о своём блоге?</h5>
          <h2>Оставьте здесь свою почту</h2>
        </div>
        <div className={classes.inputContainer}>
          <input type="email" placeholder='Введите почту...'/>
          <FiSend className={classes.sendIcon}/>
        </div>
      </div>
    </div>
  )
}

export default Newsletter