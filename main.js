

getData("https://jsonplaceholder.typicode.com/posts").then((r) => {
    console.log(r);
});

async function getData(url) {
    return $.ajax({
        url: url,
        async: true,
        success: (res) => {
            
        },
        error: (err) => {

        }
    });
}