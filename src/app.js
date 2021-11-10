const newsDisplay = document.querySelector('#feed')

fetch("http://localhost:8000/news")
    .then(response => response.json())
    .then(data => {
        data.forEach(article => {
            const articleItem = '<div><h3>' + article.title + '</h3><p>' + article.url + '</p></div>'
            newsDisplay.insertAdjacentHTML("beforeend", articleItem)
        })
    })
    .catch(err => console.log(err))
    