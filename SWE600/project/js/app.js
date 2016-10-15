/**
 * Created by vigneshravichandran on 6/23/16.
 */

(function () {
    var app = angular.module('myApp', ['service']);
    app.controller('FeedbackController', function(feedbackService){
        this.feedbacks = feedbackService.feedback;
        this.date = Date.now();
    });

    app.controller('NewFeedbackController', function(feedbackService){
        this.newFeedback = {};
        this.submit = function(){
            feedbackService.enterFeedback(this.newFeedback);
            this.newFeedback = {};
        };
    });
})();