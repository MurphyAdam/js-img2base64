"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function isValidImage(image, maxSizeInMegabytes, validExtenions) {
  var extArray = ['png', 'jpeg', 'jpg', 'gif'];
  if (validExtenions && validExtenions.length) extArray = validExtenions;
  return new Promise(function (resolve, reject) {
    if (extArray.indexOf(image.type.split('/')[1]) !== -1) {
      var maxSizeInBytes = maxSizeInMegabytes * 1024 * 1024;
      if (image.size <= maxSizeInBytes) resolve(true);
      else reject("Image ".concat(image.name, " is greater than ").concat(maxSizeInMegabytes, " megabytes."));
    } 
    else reject("Image ".concat(image.name, " is not a valid image format. (valid image formats are: ").concat(extArray.join(', '), ")"));
  });
}

function getBase64Promise(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      return resolve(reader.result);
    };
    reader.onerror = function (error) {
      return reject(error);
    };
  });
}

function imageToBase64(image) {
  var maxSizeInMegabytes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  var validExtenions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return new Promise(function (resolve, reject) {
    isValidImage(image, maxSizeInMegabytes, validExtenions).then(function () {
      return getBase64Promise(image).then(function (result) {
        return resolve(result);
      }).catch(function (error) {
        return reject(error);
      });
    }).catch(function (error) {
      return reject(error);
    });
  });
}

var _default = imageToBase64;
exports.default = _default;