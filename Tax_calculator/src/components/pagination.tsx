import React from 'react';
import Button from './button';
import styled from "@emotion/styled";

type PageNavigator = {
    totalCount: number,
    itemsPerPage: number,
    setItemsPerPage: (count: number) => void,
    hideItemsPerPage?: boolean
    showControls?: boolean,
    showEdges?: boolean,
    page: number,
    setPage: (no: number) => void,
    className?: string,
    icons?: {
        next?: React.ReactElement,
        prev?: React.ReactElement,
        start?: React.ReactElement,
        end?: React.ReactElement,
    }
}

const defaultIcons = {
    prev: <>❮</>,
    next: <>❯</>,
    start: <>❮❮</>,
    end: <>❯❯</>,
}

const ButtonContainer = styled('span')`
    button{
      background: #fff;
      color: #E0E0E0 ;
      border: 0.0625rem solid #E0E0E0;
      border-radius: 0.3125rem;
      display: inline-block;
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
        background: #f4694c;
        color: #fff;
      }
    }
`;


const PageNavigator = ({
                           totalCount, itemsPerPage, setItemsPerPage, className = '', hideItemsPerPage = false, page, setPage,
                           showControls = true, showEdges = true,
                       }: PageNavigator) => {


    const icons = {...defaultIcons}
    const length = Math.floor(((totalCount + itemsPerPage-1) / itemsPerPage));

    const getPageNo = () => {
        let list = [];
        if(length > 1) {
            if(length < 6)
                Array.from({ length }, (_item, i) => {
                    list.push(i+1);
                });
            else if(page > 2 && page + 2 < length)
                for(let i = page-2; i <= (page+2); i++)
                    list.push(i);
            else if(page + 2 >= length)
                for(let i = length-4; i <= length; i++)
                    list.push(i);
            else {
                for(let i = 1; i <= 5; i++)
                    list.push(i);
            }
        } else list = [1];
        return list;
    };

    return (
        <div className={`flex items-center justify-center text-center pt-4 ${className}`}>
            <div style={{ userSelect: 'none' }}>
                {(showEdges && page > 2) && (
                    <Button className="w-12 mx-1" inline={true} onClick={() => setPage(1)}>
                        {icons?.start}
                    </Button>
                )}
                {(showControls && page > 1) && (
                    <Button className="w-16 mx-1" inline={true} onClick={() => setPage(page - 1)}>
                        {icons?.prev}
                    </Button>
                )}
                <React.Fragment>
                    {getPageNo().map((item, index) =>
                        <Button
                            type={item === page ? 'selected' : 'basic'}
                            key={`page_${item}_${index}`}
                            className={`w-12 mx-1 ${page === item ? 'active' : ''}`}
                            onClick={() => setPage(item)}
                            inline={true}
                        >
                            {item}
                        </Button>
                    )}
                </React.Fragment>
                {(showControls && !(page + 1 >= length)) && (
                    <Button className="w-16 mx-1" inline={true} onClick={() => setPage(page + 1)}>
                        {icons?.next}
                    </Button>
                )}
                {(showEdges && (page + 1 < length)) && (
                    <Button className="w-12 mx-1" inline={true} onClick={() => setPage(length)}>
                        {icons?.end}
                    </Button>
                )}
            </div>
        </div>
    );
};

export default PageNavigator;
