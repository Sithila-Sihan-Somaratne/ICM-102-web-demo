function savePost(){
    let titolo = document.getElementById('title').value;
    let corpo = document.getElementById('body').value;
    let utenteiD= parseInt(document.getElementById('userId').value);
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: titolo,
            body: corpo,
            userId: utenteiD,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
    .then((response) => response.json())
    .then((json) => console.log(json));
}