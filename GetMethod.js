/*
 * author: Shivam kumar singh
 */

 //A simple program to explain get method in javascript
 let http = new XMLHttpRequest();
 http.onreadystatechange = () => {
    if (http.readyState === 4 && http.status === 200) {
        console.log(JSON.parse(http.response));
    }
 };
 http.open('GET', 'tweets.json', true);
 http.send();
