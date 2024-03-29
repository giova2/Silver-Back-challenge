/** The idea of this algorithm is to seek in the tree recursively 
 * until finding that File which is parent of both filePathA and filePathB at the same time
 * to achieve this we execute findParent again on each child from the root until eventually we find the common parent
 * 
 * @param {File} filePathRoot a root filePath from which look for recursively
 * @param {File} filePathA a subPath contained at some level below the filePathRoot 
 * @param {File} filePathB a subPath contained at some level below the filePathRoot
 * @returns {File | null} return File if the parent was found, otherwise returns null
 */
function findParent(filePathRoot, filePathA, filePathB) {
  
  let flagA = false
  let flagB = false

  const len = filePathRoot.children.length
  const children = filePathRoot.children
  
  for(let i = 0; i < len; i++){
    if(children[i].name === filePathA.name) {
      flagA = true
    }
    if(children[i].name === filePathB.name) {
      flagB = true
    }
  }
  
  if(flagA && flagB){
    return filePathRoot
  }
  
  for(let i = 0; i < len; i++){
    const result = findParent(filePathRoot.children[i], filePathA, filePathB)
    if(!!result){
      return result
    }
  }
  return null
}

class File {
	constructor(name) {
    this.children = [];
    this.name = name;
  }

  addChild(file) {
    this.children.push(file)
  }
}

module.exports = {File, findParent}