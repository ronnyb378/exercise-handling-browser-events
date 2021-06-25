const button = document.getElementById('1');
button.addEventListener('click', function(event) {
    console.log("clicked");
    console.log(event)
});


const btn = document.getElementById('2');
btn.addEventListener('click', function(event) {
    alert('MouseX: ${event.screenX} MouseY: ${event.screenY}');
    event.preventDefault();
});