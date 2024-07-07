document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('data-form');
    const input = document.getElementById('data-input');
    const dataList = document.getElementById('data-list');
    const fetchApiButton = document.getElementById('fetch-api-button');
    const apiDataList = document.getElementById('api-data-list');

    let localData = JSON.parse(localStorage.getItem('localData')) || [];

    function renderData() {
        dataList.innerHTML = '';
        localData.forEach((data, index) => {
            const li = document.createElement('li');
            li.textContent = data;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.addEventListener('click', () => {
                localData.splice(index, 1);
                localStorage.setItem('localData', JSON.stringify(localData));
                renderData();
            });
            li.appendChild(deleteButton);
            dataList.appendChild(li);
        });
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newData = input.value.trim();
        if (newData) {
            localData.push(newData);
            localStorage.setItem('localData', JSON.stringify(localData));
            input.value = '';
            renderData();
        }
    });

    fetchApiButton.addEventListener('click', async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const externalData = await response.json();
            apiDataList.innerHTML = '';
            externalData.forEach(data => {
                const li = document.createElement('li');
                li.textContent = `${data.title}: ${data.body}`;
                apiDataList.appendChild(li);
            });
        } catch (error) {
            console.error('Error fetching external data:', error);
        }
    });

    renderData();
});