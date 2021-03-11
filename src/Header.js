import { Input } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import React from 'react'
import { Avatar } from "@material-ui/core"
import './Header.css';
import { useDataLayerValue } from './DataLayer';
function Header() {
    const [{ user }, dispatch] = useDataLayerValue();
    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <Input
                    placeholder="Search for Artists,songs"
                    type="text"
                />
            </div>

            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
