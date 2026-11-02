// create an array that holds created post

const myArray = ["A lovely weekend at Karura Forest", "A nice experience at the Upper Room Service", "A great adventure at Hells Gate National Park"];

// function => create variable that stores a function which adds and returns post
//          => creates variable that stores a function that prints success message and returns postText


function createAPost (createAndReturnMyPost, mySuccessMessage){
    const myPostText = createAndReturnMyPost();
    const successMessage = mySuccessMessage(myPostText);
    console.log(successMessage);
}
// invoke the function and add the callback functions
createAPost(function () {
    const myPostText = prompt("Enter your Post");
    myArray.push(myPostText);
    return myPostText;

}, (myPostText) => `You have successfully created Your Post${myPostText}`); // this line adds an implicit return there is no need of using the return keyword it only required when you have the curly brackets
