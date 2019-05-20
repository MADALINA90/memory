Array.prototype.randomize = function() {
  var i = this.length, j, tmp;
  while(--i) {
    j = Math.floor(Math.random() * (i - 1));
    tmp = this[i];
    this[i] = this[j];
    this[j] = tmp;
  }
}
var animals = [
  'turtle',
  'snail',
  'corgi',
  'parrot',
  'rabbit',
  'bear',
  'panda',
  'fish',
  'shark',
  'pig',
  'crab',
  'rhinoceros'
];
var images = [];
var i;
for(i = 0; i < 12; i++) {
  var url = 'https://png.icons8.com/' + animals[i] + '/color/96';
  images.push(url);
  images.push(url);
}
images.randomize();
var html = '<ul>';
for(i = 0; i < 24; i++) {
  html += '<li><img src="' + images[i] + '"/></li>';
}
html += '</ul>';
document.getElementById('board').innerHTML = html;

$('#board img').hide();
var visible = 0;
var clicked = 0;
var clickedImage = null;
var secondImage = null;

$('li').click(function() {
  if(clicked == 2) {
    return;
  }
  $(this).children('img').show();
  if(clicked == 0) {
  clicked = 1;
  clickedImage = this;
} else {
  clicked = 0;
  if($(this).children('img').attr('src') == $(clickedImage).children('img').attr('src')) {
    visible += 2;
    clicked = 0;
  } else{
    secondImage = this;
    clicked = 2;
    setTimeout(hideImages, 1000);
  }
}
});

function hideImages() {
  $(clickedImage).children('img').hide();
  $(secondImage).children('img').hide();
  clicked = 0;
}
