console.log("Welcome To Notes App");
shownotes();
var addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click',function(e){
    let addtxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);

    }
    notesObj.push(addtxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addtxt.value = "";
    // console.log(notesObj);
    shownotes();
})
function shownotes(){
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);

    }
    let html = "";
   notesObj.forEach(function(element,index){

    html += `
    <div class="my-2 mx-2 card noteCard" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Note ${index+1}</h5>
      
      <p class="card-text">${element}</p>
      <button class="btn btn-primary" onclick = "updateNotes(this.id)" id = "${index}">Update</button>
      <button class="btn btn-danger" onclick="deleteNote(this.id)" id = "${index}">Delete</button>
    </div>
  </div>    
    
    
    `



   });
   let noteselm = document.getElementById('notes');
   if(notesObj.length != 0){
       noteselm.innerHTML = html;
   }
   else{
       noteselm.innerHTML = `
       You have no notes right now.
       `
   }

}

function deleteNote(index){
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);

    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    shownotes();
} 

function updateNotes(index){
// console.log(index);
let notes = localStorage.getItem('notes');
if(notes == null){
    notesObj = [];
}
else{
    notesObj = JSON.parse(notes);

}
let addtxt = document.getElementById('addTxt');
addtxt.value = notesObj[index];
notesObj.splice(index,1);
localStorage.setItem("notes",JSON.stringify(notesObj));
shownotes();

}


searchtxt = document.getElementById('searchtxt');

searchtxt.addEventListener("input",function(){
    console.log("inside search")

     inputVal = searchtxt.value.toLowerCase();
    // console.log(inputVal);

    let noteCards = document.getElementsByClassName('noteCard');

    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        
    })
    





})