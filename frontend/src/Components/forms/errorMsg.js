import React from 'react'
import { AiOutlineWarning } from 'react-icons/ai'
let color = 'grey'
export default function ErrorMsg(msg) {
    return (
        <div style = {ErrorStyle}>
            <AiOutlineWarning color = {color}/>
           <span> {msg}</span>
        </div>
    )
}

let ErrorStyle = {
    width: '30rem',
    padding: '4px 10px',
    margin: '0 auto 1rem',
    backgroundColor: ' #FEC9C9 ',
    color: color
}