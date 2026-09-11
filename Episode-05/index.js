/**
 * What is async?
 * what is await?
 * How async works behind the scenes?
 * Examples of using async/await
 * Error Handling
 * Interviews
 * async await vs Promise.then/.catch
*/


/*
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!");
    }, 10000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!");
    }, 20000);
});

// await can only be used inside an async function
async function handlePromise() {  
    console.log("Hello World!!");
    // JS Engine was waiting for promise to be resolved
    const val = await p1;
    console.log("Namaste JavaScript");
    console.log(val);

    const val2 = await p2;
    console.log("Namaste JavaScript 2");
    console.log(val2);
}

handlePromise();
*/

/*
function getData() {
    // JS engine will not wait for promise to be resolved
    p.then((res) => console.log(res));
    console.log("Namaste JavaScript");
}

getData();
*/

// Real World Examples

const API_URL = "https://api.github.com/users/indresh-dwivedi";

async function handlePromise() {
    try {
        const data = await fetch(API_URL);
        const jsonValue = await data.json();
        console.log(jsonValue);
    } catch (err) {
        console.log(err);
    }

}

handlePromise();
