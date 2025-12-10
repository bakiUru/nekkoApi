import React from 'react'
import { Button, ConfigProvider, Flex, Tooltip } from 'antd';
import { ShoppingOutlined } from '@ant-design/icons';
import './cartButton.css';

const cartItems = 11;
const buttonWith = 50;
const CartButton = () => {
    return (
        <Flex className='cartButtonContainer'>

            <Tooltip placement="top" title={cartItems} color="red" open={cartItems > 0 ? true : false}>
                <Button className='cartButton' type="primary" icon={<ShoppingOutlined />} style={{ width: buttonWith }}>
                </Button>
            </Tooltip>
        </Flex>

    )
}

export default CartButton