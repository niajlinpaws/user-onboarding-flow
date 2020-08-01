import React from 'react';
import { Row, Col, Typography } from 'antd';

const { Paragraph, Title } = Typography;

const FormHeader = ({ heading, subHeading}) => (
    <Row
        style={{ textAlign: "center" }}
        type="flex"
        justify="center"
        gutter={[8, 72]}
    >
        <Col span={20}>
            <Title level={2}>{heading}</Title>
            <Paragraph
                style={{ fontSize: "1.1rem" }}
                type="secondary"
            >
                {subHeading}
            </Paragraph>
        </Col>
    </Row>
);

export { FormHeader };
