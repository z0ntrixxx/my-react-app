import ReactDOM from 'react-dom';
import type { FormEvent, PropsWithChildren } from 'react';

type FormProps ={
    isOpen: boolean;
    onClose: ()=> void;
}
export const Form =({isOpen, onClose}: PropsWithChildren<FormProps>) => {

const onSumbit = (e: FormEvent) =>{
    e.preventDefault();
    onClose();
}

if (!isOpen) return null
    return ReactDOM.createPortal(
        <div className="modal" id="formModal">
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="modal-window">
                <span className="exit-button" onClick={onClose}>&times;</span>
                <h2>Форма</h2>
                <form id="contactForm" className="form">
                    <label>Имя:
                    <input type="text" id="name" name="name" required />
</label>
                        <label>Email:
                        <input type="email" id="email" name="email" required />
</label>
                            <div className="modal-buttons">
                                <button type="submit" className="submit-button" onClick={onSumbit}>ОК</button>
                            <button type="button" className="cansel-button" onClick={onClose}>Отмена</button>
                        </div>
                </form>
            </div>
        </div>,
document.body    
);
    
}
