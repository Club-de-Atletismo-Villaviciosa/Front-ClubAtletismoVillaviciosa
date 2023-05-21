import React from 'react'
import "./Calendar.css"

function Calendar() {
  return (
    <div className='calendar'>
      <h2>Calendario de Competiciones</h2>      

      <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%238E24AA&ctz=Europe%2FMadrid&title=El%20Gaitero%20Atletismo&src=bWFnYXR6ZW0ucnVzY0BnbWFpbC5jb20&src=Y2Euc3BhaW4ub2ZmaWNpYWwjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%230B8043"
        width="800" height="600" frameborder="0" scrolling="no"></iframe>

    </div>
  )
}

export default Calendar