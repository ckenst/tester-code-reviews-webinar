if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    /**
     * @param {Array} arr
     * @param {*} item
     * @returns number */
    indexOf : function(arr, item) {
      return arr.indexOf(item);
    },
    /**
     * @param {Array.<number>} arr
     * @returns { number } */
    sum : function(arr) {
      var sum = 0;
      var i = arr.length;
      while(i--) {
        sum += arr[i];
      }
      return sum;
    },
    /**
     * @param {Array} arr
     * @param {*} item
     * @returns {Array} New array with everything that equals (item) removed */
    remove : function(arr, item) {
      arr = arr.concat();
      var index = arr.indexOf(item);
      while(index !== -1){
        arr.splice(index, 1);
        index = arr.indexOf(item);
      }

      return arr;
    },
    /**
     * @param {Array} arr
     * @param {*} item
     * @returns {Array} Original array with everything that equals (item) removed */
    removeWithoutCopy : function(arr, item) {
      var index = arr.indexOf(item);
      while(index !== -1){
        arr.splice(index, 1);
        index = arr.indexOf(item);
      }

      return arr;
    },
    /**
     * @param {Array} arr
     * @param {*} item
     * @returns {Array} Original array */
    append : function(arr, item) {
      arr.push(item);
      return arr;
    },
    /**
     * @param {Array} arr
     * @returns {Array} Original array */
    truncate : function(arr) {
      arr.pop();
      return arr;
    },
    /**
     * @param {Array} arr
     * @returns {Array} Original array */
    prepend : function(arr, item) {
      arr.unshift(item);
      return arr;
    },
    /**
     * @param {Array} arr
     * @returns {Array} Original array */
    curtail : function(arr) {
      arr.shift();
      return arr;
    },
    /**
     * @param {Array} arr1
     * @param {Array} arr2
     * @returns {Array} New Array */
    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },
    /**
     * @param {Array} arr
     * @param {*} item
     * @param {number} index
     * @returns {Array} Original Array */
    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },
    /**
     * @param {Array}
     * @returns {number} */
    count : function(arr, item) {
      var count = 0;
      var index = arr.indexOf(item);
      while(index !== -1){
        ++count;
        index = arr.indexOf(item, i + 1);
      }
      return count;
    },
    /**
     * @param {Array}
     * @returns New array */
    duplicates : function(arr) {
      var arrCopy = arr.concat();
      var searchLength = arrCopy.length;
      var duplicates = [];
      for(var i = 0; i < searchLength; ++i){
        var item = arrCopy[i];
        var duplicateItemIndex = arrCopy.indexOf(item, i + 1);
        if(duplicateItemIndex >= searchLength)
          { break; }
        if(duplicateItemIndex !== -1){
          arrCopy[i] = arrCopy[searchLength - 1];
          arrCopy[duplicateItemIndex] = arrCopy[searchLength - 2];

          arrCopy[searchLength - 1] = item;
          arrCopy[searchLength - 2] = item;

          searchLength -= 2;
          --i;

          if(duplicates.indexOf(item) === -1){
            duplicates.push(item);
          }
        }
      }

      return duplicates;
    },
    /**
     * @param {Array.<number>}
     * @returns New array */
    square : function(arr) {
      return arr.map(function(value){return value * value;});
    },
    /**
     * @param {Array}
     * @param {*} target
     * @returns New array */
    findAllOccurrences : function(arr, target) {
      var occurrences = [];
      var i = arr.length;
      while(i--){
        if(arr[i] === target){
          occurrences.push(i);
        }
      }

      return occurrences;
    }
  };
});
