'use strict'

// Private
var list = []
// Public
module.exports = {
add: function (student) {
    list.push(student)
},
edit: function (student, index) {
    list[index] = student
},
get: function (index) {
    return list[index]
},
delete: function (index) {
    list.splice(index, 1) // remove one element starting from index
},
ret: function(){
    return list;
},
find: function(student){
    return list.findIndex(element => element === student);
}
}