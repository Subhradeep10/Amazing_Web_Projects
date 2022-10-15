import React from 'react';
import styled from '@emotion/styled';
import "../index.css";


type Button = {
    children?: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    label?: string,
    className?: string,
    disabled?: boolean,
    size?: 'base' | 'sm' | 'xs',
    type?: 'primary' | 'basic' | 'selected' | "secondary" | "outline",
    inline?: boolean,
}

type IconProps = {
    Type?: 'Bold' | 'Outline' | 'Social',
}

type ButtonContainerProps = {
    type?: "primary" | "basic" | "selected" | "secondary" | "outline",
    inline?: boolean,
}

const ButtonContainer = styled('span')<ButtonContainerProps>`
    button{
      background: #5146e6;
      color: #fff;
      border-radius: 0.3125rem; 
      display: ${props => props.inline ? 'inline-block' : 'flex'};
      position: relative;
      overflow: hidden;
      text-align: center;
      font-family: Pangram, sans-serif;
      &:disabled {  
        color: #fff;
        background: #E0E0E0;
        pointer-events: none;
        border: 0.0625rem solid #E0E0E0;
      }
      &:focus, &:hover {
        cursor: pointer;
      }
    }
`;

const Button = ({ label, children, className = '', disabled = false ,onClick = () => {}, size = 'base', type = "primary", inline = false }: Button) => {

    const _className = (() => {
        let classNames =  'gap-2 ';

        classNames += `${size === 'xs' ? 'px-6 py-1.5 ' : size === 'sm' ? 'px-7 py-2 ' : size === 'base' ? 'px-8 py-3 ' : ''} `;
        classNames += `text-${size} `;
        classNames += className;
        return classNames;
    })();

    const buttonRenderer = () => (
        <button
            aria-label={label}
            onClick={e => {
                e.stopPropagation();
                onClick(e);
            }}
            disabled={disabled}
            className={_className}
        >
            {children}
        </button>
    );

    return (
        <ButtonContainer type={type} inline={inline}>
            {buttonRenderer()}
        </ButtonContainer>
    )
}

export default Button;