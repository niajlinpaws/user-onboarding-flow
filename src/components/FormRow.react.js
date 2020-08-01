import React from 'react';
import { Row, Col } from 'antd';

import { FormItem } from './FormItem.react';

const FormRow = ({ gutter, items, type }) => (
    <Row type="flex" justify="center" gutter={gutter}>
        {items.map(item => (
            <Col span={20 / items.length}>
                <FormItem 
                    type={type}
                    {...item}
                />
            </Col>
        ))}
    </Row>
);

export { FormRow };