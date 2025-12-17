import React from 'react'
import { Button, Flex, Tooltip } from 'antd';
import { ShoppingOutlined } from '@ant-design/icons';
import './cartButton.css';

const cartItems = 0;

const CartButton = () => {
    return (
        <Flex className='cartButtonContainer'>
            <Tooltip placement="bottom" title={cartItems > 0 ? `${cartItems} items` : 'Carrito vacío'}>
                <Button
                    className='cartButton'
                    shape="circle"
                    icon={<ShoppingOutlined />}
                    style={{
                        width: 50,
                        height: 50,
                        backgroundColor: '#40a9ff',
                        borderColor: '#40a9ff',
                        color: 'white'
                    }}
                />
            </Tooltip>
        </Flex>
    )
}

export default CartButton