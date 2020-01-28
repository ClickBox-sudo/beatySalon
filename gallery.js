var hairstyleGallery = [
    'images/hair/1.jpg',
    'images/hair/2.jpg',
    'images/hair/3.jpg',
    'images/hair/4.jpg',
    'images/hair/5.jpg',
    'images/hair/6.jpg',
    'images/hair/7.jpg'
];

var facialGallery = [
    'images/facial/1.jpg',
    'images/facial/2.jpeg',
    'images/facial/3.jpeg',
];

var makeupGallery = [
    'images/makeup/1.jpeg',
    'images/makeup/2.jpeg',
    'images/makeup/3.jpeg',
    'images/makeup/4.jpeg'
];

var waxingGallery = [
    'images/waxing/1.jpg',
    'images/waxing/2.jpg',
    'images/waxing/3.jpg',
];

var massageGallery = [
    'images/massage/1.jpeg',
    'images/massage/2.jpeg',
    'images/massage/3.jpg',
];



var galleryArray = hairstyleGallery.concat(makeupGallery, facialGallery, waxingGallery, massageGallery)

function gallery() {
    var overlay = $('<div>').attr('class', 'prelayImage');
    for (var i = 0; i < galleryArray.length; i++) {
        var imageHolder = $('<div>').attr('class', 'imageHolder');
        imageHolder.append($('<img>').attr('src', galleryArray[i]));
        $(overlay).append(imageHolder);
    };

    $('#gallery').append(overlay);
}


