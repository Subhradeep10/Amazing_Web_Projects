import React from 'react';
import styled from "@emotion/styled";
import Button from "./button";

const NavbarContainer = styled('div')`
    height: 64px;
    width: 100%;
    background: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0px 20px;
`

const TabContainer = styled.div`
    display: flex;
`

const Logo = styled('div')`
  padding-left: 14px;
  :hover {
    cursor: pointer;
  }
`

const NavIcons = styled('div')`
    display: flex;
`

const items = ["Manage Subscriptions"]

const NavBar = ({}) => {

    const [selected, setSelected] = React.useState(null);

    return (
        <NavbarContainer>
            <div>
                <TabContainer>
                    {items?.map((item, index: any) => {
                        return (
                            <Button className='m-2' onClick={() => setSelected(index)} type="selected">
                                {item}
                            </Button>
                        )
                    })}
                </TabContainer>
            </div>
        </NavbarContainer>
    )
}

export default NavBar;