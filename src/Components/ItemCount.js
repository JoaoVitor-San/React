import React, { useState } from 'react';

const ItemCount = ({ stock = 10, initial = 1, onAdd }) => {
    const [count, setCount] = useState(initial);

    const handleIncrease = () => {
        if (count < stock) {
        setCount(count + 1);
        }
    };

    const handleDecrease = () => {
        if (count > 1) {
        setCount(count - 1);
        }
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
        <h4>Quantidade</h4>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <button onClick={handleDecrease} className="btn btn-danger">-</button>
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{count}</span>
            <button onClick={handleIncrease} className="btn btn-success">+</button>
        </div>
        <button
            onClick={() => onAdd(count)}
            className="btn btn-primary mt-3"
            disabled={count === 0}
        >
            Adicionar ao Carrinho
        </button>
        </div>
    );
};

export default ItemCount;
