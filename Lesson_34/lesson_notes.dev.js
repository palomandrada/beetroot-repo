// // isTrusted -> True if user clicks, False if it's simulated by the console 
// //shihtKey -> true if button hold 
// //cientX - clientY -> position of the user when clic 
// //
// // function clickHandeler(event) {
// //     console.log(event.target);   
// // }
// //document.querySelector(".button").onclick = clickHandeler; 
// //document.querySelector(".button").addEventListener("click", clickHandeler);
// document.querySelector(".button").addEventListener("click", event => {
//     event.preventDefault(); //To remove default behaviour from an element
//     event.stopPropagation(); //to stop multiple events from appearing in layered elements
//     //console.log(event.target);
//     console.log(this);
// });
// // JS Event Delegation -> We can separate events with conditions.
// document.addEventListener("click",, event => {
//     if (event.target.tagName === "button"){
//         console.log("Button clicked!!!");
//     }
//     if (event.target.className === "container") {
//         console.log("Container clicked!!");
//     }
// }) 
// //mouseup, mouse leave -> to check mouse detectors ONLY IN MOUSE
// //pointer works with mouse, fingers, etc. 
// document.querySelector(".button").addEventListener("pointerup", () => {
//     console.log("button");
// }) 
// //Events for forms (submit, focus, blur, input...)
// // document.querySelector(".my-form").addEventListener("submit", event => {
// //     event.preventDefault();
// // })
// // document.querySelector(".my-form").addEventListener("focus", event => { 
// //     event.preventDefault();
// //     console.log(event);
// // })
// // document.querySelector(".my-form").addEventListener("input", function(event) {
// //     console.log(this.value);
// // })
// document.querySelector("input[name='username']").addEventListener("input", function() {
//     const diff = 5 - this.value.lenght; 
//     if (diff <=0) {
//         document.querySelector(".error_block").classList.add("hidden");
//         return false; 
//     }
//     console.log(this.value);
// })
// //-----------------------------------
// document.addEventListener("keydown", event => {
//     event.preventDefault();
//     console.log(event);
//     // use ctrlKey + keycode 
// })
"use strict";