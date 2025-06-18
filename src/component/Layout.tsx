import React from 'react'

import { Header } from "./Header/Header"
import { Footer } from "./Footer/Footer"

type LayoutProps = {
    children: React.ReactMode;
};

export const Layout = ({ children }: LayoutProps) => {
    return( 
        <div className="container">
        <Header/>
<main> { children }</main>
<Footer/>
        </div>
    )
}