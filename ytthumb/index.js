var youtube_parser = () => {
    pastedURL = document.getElementById('urlinput').value;
    var parsedInput = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = pastedURL.match(parsedInput);
    if (match && match[7].length == 11) {
        pic1.src = 'https://img.youtube.com/vi/' + match[7] + '/0.jpg';
        pic2.src = 'https://img.youtube.com/vi/' + match[7] + '/1.jpg';
        pic3.src = 'https://img.youtube.com/vi/' + match[7] + '/2.jpg';
        pic4.src = 'https://img.youtube.com/vi/' + match[7] + '/3.jpg';
        pic5.src = 'https://img.youtube.com/vi/' + match[7] + '/hqdefault.jpg';
        pic6.src = 'https://img.youtube.com/vi/' + match[7] + '/mqdefault.jpg';
        pic7.src = 'https://img.youtube.com/vi/' + match[7] + '/maxresdefault.jpg';
    }
};