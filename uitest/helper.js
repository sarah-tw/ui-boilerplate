'use strict';
before(function(){
    require('webdrivercss').init(browser, {
        screenshotRoot: 'uitest/my-shots',
        failedComparisonsRoot: 'uitest/diffs',
        misMatchTolerance: 0,
        screenWidth: [1400]
    });
});
