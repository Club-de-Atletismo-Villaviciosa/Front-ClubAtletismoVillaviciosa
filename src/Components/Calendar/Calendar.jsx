import React from 'react'
import "./Calendar.css"

function Calendar() {
  return (
    <div className='calendar'>
      <h2>Calendario de Competiciones</h2>
      <iframe src="https://www.google.com/calendar/embed?color=%23ffad46&amp;deb=-&amp;embed_style=WyJhdDplbWI6c3QiLCIjZTBlMGUwIiwiI2VkZWRlZCIsIiM0MTg0ZjMiLCJyb2JvdG8iLCIjNjM2MzYzIiw1MDAsIiNmZmYiXQo&amp;eopt=2&amp;mode=MONTH&amp;showCalendars=1&amp;showDate=0&amp;showNav=0&amp;showPrint=0&amp;showTitle=0&amp;showTz=1&amp;src=ZjAxNmI0NWFhYTVkODQ0M2Y1M2VhZDAyYTEzYmQxZmNjY2ZjNzM4ZmFiOGE4ZDE4NmY0YWZkYWMyZmE4YjE0ZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"  
      width="1000" height="800" frameborder="0" aria-label="Calendar, Competiciones" allowfullscreen=""></iframe>
    </div>
  )
}

export default Calendar