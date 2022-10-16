import React from 'react';
import styled from "@emotion/styled";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAdd, faHome} from "@fortawesome/free-solid-svg-icons";

const SidebarContainer = styled('div')`
    position: fixed;  
    width: 288px;
    height: 100%;
    background: #202837;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0px 20px;
    color: #fff;
`


const Sidebar = () => {
    return (
        <SidebarContainer>
            <ul>
                <li><div className="h-16 w-72 flex justify-center items-center font-bold text-4xl bg-[#111827]">Application</div></li>
                <li><div className="flex justify-center h-12 items-center"><Link to="/"><span><FontAwesomeIcon icon={faHome} size={'1x'}/></span><span className="ml-2">Home</span></Link></div></li>
                <li><div className="flex justify-center h-12 items-center"><Link to="/add"><span><FontAwesomeIcon icon={faAdd} size={'1x'}/></span><span className="ml-3">Add</span></Link></div></li>
            </ul>
        </SidebarContainer>
    );
}

export default Sidebar;