var CryptoJS = require("rollups/aes.js");
require("components/mode-ecb.js")

function openMH(bookId, linkId, path) {
  window.location = 'http://mhaa.xyz/play?linkId=' + linkId + '&bookId=' + bookId + '&path=' + path + '&key=' + Encrypt(linkId);
}

function Encrypt(linkId) {
  var SECRET_IV = CryptoJS.enc.Utf8.parse('efgacdefg');
  var SECRET_KEY = CryptoJS.enc.Utf8.parse('12cdefgabcdefg12');
  var DataHex = CryptoJS.enc.Utf8.parse(linkId);
  var Reulst = CryptoJS.AES.encrypt(DataHex, SECRET_KEY, { 'mode': CryptoJS.mode.ECB, 'padding': CryptoJS.pad.Pkcs7 });
  return Reulst.toString();
}