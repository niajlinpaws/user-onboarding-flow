const submitBasicQuestionsResponse = async (
    userId,
    firstName,
    lastName,
    email,
    phoneNumber
) => {
    return new Promise((resolve, reject) => {
        resolve({
            submissionStatus: "success",
            savedResponse: {
                userId,
                firstName,
                lastName,
                email,
                phoneNumber
            }
        });
    });
};

const submitExperienceQuestionsResponse = async (
    userId,
    college,
    lastCompany,
    numYearsExperience
) => {
    return new Promise((resolve, reject) => {
        resolve({
            submissionStatus: "success",
            savedResponse: {
                userId,
                college,
                lastCompany,
                numYearsExperience
            }
        });
    });
};

const submitShortResponseQuestion = async (
    userId,
    response
) => {
    return new Promise((resolve, reject) => {
        resolve({
            submissionStatus: "success",
            savedResponse: {
                userId,
                response
            }
        });
    });
};

export {
    submitBasicQuestionsResponse,
    submitExperienceQuestionsResponse,
    submitShortResponseQuestion
};