import React from 'react';
import { 
    Button,
    Input,
    Typography
} from 'antd';

const { TextArea } = Input;
const { Text } = Typography;

const Item = {
    "Button": ({text, ...props})=> (
        <Button {...props}>{text}</Button>
    ),
    "Input": (props)=> (
        <Input {...props} />
    ),
    "TextArea": (props)=> (
        <TextArea {...props} />
    )
};

const FormItem = ({ type, label, ...props }) => (
    <>
        {label && (<Text type="secondary">{label}</Text>)}
        {Item[type](props)}
    </>
);

export { FormItem };