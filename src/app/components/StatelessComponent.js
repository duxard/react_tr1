import React from 'react';

const StatelessComponent = ({ user, age, admin }) => {
    return (
        <div>
            <h4>Stateless component </h4>
            <p>Component props:</p>
            <p>User: {user}</p>
            <p>Age: {age}</p>
            <p>Admin: {admin}</p>
        </div>
    );
}

export default StatelessComponent;