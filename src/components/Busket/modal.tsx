import React from 'react';

const Modal = ({handleSetModal}) => {

    return (
        <div>

        <form>
            <input type="text" placeholder='номер карты'/>
            <input type="text" placeholder='год окончания '/>
            <input type="text" placeholder='cvc'/>
            <button>Оплатить</button>
        </form>
        <button onClick={() => handleSetModal(false)}>x</button>``
        </div>
    );
};

export default Modal