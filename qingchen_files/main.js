var paths = document.querySelectorAll('.path');

paths.forEach(function(path) {
    var length = path.getTotalLength();
    path.style.transition = path.style.webkitTransition =
        'none';
    
    path.style.strokeDasharray = length + " " + length;
    path.style.strokeDashoffset = length;
    
    path.getBoundingClientRect();
    path.style.transition = path.style.webkitTransition =
        "stroke-dashoffset 2s ease-in-out";
    path.style.strokeDashoffset = '0';
});
