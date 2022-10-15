import React, {ReactNode} from 'react';
import styled from "@emotion/styled";
import Card from "./card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

type ModalProps = {
    isOpen?: boolean;
    children?: ReactNode;
    onClose?: () => void;
}

type ModalContainerProps = {
    isOpen?: boolean;
}

const ModalContainer = styled('div')<ModalContainerProps>`
  display: ${props => props.isOpen? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  position: fixed; 
  z-index: 5; 
  left: 0;
  top: 0;
  right: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
`


const Modal = ({children, isOpen, onClose = () => {}}: ModalProps) => {

    const [opener, setOpener] = React.useState(isOpen);

    React.useEffect(() => {
        setOpener(isOpen);
    },[isOpen])

    return (
        <ModalContainer isOpen={opener}>
            <Card className="p-5 rounded">
                <div className="flex justify-end">
                    <FontAwesomeIcon icon={faTimes} className="hover:cursor-pointer" onClick={() => {
                        setOpener(false);
                        onClose();
                    }}/>
                </div>
                {children}
            </Card>
        </ModalContainer>
    )
}

export default Modal;