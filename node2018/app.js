const fs = require('fs');
// fs.mkdir('tutorial', (err) => {
//     if (err) 
//         console.log(err)
//     else {
//         fs.writeFile('./tutorial/example.txt', '123', (err) => {
//             if(err)
//                 console.log(err);
//             else 
//                 console.log('successfully created a file');
//         })
//     }
// })

fs.unlink('./tutorial/example.txt', (err) => {
    if(err) {
        console.log(err);
    } else 
        console.log('deleted file');
})
fs.rmdir('tutorial', (err) => {
    if(err) {
        console.log(err);
    } else 
        console.log('deleted folder');
})