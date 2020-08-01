import React from 'react';

import {
    FormLayout as Form,
    FormHeader as Header,
    FormRow as Row
} from './../components';

const BasicQuestionsView = (props) => (
    <Form {...props }>
        <Header
            heading="User Onboarding"
            subHeading="Part 1/3 - Basic Questions"
        />
        <Row
            gutter={[8, 24]}
            items={[
                {
                    label: "First Name",
                    name: "firstName",
                    required: true,
                    size: "large",
                    type: "Input"
                },
                {
                    label: "Last Name",
                    name: "lastName",
                    required: true,
                    size: "large",
                    type: "Input"
                }
            ]}
        />
        <Row
            gutter={[8, 48]}
            items={[
                {
                    label: "Email",
                    name: "email",
                    required: true,
                    size: "large",
                    type: "Input"
                }
            ]}
        />
        <Row
            gutter={[8, 96]}
            items={[
                {
                    label: "Phone Number",
                    name: "phoneNumber",
                    required: true,
                    size: "large",
                    type: "Input"
                }
            ]}
        />
        <Row
            gutter={[8, 80]}
            items={[
                {
                    block: true,
                    htmlType:"submit",
                    shape:"round",
                    size: "large",
                    style: {
                        background: "linear-gradient(97deg, rgba(67,165,246,1) 0%, rgba(83,191,253,1) 100%)",
                        color: "#FFF"
                    },
                    text: "Continue",
                    type: "Button"
                }
            ]}
        />
    </Form>
);

export { BasicQuestionsView };
