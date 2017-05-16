/*
* author: Shivam kumar singh
*/

//A simple program to explain post method in javascript
//Create an http request
let http = new XMLHttpRequest();
http.open('POST', 'test.php', true);
http.setRequestHeader('Content-Type', 'application/json');
http.onreadystatechange = () => {
    if (http.readyState === 4 && http.status === 200) {
        console.log(http.response);
    }
}
http.send(JSON.stringify({
    'username': 'shivam.singh'
}));
