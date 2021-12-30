const {spawn} = require('child_process');

 function callPythonFunction(pythonFileName,imgPath=''){
  console.log(imgPath);
  const childPython = spawn('python',[`./ImageProcessing/${pythonFileName}`, imgPath]);
  childPython.stdout.on('data',(data)=>{
    console.log(`stdout: ${data}`);
  })
  childPython.stderr.on('data',(data)=>{
    console.error(`stderr: ${data}`);
  })
  childPython.on('class',(code)=>{
    console.log(`child process exited with code ${code}`);
  })
  // return 'picture.jpg'
}

module.exports = {callPythonFunction};
