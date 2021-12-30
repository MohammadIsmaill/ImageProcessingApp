const {dialog} = require('electron');
const path = require('path');
const fs = require('fs');

function saveImageFile(fileName){
	const options = {
		defaultPath: 'C:/Users/finti/Documents/' + fileName,
		buttonLabel:'Save',
		filters:[
			{
				name:'Files',
				extensions:['jpg','png','jpeg']
			}
		],
		properties:[]
	}
	dialog.showSaveDialog(null,options).then(file=>{
		// console.log(file.canceled);
		if(!file.canceled)
		{
			fs.readFile(`./${fileName}`,(err,data)=>{
				if(err) throw err;
				fs.writeFile(file.filePath.toString(),data,(err)=>{
					if(err) throw err;
					// console.log("It's saved");
				})
			})
		}
	})
}

module.exports = {saveImageFile};
