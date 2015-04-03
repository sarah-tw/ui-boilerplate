'use strict';
before(function(){
    require('webdrivercss').init(browser, {
        screenshotRoot: 'uitest/my-shots',
        failedComparisonsRoot: 'uitest/diffs',
        misMatchTolerance: 0.05,
        screenWidth: [1400]
    });
});
