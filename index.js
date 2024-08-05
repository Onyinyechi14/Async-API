//Task 01: Iterating with Async/Await
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        console.log(value);
        await delay(1000); // Wait for 1 second
    }
}

// Example usage:
const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values);



//Task 02: Awaiting a Call
async function fetchData() {
    // Simulate an API call with a delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: 'Fetched data' });
        }, 2000);
    });
}

async function awaitCall() {
    const data = await fetchData();
    console.log(data);
}

// Example usage:
awaitCall();




//Task 03: Handling Errors with Async/Await
async function fetchDataWithError() {
    // Simulate an API call with a delay that may fail
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5; // Randomly succeed or fail
            if (success) {
                resolve({ data: 'Fetched data' });
            } else {
                reject(new Error('Failed to fetch data'));
            }
        }, 2000);
    });
}

async function awaitCallWithErrorHandling() {
    try {
        const data = await fetchDataWithError();
        console.log(data);
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
}

// Example usage:
awaitCallWithErrorHandling();
