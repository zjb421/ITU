/**
 * Created by vigneshravichandran on 6/23/16.
 */
(function () {
    var app = angular.module('service', []);
    
    app.factory('feedbackService', function() {
        var feedbackData = [];

        return ({
            'feedback': feedbackData,
            'enterFeedback':function(data){
                var starTempHolder = [];
                for(i=0; i < data.stars; i++){
                    starTempHolder.push(1);
                }
                data.stars = starTempHolder;
                console.log(starTempHolder)
                this.feedback.push(data);
            }
        });

    });
    
})();