import React from 'react';

import {
    FormLayout as Form,
    FormHeader as Header,
    FormRow as Row
} from './../components';

const ExperienceQuestionsView = (props) => (
    <Form {...props}>
        <Header
            heading="User Onboarding"
            subHeading="Part 2/3 - Experience Questions"
        />
        <Row
            gutter={[8, 24]}
            items={[
                {
                    label: "Which college did you go to?",
                    name: "college",
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
                    label: "What was the last company you worked at?",
                    name: "lastCompany",
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
                    label: "How many years of experience do you have?",
                    name: "numYearsExperience",
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
                    block: true,
                    htmlType: "submit",
                    size: "large",
                    shape: "round",
                    style: {
                        background: "linear-gradient(97deg, rgba(67,165,246,1) 0%, rgba(83,191,253,1) 100%)",
                        color: "#FFF"
                    },
                    text: "Continue",
                    type: "Button"
                }
            ]}
        />
    </Form >
);

export { ExperienceQuestionsView };