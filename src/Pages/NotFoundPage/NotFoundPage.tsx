import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Header } from '../../component/Header/Header'
import { Form } from '../../component/Form/Form'

export const NotFoundPage = (): React.ReactElement => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='Not__found'>
            <Header openForm={() => setIsOpen(true)} />
            <div className='Not__found-page'>
                <h1 className='Not__found'>404 Not found page</h1>
                <button className='Not__found__button'><NavLink className='Not__found__button__link' to='/'>Вернуться</NavLink></button>
            </div>
            <Form isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
    )
}