var html = '';

function getRandomRgb() {
return Math.floor(Math.random() * 256 );
}

function randomColor(params) {
    return 'rgb(' + getRandomRgb() + ',' + getRandomRgb() + ',' + getRandomRgb() + ')';        
}

function print(message) {
    document.write(message);
}

for (let i = 0; i < 10; i++) {
    color = randomColor();
    document.write(color);
    html += '<div style="background-color: ' + color +' "></div>';    
}

print(html);