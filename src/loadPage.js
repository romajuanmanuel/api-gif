//loadPage.js
import { api } from './api.js';
export function loadPage() {
    const app = document.getElementById('app');

    const header = document.createElement('header');
    header.innerHTML = `<h1>Gif App</h1>`;

    const main = document.createElement('main');
    main.id = 'main';

    const footer = document.createElement('footer');
    footer.innerHTML = `<small>&copy; 2025 Mi Sitio</small>`;

    const inputBar = document.createElement('input');
    inputBar.id = 'inputBar';
    inputBar.placeholder = 'cat';

    const searchBtn = document.createElement('button');
    searchBtn.id = 'searchBtn';
    searchBtn.textContent = "BUSCAR";

    const resultContainer = document.createElement('div');
    resultContainer.id = 'resultContainer';

    searchBtn.addEventListener("click", () => {
        const valor = inputBar.value;
        resultContainer.innerHTML = '';
        resultContainer.appendChild(api(valor));
    });

    resultContainer.appendChild(api("cat"));

    main.append(inputBar, searchBtn, resultContainer);
    app.append(header, main, footer);

}
