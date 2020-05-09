import React from 'react';

const Books = (props) => {
    return (
        <ul>
            {
                props.items.map((item) => {
                    return <li>{item.title}</li>
                })
            }
        </ul>
    );
};

export default Books;