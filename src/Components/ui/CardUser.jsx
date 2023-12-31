import React from 'react';
import './CardUser.css';

const CardUser = ({ user }) => {
    return (
        <div className="card-user">
            <img src={user.images} alt={user.nome} />
            <div>
                <h3>{user.nome}</h3>
                <span>{user.email}</span>
            </div>
        </div>
    );
}

export default CardUser;
