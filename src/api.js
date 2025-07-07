// api.js
export function api(query) {
    const container = document.createElement('div');
    container.id="gifContainer"
    if (!query || query.trim() === '') {
        query = 'cat';
        alert("No has ingresado nada, te mostrare un gato");
    }
    getCats();

    return container;

    async function getCats() {
         await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=D1ytZSOv9bk0ZHwtOS4oNQb5cdrY9B7b&s=${encodeURIComponent(query)}`, { mode: 'cors' })
            .then(response => response.json())
            .then(data => {
                const imgUrl = data.data.images.original.url;

                container.innerHTML = `
                <img src="${imgUrl}" alt="GIF de Giphy" />
            `;
            })
            .catch(err => {
                container.textContent = 'Error al cargar el gif.';
            });
    }
}