module.exports = class ExtractReqBodyService{
    constructor(){}

    extractTestBody = (req) => {
        const test = {
            testName: req.body.testName,
            field: req.body.field,
            testIntroduction: req.body.testIntroduction,
            creatorEmail: req.body.creatorEmail,
            passingGrade: req.body.passingGrade,
            canShowAnswers: req.body.canShowAnswers,
            certificationURL: req.body.certificationURL,
            successText: req.body.successText,
            failureText: req.body.failureText,
            lastUpdated: req.body.lastUpdated,
            questions: req.body.questions?.map((q)=>q.id)
        }
        return test
    }
    extractRespondentBody = (req) => {
        const respondent = {
            name: req.body.name,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
        };
        return respondent
    }
    extractQuestionBody = (req) => {
        const question = {
            field: req.body.field,
            isMultichoice: req.body.isMultichoice,
            questionContent: req.body.questionContent,
            extraContent: req.body.extraContent,
            answers: req.body.answers,
            isHorizontal: req.body.isHorizontal,
            tags: req.body.tags
        }
        return question;
    }
    extractAnsweredTestBody = (req) => {
        const answeredTest = {
            testId: req.body.testId,
            userId: req.body.userId,
            date: req.body.date,
            isUserPassed: req.body.isUserPassed,
            finalGrade: req.body.finalGrade
        }
        return answeredTest;
    }
    extractAnsweredQuestionBody = (req) => {
        const answeredQuestion = {
            questionId: req.body.questionId,
            answers: req.body.answers,
            isCorrect: req.body.isCorrect
        }
        return answeredQuestion;
    }
}
