import React from 'react';
import styled from '@emotion/styled';
import Button from "./button";

type DropdownProps = {
    placeholder?: string;
    label?: string;
    className?: string,
    onClick?: () => void,
    isSelected?: string,
    onClose?: () => void,
    disabled?: boolean,
    onChange?: (value : any) => void,
    hasButton?: boolean,
    onButtonClick?: () => void,
    buttonText?: string,
    items?: {
        name?: any,
        className?: string,
    }[]
}

const TextFieldContainer = styled.div`
    height: 100%;
    width: 100%;
    color: #030e19;
    font-size: 14px;
    font-family: Pangram, sans-serif;
    border-radius: 4px;
`;

const DropDownContainer = styled.div`
    width: 100%;
    padding: 0.5rem 0.5rem 0.5rem 0.7rem;
    display: flex;
    border: 1px solid #828282;
    color: #030e19;
    font-size: 12px;
    font-family: Pangram, sans-serif;
    border-radius: 4px;
    ::placeholder {
      color: #828282;
    }
    :focus {
        outline: none;
        border: 1px solid #F4694C;
    }
`;

const InputContainer = styled.div`
      width: 100%;
      padding: 0.5rem 0.5rem 0.5rem 0.7rem;
      color: #828282;
      cursor: pointer;
      font-size: 14px;
      position: relative;
      display: inline-block;
      background-color: #fff;
      border-radius: 4px;
      :hover {
        background-color: #E8E8E8;
      }
    `;

const DropDownMenu = styled('div')`
  display: block;
  position: absolute;
  margin-top: 0.5rem;
  background: #f6f6f6;
  border: 1px solid #bdbdbd;
  z-index: 1;
  width: 100%;
`;

const Dropdown = ({ items = [], onClose = () => {}, className = '', placeholder, label, isSelected, disabled, onChange = () => {}, hasButton, onButtonClick, buttonText } : DropdownProps) =>{

    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState(isSelected ? isSelected : "");

    return (
        <div className={"relative inline-block w-full " + className}>
            <TextFieldContainer>
                <div className={'w-full px-0 flex justify-between'}>
                    {label &&
                        <label className="text-lg opacity-80 mb-2" aria-hidden={false}>
                            {label}
                        </label>}
                    {hasButton &&
                        <Button onClick={onButtonClick} size={"xs"} className="mb-1">
                            {buttonText}
                        </Button>}
                </div>
                <DropDownContainer className="justify-between" onClick={() => setIsOpen(true)}>
                    {selectedItem !== "" ? selectedItem : placeholder}
                </DropDownContainer>
            </TextFieldContainer>
            {isOpen && !disabled ? (
                <DropDownMenu role="navigation" onMouseLeave={() => setIsOpen(false)}>
                    <div role="menu" onMouseLeave={onClose}>
                        {items.length > 0 && items.map((n,i) => {
                            return (
                                <InputContainer key={i} className={n?.className} onClick={() => {
                                    onChange(n?.name);
                                    setSelectedItem(n?.name);
                                    setIsOpen(false);
                                }}>
                                    {n?.name}
                                </InputContainer>
                            )
                        })}
                    </div>
                </DropDownMenu>
            ) : <div />}
        </div>
    )
}

export default Dropdown;