const fs = require('fs');
// create a file
// fs.writeFile('example.txt','this is an example', (err) => {
//     if(err)
//         console.log(err);
//     else {
//          console.log('File successfully created');
//          fs.readFile('example.txt', 'utf8', (err, file) => {
//              if(err)
//                 console.log(err)
//             else 
//                 console.log(file)
//          })
//     }   
// })

// fs.rename('example.txt', 'example2.txt', (err) => {
//     if(err)
//         console.log(err);
//     else
//         console.log('successfule file renamed')
// })

// fs.appendFile('example2.txt', 'Some data being appended', (err) => {
//     if (err)
//         console.log(err);
//     else
//         console.log('successfule file appended')  
// })

fs.unlink('example2.txt', (err) => {
    if(err)
        console.log(err);
    else 
        console.log('successfully deleted the file')
})
