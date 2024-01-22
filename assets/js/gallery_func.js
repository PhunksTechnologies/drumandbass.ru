function enlarge (element){
    // element.style.maxHeight = '20em';
    // element.style.transform = 'scale(4.1)';
    element.style.transform = 'scale(3.6) translate(0, -30%)';
    element.style.zIndex = 1000;
}

function shrink (element){
    // element.style.maxHeight = '10em';
    // element.style.transform = 'scale(1)';
    element.style.transform = 'scale(1) translate(0, 0)';
    element.style.zIndex = 1;
}