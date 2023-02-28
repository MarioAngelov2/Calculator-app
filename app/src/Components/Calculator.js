import React from 'react'
import { useState } from 'react'
import '../Style/Calculator.css'

function Calculator() {
  return (
    <div className='calculator'>
      <div className='keypad'>
      <button name='/'>/</button>
        <button name='X'>X</button>
        <button name='C'>C</button>
        <button name='clear'>Clear</button>
        <button name='8'>8</button>
        <button name='9'>9</button>
        <button name='7'>7</button>
        <button name='+'>+</button>
        <button name='4'>4</button>
        <button name='5'>5</button>
        <button name='6'>6</button>
        <button name='-'>-</button>
        <button name='1'>1</button>
        <button name='2'>2</button>
        <button name='3'>3</button>
        <button name='='>=</button>
        <button name='.'>.</button>
        <button name='0'>0</button>
        <button name='%'>%</button>
       
        
      </div>
      
    </div>
  )
}

export default Calculator
