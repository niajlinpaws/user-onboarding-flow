import React from 'react';

import {
    FormLayout as Form,
    FormHeader as Header,
    FormRow as Row
} from './../components';

const ShortQuestionView = (props) => (
    <Form {...props}>
        <Header
            heading="User Onboarding"
            subHeading="Part 3/3 - Short Response Question"
        />
        <Row
            gutter={[8, 24]}
            items={[
                {
                    label: "Why are you interested in software engineering?",
                    name: "response",
                    required: true,
                    rows: 8,
                    type: "TextArea"
                }
            ]}
        />
        <br /><br /><br />
        <Row
            gutter={[8, 96]}
            items={[
                {
                    block: true,
                    htmlType: "submit",
                    shape: "round",
                    size: "large",
                    style: {
                        background: "linear-gradient(97deg, rgba(67,165,246,1) 0%, rgba(83,191,253,1) 100%)",
                        color: "#FFF"
                    },
                    text: "Finish",
                    type: "Button"
                }
            ]}
        />
    </Form >
);

export { ShortQuestionView };