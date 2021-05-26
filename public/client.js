

let socket=io()

socket.on('connect',()=>{
    document.getElementById('socketId').innerText=socket.id
})



function colorthebox(color){
    document.querySelector('.'+ color).style.backgroundColor=color
    setTimeout(()=>{
    document.querySelector('.'+ color).style.backgroundColor=null
    },5000)
}


document.getElementById('colorit').onclick=function(){
    const color=document.getElementById('selectedcolor').value
    socket.emit('colorit',{color})
}

socket.on('colorit',(data)=>{
    colorthebox(data.color)
})