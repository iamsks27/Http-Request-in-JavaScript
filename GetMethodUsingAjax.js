/*
 * author: Shivam kumar singh
 */

 //A simple program to explain get method in javascript using jquery ajax
$.ajax({
    type: 'GET',
    url: 'tweets.json',
    success: (data) => {
        console.log(data);
    },
    error: (jqXHR, textStatus, error) => {
        console.error(error);
    }
});
