import React from 'react';
import { Form } from 'antd';

const FormLayout = ({ children, layout, ...props }) => (
    <Form
        style={{
            backgroundColor: "#fff",
            boxShadow: "0px 0px 20px 5px rgba(128,128,128,0.2)"
        }}
        layout={layout || "vertical"}
        {...props}
    >
        {children}
    </Form>
);

export { FormLayout };