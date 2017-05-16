/*
* author: Shivam kumar singh
*/

//A simple program to explain get method in javascript
let userData = {
    'username': 'shivam.singh'
};

$.ajax({
    type: 'POST',
    url: 'test.php',
    headers: {'Content-Type' : 'application/json'},
    data: userData,
    dataType: 'JSON',
    success: (response) => {
        console.log(response);
    }
});
