import React from 'react'
import classes from './navbar.module.css'
import { Link } from 'react-router-dom'
import womanImg from '../../assets/wnm.jpg'
import { useState } from 'react'

const Navbar = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to='/'>На главную</Link>
        </div>
        <ul className={classes.center}>
          <li className={classes.listItem}>Домой</li>
          <li className={classes.listItem}>О блоге</li>
          <li className={classes.listItem}>Контакты</li>
          <li className={classes.listItem}>Категории</li>
        </ul>
        <div className={classes.right}>
          <img onClick={() => setShowModal(prev => !prev)} src={womanImg} className={classes.img} />
          {showModal &&
            <div className={classes.modal}>
              <Link to='/create'>Создать</Link>
              <span>Выйти</span>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar