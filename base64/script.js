// Source: https://stackoverflow.com/a/30106551
/**
 * Base64 encoder (UTF-8)
 * @param {str} str Input string that needed to be encoded
 * @return {str} Output string
 */
function b64EncodeUnicode(str) {
  // first we use encodeURIComponent to get percent-encoded UTF-8,
  // then we convert the percent encodings into raw bytes which
  // can be fed into btoa.
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
      (match, p1) => String.fromCharCode('0x' + p1)));
}
/**
 * Base64 decoder (UTF-8)
 * @param {str} str Input string that needed to be decoded
 * @return {str} Output string
 */
function b64DecodeUnicode(str) {
  // Going backwards: from bytestream, to percent-encoding, to original string.
  return decodeURIComponent(atob(str).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

document.addEventListener('DOMContentLoaded', () => {
  const encoded = document.querySelector('#encoded');
  const decoded = document.querySelector('#decoded');
  encoded.addEventListener('input', () => {
    try {
      decoded.value = b64DecodeUnicode(encoded.value);
    } catch (error) {
      // console.log(error);
    };
  });
  decoded.addEventListener('input', () => {
    try {
      encoded.value = b64EncodeUnicode(decoded.value);
    } catch (error) {
      // console.log(error);
    }
  });
});
