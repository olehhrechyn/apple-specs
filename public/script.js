document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('api-container');
    const CATALOG_URL = 'api_catalog.json';

    try {
        const response = await fetch(CATALOG_URL);
        if (!response.ok) {
            throw new Error(`Failed to load API catalog: ${response.status}`);
        }

        const data = await response.json();
        renderCatalog(data, container);

    } catch (error) {
        console.error('Error loading catalog:', error);
        container.innerHTML = `
            <div class="error">
                <h3>Oops! Something went wrong.</h3>
                <p>Unable to load the API directory. Please try again later.</p>
            </div>
        `;
    }
});

function renderCatalog(items, container) {
    if (items.length === 0) {
        container.innerHTML = '<div class="loading">No APIs found in catalog.</div>';
        return;
    }

    container.innerHTML = items.map(item => `
        <a href="${item.url}" target="_blank" class="api-card">
            <h2>
                ${escapeHtml(item.name)}
                <span class="method">${item.method || 'GET'}</span>
            </h2>
            <p>${escapeHtml(item.description)}</p>
            <div class="url">${escapeHtml(item.url)}</div>
        </a>
    `).join('');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.innerText = text;
    return div.innerHTML;
}
