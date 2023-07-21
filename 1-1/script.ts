const msg = 'Hello! This is TypeScript';
let element: HTMLElement | null = document.querySelector('#msg');

function load() {
    if (element != null) {
        element.textContent = msg;
    }
}
