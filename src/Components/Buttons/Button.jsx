import React from 'react';
import './Button.css';

const STYLE = ['btn--primary','btn--outLine']

const SIZE = ['btn--medium','btn--large']

export  const Button = ({children, type, onclick, buttonStyle, buttonSize})=>{

    const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle :STYLE[0]
    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0 ]

    return(
        <a href='./signup' className='btn--mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onclick={onclick}  type={type}>
                {children}
            </button>

        </a>
    )
}
