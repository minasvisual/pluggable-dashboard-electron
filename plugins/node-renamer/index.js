let fs = require("fs")
// index.js
export function init (registerExtensions) {
  // Mock function for adding a menu item
  const yourCustomExtension = (varFromExtensionPoint) => {
     // your extension code here.
     // varFromExtensionPoint is provided as a parameter when the extension point is executed
     console.log("menu chamado", varFromExtensionPoint)
  }

 // Register to purchase_menu extension point
 registerExtensions('extend-menu', 'Renamer', (params) => {
	 console.log('renamer', params) 
	 
	 return { text: "Renamer", href: "/plugins/node-renamer/index.html" }
 })
 registerExtensions( 'Renamer', 'test-plugin', yourCustomExtension)
  
}

function minhaFuncaoNode(params){

   fs.readdir( __dirname, (err, files) => {
      if (err)
         console.log(err);
      else {
         console.log("\nCurrent directory filenames:");
         files.forEach(file => {
            document.getElementById('lista').append( file + '<br/>')
         })
      } 
      
   })
}