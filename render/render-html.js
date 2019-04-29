const htmlFormatter = require('./html-formatter')

exports.render = function(userId, response) {
    // todo: Fetch user from MongoDB
    const user = null;
    const flattenedAnswers = flattenAnswers(user.answers);
    const formattedHtml = htmlFormatter.getFormattedContent(
        htmlFormatter.getRawContents(),
        flattenAnswers
    );

    response.status(200)
        .set('Content-Type', 'text/html')
        .send(formattedHtml);
}

function flattenAnswers(answerArray) {
    return answerArray.map(function (answer) {
        const placeholder = answer.placeholder;
        const value = answer.value;
        return { placeholder : value }
    });
}