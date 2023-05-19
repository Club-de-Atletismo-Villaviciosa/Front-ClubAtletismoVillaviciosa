import React from 'react'
import "./Calendar.css"

function Calendar() {
  return (
    <div className='calendar'>
      <h2>Calendario de Competiciones</h2>
      {/* <iframe src="https://www.google.com/calendar/embed?color=%23ffad46&amp;deb=-&amp;embed_style=WyJhdDplbWI6c3QiLCIjZTBlMGUwIiwiI2VkZWRlZCIsIiM0MTg0ZjMiLCJyb2JvdG8iLCIjNjM2MzYzIiw1MDAsIiNmZmYiXQo&amp;eopt=2&amp;mode=MONTH&amp;showCalendars=1&amp;showDate=0&amp;showNav=0&amp;showPrint=0&amp;showTitle=0&amp;showTz=1&amp;src=ZjAxNmI0NWFhYTVkODQ0M2Y1M2VhZDAyYTEzYmQxZmNjY2ZjNzM4ZmFiOGE4ZDE4NmY0YWZkYWMyZmE4YjE0ZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"  
      width="1000" height="800" frameborder="0" aria-label="Calendar, Competiciones" allowfullscreen=""></iframe> */}

{/* <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FMadrid&src=Y2Euc3BhaW4ub2ZmaWNpYWwjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y19hNmM1MjNkZGU3ZDYxNDdlMTQ2NjBjZThhYzYxNGMwYjc5YjcxZjM4NTM2OGEzMTE3YThjZTUwODQ0YmRiOTZkQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%230B8043&color=%23F4511E" 
width="800" height="600" frameborder="0" scrolling="no"></iframe> */}

{/* <iframe src="https://calendar.google.com/calendar/embed?src=es.spain.official%23holiday%40group.v.calendar.google.com&ctz=Europe%2FMadrid" 
width="800" height="600" frameborder="0" scrolling="no"></iframe> */}

<iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FMadrid&title=El%20Gaitero%20Atletismo&src=bWFnYXR6ZW0ucnVzY0BnbWFpbC5jb20&src=Y2Euc3BhaW4ub2ZmaWNpYWwjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%230B8043" width="800" height="600" frameborder="0" scrolling="no"></iframe>
    </div>
  )
}

export default Calendar