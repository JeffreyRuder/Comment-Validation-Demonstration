var analyze = require('Sentimental').analyze,
    positivity = require('Sentimental').positivity,
    negativity = require('Sentimental').negativity;

exports.doesNotUseOffensiveLanguage = function(commentText) {
  return negativity(commentText).score < 3;
}

exports.usesConstructiveLanguage = function(commentText) {
  return analyze(commentText).comparative > -0.5;
}

exports.isCorrectLength = function(commentText) {
  return (commentText.trim().length >= 100 && commentText.trim().length <= 300);
}
