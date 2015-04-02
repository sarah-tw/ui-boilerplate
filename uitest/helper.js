'use strict';
before(function(){
    require('webdrivercss').init(browser, {
        screenshotRoot: 'ui/my-shots',
        failedComparisonsRoot: 'ui/diffs',
        misMatchTolerance: 0.05,
        screenWidth: [1400]
    });
});
