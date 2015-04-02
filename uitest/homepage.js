'use strict';

var assert = require('assert');

describe('Property details page test', function () {

  it('Property details page should look the same', function (done) {
    browser
      .url("http://127.0.0.1:8080")  //In default setup, you can reach your host through 10.0.2.2 from VM
      .webdrivercss('homepage', [
        {
          name: 'main',
          elem: '.time'

        }
      ], function (err, res) {
        assert.ifError(err);
        assert.ok(res.main[0].isWithinMisMatchTolerance);
      })
      .call(done);
  });

});
