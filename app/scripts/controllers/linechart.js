'use strict';

angular.module('angularD3App')
  .controller('LinechartCtrl', function ($scope) {
    $scope.chartData = [
      // ['Month', 'Number'],
      ['2014-01', 200],
      ['2014-02', 435],
      ['2014-03', 200],
      ['2014-04', 200],
      ['2014-05', 267],
      ['2014-06', 200],
      ['2014-07', 200],
      ['2014-08', 67],
      ['2014-09', 200],
      ['2014-10', 34],
      ['2014-11', 200],
      ['2014-12', 870]
    ];
  });