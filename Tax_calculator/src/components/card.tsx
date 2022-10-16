import React from "react";
import styled from '@emotion/styled';

type Card = {
    children: React.ReactNode;
    title?: string,
    description?: string,
    titleClassName?: string,
    className?: string,
    background?: string,
    height?: string,
    width?: string,
    onClick?: () => void,
    clickable?: boolean,
}

type CardContainer = {
    background?: string
    clickable?: boolean
}

const CardContainer = styled('div')<CardContainer>`
  background: ${({ background }) =>
    background ? background : '#fff'
    };
  font-family: Pangram, sans-serif;
  :hover {
    cursor: ${({ clickable }) => clickable ? 'pointer' : 'default'};
  }
`

const Card = ({ title, description,  className = '', titleClassName = '', children, background, onClick = () => {}, clickable }: Card) =>  (
    <CardContainer className={className} background={background} onClick={() => onClick} clickable={clickable}>
        {(title || description) &&
            <div className="px-2 pt-2">
                {title &&
                    <h3 className={`text-3xl mb-2 font-semibold ${titleClassName}`}>
                        {title}
                    </h3>}
                {description && <p className="text-lg opacity-90 mb-2">{description}</p>}
            </div>}
        {children}
    </CardContainer>
);


export default Card;
