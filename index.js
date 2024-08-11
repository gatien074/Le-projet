function typeEffect(element, need) {
  const text = element.innerHTML;
  element.innerHTML = "";
  
  var i = 0;
  var timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, need);
}


// application
var need = 90;
var h1 = document.querySelector('h1');
var p = document.querySelector('p');
var delay = h1.innerHTML.length * need + need;

// type affect to header
 typeEffect(h1, need);


// type affect to body
setTimeout(function(){
  p.style.display = "inline-block";
  typeEffect(p, need);
}, delay);