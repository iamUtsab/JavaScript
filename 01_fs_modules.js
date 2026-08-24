const fs = require('fs');

// fs.writeFile("hey.txt", "heloo kaise ho !!", function(err){    // file created and the data to be stored 

//     if(err)
//         console.log("error");
//     else
//         console.log("done"); 
// })




// appends into the existing the file
// fs.appendFile("hey.txt", "I am good", function(err) {    

//     if(err)
//         console.log("error");
//     else
//         console.log("done"); 
// })






// renaming a file
// fs.rename("hey.txt", "hello.txt", function(err) {

//     if(err) console.log("error");
//     else console.log("done");
// }) 




// copy the file content to another file  
// fs.copyFile("hello.txt", "./copy/c.txt", function(err) {

//     if(err) console.error("error");
//     else console.log("done");     

// })





// unlink a file that is deleting a file
fs.unlink("hey.txt", function(err) {
    if(err) console.error("error");
    else console.log("removed");
})












// rm -> used to del a folder
// fs.rm("./copy", {recursive: true}, function(err) {
//     if(err) console.error("error");
//     else console.log("removed");
// })       






// read a file
// fs.readFile("hey.txt", "utf8", function(err, data) {  // utf is used to return the content as string
//     if(err) throw err;
//     console.log(data);
// })                                                // if utf is not given node returns it as a buffer
