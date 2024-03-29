import React from 'react'
import Nav from 'react-bootstrap/Nav'

const Navbar = () => {
    return (
        <Nav justify variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/bodegas">Bodegas</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/pasillos">Pasillos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/estanterias">Estanterias</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/categorias">Categorias</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/imput/output">Entradas/Salidas</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/stock">Stock Productos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/find/product">Buscar Productos</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Navbar