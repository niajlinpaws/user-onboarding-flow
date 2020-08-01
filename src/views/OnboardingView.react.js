import React from 'react';
import { Col, Layout, Row } from 'antd';

import {
    BasicQuestionsView,
    ExperienceQuestionsView,
    NotFoundView,
    ShortQuestionView
} from './index';

const { Header, Content } = Layout;

const OnboardingView = ({
    handleSubmit,
    path
}) => {

    const form = {
        "/1": (
            <BasicQuestionsView
                onSubmit={handleSubmit({
                    name: "basicQuestionsResponse",
                    elements:[
                        "firstName",
                        "lastName",
                        "email",
                        "phoneNumber"
                    ]
                })}
            />
        ),
        "/2": (
            <ExperienceQuestionsView
                onSubmit={handleSubmit({
                    name: "experienceQuestionsResponse",
                    elements:[
                        "college",
                        "lastCompany",
                        "numYearsExperience"
                    ]
                })}
            />
        ),
        "/3": (
            <ShortQuestionView
                onSubmit={handleSubmit({
                    name: "shortResponseQuestion",
                    elements:[
                        "response"
                    ]
                })}
            />
        )
    };

    return path ? (
        <Layout style={{ minHeight: "100vh" }}>
            <Header style={{
                color: "#000",
                fontWeight: "bold",
                fontSize: "1rem",
                boxShadow: "0px 0px 10px 0px rgba(128,128,128,0.5)"
            }}>
                <span style={{ color: "#3E9EE8"}}>Sample</span>Screen
            </Header>
            <Content style={{ margin: '60px 0', padding: 24 }}>
                <Row type="flex" justify="center">
                    <Col
                        xs={22}
                        sm={15}
                        md={11}
                        lg={9}
                        xl={7}
                        xxl={5}
                    >
                        {form[path]}
                    </Col>
                </Row>
            </Content>
        </Layout>
    ) : <NotFoundView />;
};

export { OnboardingView };