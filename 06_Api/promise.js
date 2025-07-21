const { response } = require("express");

const promiseOne = new Promise(function (resolve,reject) {
    
    setTimeout(function () {
        console.log('Async Task Completed !');
            resolve();
    }, 1000)

})

promiseOne.then(function () {
    console.log('Promise Consumed !');
})

new Promise(function (resolve,reject) {
    setTimeout(function () {
        console.log("Async Task 2");
        resolve()
    },1000)
}).then(function () {
    console.log("Async Task 2 Completed!");
    
})


//Note :-- If task is immediaty resolved in any promise , even then .then() goes out normal flow . So , asynchronous func()


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            userName: "Sourabh",
            id:2211981401
        })
    },1000)
}) 

promiseThree.then(function (user) {
    console.log(user);
    
})

const promiseFour = new Promise(function (resolve,reject) {
    setTimeout(function () {
        const error = false;
        if (!error) {
            resolve({
                userName: "Sourabh",
                password : "Sourabh@123",
            });
        }
        else {
            reject("There is Some Error Occuring in Completion of Promise!");
        }
    }, 1000)
})
    .then(function (user) {
    console.log(user);
    return user.userName;
})
    .then((username)=>{ // If .then() return a value , you can catch it in the next .then() function.
    console.log(username);
    
    })
    .catch((str) => {
    console.log(str);
    
    })
    .finally(() => {
    console.log("PromiseFour has been Completed!");
    
    })


const promiseFive = new Promise(function (resolve,reject) {
        setTimeout(function () {
          const error = true;
          if (!error) {
            resolve({
              userName: "Javascript",
              password: "@123",
            });
          } else {
            reject("There is Some Error Occuring in JS!");
          }
        }, 1000);
})
    

// Handling promise using Async and Awiat ......

async function consumePromiseFive() {
   try {
     const response = await promiseFive;
     console.log(response);
    
   } catch (error) {
    console.log(error);
    
   }
}

consumePromiseFive()

async function getAllUsers() {
    try {
        const response =  await fetch("https://api.github.com/users/Adityaoff"); // Fetch needs Await here because it needs some time load as
       // console.log(response);                                                // as it is type Network call , otherwise response will be blank.
       
        const data = await response.json();  // As response needs time for uploading , So we used Await there , so that data does'nt be blank.
        console.log(data);
        
    } catch (error) {
        console.log("error:",error);
        
    }
}
// getAllUsers();     //comment out this so that you can use Above Await,Async Function().


fetch("https://api.github.com/users/Adityaoff")    // fetch type is itself a promise
    .then((response) => {
        return response.json();     // response , error these all variables.
    })
    .then((data) => {
        console.log(data);
        
    })
.catch((error)=> console.log(error))