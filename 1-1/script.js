var msg = 'Hello! This is TypeScript';
var element = document.querySelector('#msg');
function load() {
    if (element != null) {
        element.textContent = msg;
    }
}
