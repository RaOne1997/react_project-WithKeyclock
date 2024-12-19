export function loadNewsContents(container) {
    container.innerHTML = `
      <h4>Latest News</h4>
      <ul id="news-list" style="max-height: 600px ; overflow-y: auto;"></ul>
    `;
  
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        const newsList = document.getElementById('news-list');
        data.forEach(newsItem => {
          const li = document.createElement('li');
          li.innerText = newsItem.title;
          newsList.appendChild(li);
        });
      })
      .catch(error => {
        container.innerHTML = '<p>Failed to load news.</p>';
      });
}