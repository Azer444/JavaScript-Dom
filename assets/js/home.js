// console.log(document);


//  let heads = document.getElementsByTagName("h3");
//  for (const item of heads) {
//     console.log(item);
//  }


// let head = document.getElementById("test");
// console.log(head);

// let head = document.querySelector(".test");
// let heads = document.querySelectorAll(".test");
// console.log(heads);


// for (const item of heads) {
//     console.log(item)
// }

// console.log(document.querySelector(".test"))

// let elem = document.querySelector("#list-news .test ul")

// console.log(elem)


// let sum = document.querySelector(".test");
// sum.className = "salamlar"
// sum.classList.add("salam");
// sum.classList.remove("salam")
// console.log(sum)

// if(sum.classList.contains("test1")){
//     sum.classList.remove("test1");
// }
// else{
//     console.log("Yoxdur")
// }

// let info = document.querySelector("#list-news .small-text");

// console.log(info);

// console.log(info.innerText);

// console.log(info.innerHTML);

// info.innerText = "<b>Salam Millet</b>";
// info.innerHTML = "<b>Salam Millet</b>";

// function clickBtn(){
//     alert("Salam Milet")
// }

// let addBtn = document.querySelector(".add-btn");
// addBtn.onclick = function () {
//     alert("Salam Millet")
// }

// let addBtn = document.querySelector(".add-btn");

// addBtn.addEventListener("click",function(){
//     console.log("Salamlar")
// })

// function test() {
//     console.log("Salamlar")
// }

// addBtn.addEventListener("click",test);

// addBtn.addEventListener("click",function(){
//     alert("Daxil olundu")
// })
// addBtn.addEventListener("click",function(){
//     alert("Daxil olunmadi")
// })


// let addBtn = document.querySelector(".add-btn");

// let text = document.querySelector(".text-area");

// console.log(text);

// addBtn.addEventListener("click",function(){
//     console.log(text.value);

// })



// addBtn.addEventListener("click",function(){
//     head.innerText = text.value;
//     text.value = "";
// })

// let addBtn = document.querySelector(".add-btn");

// let removeBtn = document.querySelector(".remove-btn");

// let text = document.querySelector(".text-area")

// let head = document.querySelector("h1");



// function addList() {
//     head.innerText = text.value;
//     if (text.value == "") {
//         alert("Daxil edin :")
//     }
//     if (head.classList.contains("active-head")) {
//         head.classList.remove("active-head")
//         head.classList.add("inActive-head")
//     }
//     text.value = "";
// }


// function removeList() {
//     head.innerText = text.value;
//     if (text.value == "") {
//         alert("Daxil edin :")
//     }
//     if (head.classList.contains("inActive-head")) {
//         head.classList.remove("inActive-head")
//         head.classList.add("active-head")
//     }
//     text.value = "";
// }


// addBtn.addEventListener("click",addList )


// removeBtn.addEventListener("click",removeList)

// let addBtn = document.querySelector(".add-btn");

// let removeBtn = document.querySelector(".remove-btn");

// let text = document.querySelector(".text-area");

// let head = document.querySelector("h1");

// let ul = document.querySelector(".list-area");


// addBtn.addEventListener("click", function () {

//     if(text.value == ""){
//         alert("Daxil edin");
//         return;
//     }
//     let li = document.createElement("li");

//     let icon = document.createElement("i");

//     icon.classList.add("fa-solid");

//     icon.classList.add("fa-circle-minus");

    

//     li.classList.add("list-group-item");

//     li.classList.add("w-25");
    
//     li.style.border = "2px solid black";
    
//     li.style.borderRadius = "15px";
    
//     li.style.backgroundColor = "red";
    
//     li.style.color = "white";
    
//     li.style.marginTop = "20px";

//     li.innerText = text.value;

//     console.log(li);

//     ul.append(li);

//     li.append(icon);

//     icon.style.float = "right";

//     icon.style.cursor = "pointer";

//     icon.style.padding = "4px";

//     icon.onclick = function(){
//         li.remove();
//     }

//     text.value = "";

    
// })