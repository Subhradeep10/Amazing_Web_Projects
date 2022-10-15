import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

type SearchbarProps = {
    keyword?: string,
    onSearch?: (keyword: string) => void
}

const Searchbar = ({keyword, onSearch = () => {}}: SearchbarProps) => {
    return (
        <div className="w-2/5 h-12 flex bg-white relative">
            <input className="min-w-full pl-8" onChange={() => onSearch} value={keyword} placeholder="Search by legal name, trade name or GST number"></input>
            <FontAwesomeIcon icon={faSearch} className="absolute left-2 top-4"/>
        </div>
    )
}

export default Searchbar