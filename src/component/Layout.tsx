import { Header } from "./Header/Header"
import { Footer } from "./Footer/Footer"
import { Outlet } from 'react-router-dom';
import { Preloader } from "./Preloader/Preloader";
import { Form } from "./Form/Form";
import { useState } from "react";

export const Layout = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="container">
            <Preloader />
            <Header openForm={() => setIsOpen(true)} />
            <main><Outlet /></main>
            <Footer />
            <Form isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
    )
}