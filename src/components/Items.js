import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap';

const Items = () => {
    const [ items, setItems ] = useState({})
    useEffect(() =>{
        fetch('/api/items')
        .then(res => res.json())
        .then(res => {
            setItems(res)
        })
    },[])
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={items.img} />
            <Card.Body>
                <Card.Title>Number : {items.carNum}</Card.Title>
                <Card.Title>Brand : {items.brand}</Card.Title>
                <Card.Title>Model : {items.model}</Card.Title>
                <Card.Text></Card.Text>
                <Button variant="primary">Buy</Button>
            </Card.Body>
        </Card>
    )
}

export default Items
