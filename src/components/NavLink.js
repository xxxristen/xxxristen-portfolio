import React from 'react'

export const NavLink = ({linkTitle, url}) => {
    return (
        <>
        <a href={url} className>{linkTitle}</a>
        </>
    )
}