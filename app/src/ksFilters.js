  angular.module('ksDate', []).filter("ksDate", function () {
    return function (date, format, delimiter) {
      if (!date || !format || !delimiter) return null;
      var formatLowerCase=format.toLowerCase();
      var formatItems=formatLowerCase.split(delimiter);
      var dateItems=date.split(delimiter);
      var monthIndex=formatItems.indexOf("mm");
      var dayIndex=formatItems.indexOf("dd");
      var yearIndex=formatItems.indexOf("yyyy");
      var month=parseInt(dateItems[monthIndex]);
      month-=1;
      return new Date(dateItems[yearIndex],month,dateItems[dayIndex]);
    };
  });

  angular.module('ksString', {}).filter("ksFormatFundData", function() {
    return function (str, isNumber) {
      if (!str) return '--';

      if (isNumber === true) return str.toLocaleString();

      return str;
    };
  });