
// You should implement your task here.

module.exports = function towelSort (matrix) {

  return matrix?matrix.reduce( (res,item,index) => index%2===0?res.concat(item):res.concat(item.reverse()),[]):[];
}
