import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>О блоге</h2>
          <p>Учебный блог :ж
          </p>
        </div>
        <div className={classes.col}>
          <h2>Контакты</h2>
          <span>Номер: домашний</span>
          <span>GitHub: -</span>
          <span>   </span>
        </div>
        <div className={classes.col}>
          <h2>Универ</h2>
          <span>Название: Университет Дубна</span>
          <span>Группа: ПРОГ-С-21</span>
          <span>         </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer