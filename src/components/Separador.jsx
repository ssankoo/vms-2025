import React from 'react'

const Separador = ({ imagen, height = 'h-90' }) => {
    return (
        <div
            className={`w-full ${height} bg-cover bg-center`}
            style={{ backgroundImage: `url('${imagen}')` }}
        />
    )
}

export default Separador