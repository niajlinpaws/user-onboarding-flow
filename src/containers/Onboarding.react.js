import React, {
    useCallback,
    useEffect,
    useMemo,
    useState
} from 'react';

import { OnboardingView } from '../views';
import {
    submitBasicQuestionsResponse,
    submitExperienceQuestionsResponse,
    submitShortResponseQuestion
} from '../apis';

const Onboarding = ({ location: { pathname }, history }) => {

    const initialState = {
        basicQuestionsResponse: {},
        experienceQuestionsResponse: {},
        shortResponseQuestion: {},
        userId: null
    };

    const [state, setState] = useState(initialState);

    useEffect(() => setState(state => ({
        ...state,
        userId: `${Math.random()}`.slice(2, 10)
    })), []);


    const {
        basicQuestionsResponse: {
            submissionStatus: stepOneStatus
        },
        experienceQuestionsResponse: {
            submissionStatus: stepTwoStatus
        },
        userId
    } = state;

    const path = pathname.split("/onboarding")[1] || "/";

    useEffect(() => {
        const route = {
            "/": () => {
                if (!stepOneStatus)
                    history.push("/onboarding/1");
                else if (!stepTwoStatus)
                    history.push("/onboarding/2");
                else
                    history.push("/onboarding/3");
            },
            "/1": () => true,
            "/2": () => {
                if (!stepOneStatus)
                    history.push("/onboarding/1");
            },
            "/3": () => {
                if (!stepOneStatus)
                    history.push("/onboarding/1");
                else if (!stepTwoStatus)
                    history.push("/onboarding/2");
            }
        };

        route[path] && route[path]();
    }, [history, path, stepOneStatus, stepTwoStatus]);

    const handleSubmit = useCallback(({
        name,
        elements
    }) => async (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }

        const submitResponse = {
            "basicQuestionsResponse": submitBasicQuestionsResponse,
            "experienceQuestionsResponse": submitExperienceQuestionsResponse,
            "shortResponseQuestion": submitShortResponseQuestion
        };

        const formValues = elements.map(element => e.target.elements[element].value);

        const {
            savedResponse,
            submissionStatus
        } = await submitResponse[name](userId, ...formValues);

        setState(state => ({
            ...state,
            [name]: {
                ...state[name],
                submissionStatus: submissionStatus === "success" ? true : false,
                savedResponse
            }
        }));

        if (submissionStatus === "success") {
            history.push("/onboarding"+path)
        } else {

        }
    }, [history, path, userId]);

    return useMemo(() => (
        <OnboardingView
            handleSubmit={handleSubmit}
            path={path}
        />
    ), [handleSubmit, path]);
}

export { Onboarding };