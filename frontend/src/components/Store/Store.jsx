import React from 'react'
import { Typography } from 'antd'
import './store.css'

function Store() {
    return (
        <div className="store-container">
            <h2>Tienda</h2>
            <div className="store-content">
                <p className="store-message">
                    ¡Próximamente! Estamos preparando nuestra tienda online con productos increíbles para vos.
                    Mientras tanto, podés contactarnos directamente para hacer tu pedido personalizado.
                </p>
            </div>
        </div>
    )
}

export default Store