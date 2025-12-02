import React from 'react'
import { Button, ConfigProvider, Flex, Tooltip } from 'antd';
import { ShoppingOutlined } from '@ant-design/icons';

const cartItems = 10;
const buttonWith = 50;
const CartButton = () => {
    return (

        <Tooltip placement="top" title={cartItems} color="red" open={cartItems > 0 ? true : false}>
            <Button type="primary" icon={<ShoppingOutlined />} style={{ width: buttonWith }}>
            </Button>
        </Tooltip>

    )
}

export default CartButton