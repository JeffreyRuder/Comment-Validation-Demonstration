var expect = require('chai').expect;
var comment = require('./../js/comment.js');

describe('doesNotUseOffensiveLanguage', function() {
  it("returns true if the comment is positive", function() {
    var text = "This is awesome";
    expect(comment.doesNotUseOffensiveLanguage(text)).to.be.true;
  });

  it("returns false if the comment uses strongly negative words", function() {
    var text = "This sucks big time";
    expect(comment.doesNotUseOffensiveLanguage(text)).to.be.false;
  });

  it("returns false if there are both strongly negative words and positive words", function() {
    var text = "This was outstanding and awesome, you scumbag";
    expect(comment.doesNotUseOffensiveLanguage(text)).to.be.false;
  });
});

describe('usesConstructiveLanguage', function() {
  it('returns true if the comment is balanced', function() {
    var text = "I enjoyed the composition of this work, but I felt the implementation of the lines was abrasive and lazy.";
    expect(comment.usesConstructiveLanguage(text)).to.be.true;
  });

  it('returns false if the comment is mostly negative', function() {
    var text = "This piece is boorish, boring, and awful!";
    expect(comment.usesConstructiveLanguage(text)).to.be.false;
  });
})

describe('isCorrectLength', function() {
  it("returns true if the comment is between 100 and 300 characters", function() {
    var text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.";
    expect(comment.isCorrectLength(text)).to.be.true;
  });

  it("returns false if the comment is too short", function() {
    var text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean.";
    expect(comment.isCorrectLength(text)).to.be.false;
  });

  it("returns false if the comment is too long", function() {
    var text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a";
    expect(comment.isCorrectLength(text)).to.be.false;
  });
})
