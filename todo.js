var getList = document.getElementById("list")

var getInp = document.getElementById('todo')

function addTodo(){
getList.innerHTML += `<li> ${getInp.value} <button onclick='del(this)'>Delete</button> </li>`
getInp.value= ' '
}

function del(e){
e.parentNode.remove()
}

function delall(){
getList.innerHTML=" "
}
