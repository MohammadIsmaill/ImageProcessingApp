const {ipcRenderer,dialog} = require('electron');

function updateHistogram(){
  setTimeout(()=>{
    update()
  },500)
}
let globalPath;

document.querySelector('#resetBtn').addEventListener('click',()=>{
  document.querySelector('img').src = globalPath;
  document.querySelector('img').style.opacity = 1;
  document.querySelector('.spinner').style.display = 'none';
  updateHistogram();
})


//upload image
ipcRenderer.on('folder:path',(event,path)=>{
  document.querySelector('img').src = path
  globalPath = path;
  updateHistogram();
  // update();
  // update();

  console.log('hello world');
  // alert(document.querySelector('img').src);
})

//upload new image
ipcRenderer.on('image:result',(event,path)=>{
  let timeStamp = new Date().getTime();
  document.querySelector('img').src = path + `?=${timeStamp}`;
  document.querySelector('img').style.opacity = 1;

  document.querySelector('.spinner').style.display = 'none';
  // update();
  updateHistogram();
})




document.querySelector('#edgeDetectionBtn').addEventListener('click',()=>{
  const edgeDetectionTechnique = document.querySelector('#edgeDetectionOptions').value;
  const imagePath = document.querySelector('img').src;
  // console.log(imagePath);
  document.querySelector('.spinner').style.display = 'block';
  document.querySelector('img').style.opacity = 0.5;

  ipcRenderer.send('image:technique',edgeDetectionTechnique,imagePath.replace('file:///',''));
})
document.querySelector('#segmentationBtn').addEventListener('click',()=>{
  const edgeDetectionTechnique = document.querySelector('#segmentationOptions').value;
  const imagePath = document.querySelector('img').src;
  document.querySelector('.spinner').style.display = 'block';
  document.querySelector('img').style.opacity = 0.5;
  ipcRenderer.send('image:technique',edgeDetectionTechnique,imagePath.replace('file:///',''));
})

  document.querySelector('#deepLearningBtn').addEventListener('click',()=>{
    const edgeDetectionTechnique = document.querySelector('#deepLearningOptions').value;
    const imagePath = document.querySelector('img').src;
    document.querySelector('.spinner').style.display = 'block';
    document.querySelector('img').style.opacity = 0.5;

    ipcRenderer.send('image:technique',edgeDetectionTechnique,imagePath.replace('file:///',''));
  })
ipcRenderer.on('image:reset',(event)=>{
  document.querySelector('img').src = globalPath;
  document.querySelector('img').style.opacity = 1;
  document.querySelector('.spinner').style.display = 'none';
  // update();
  updateHistogram();
})
