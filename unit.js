
let btnEl=document.getElementById("btn-el")
let lengthEl=document.getElementById("length")
let volEl=document.getElementById("vol")
let massEl=document.getElementById("mass")
const mtofeet=3.28084
const ltogallons=0.264
const kgtolb=2.205
btnEl.addEventListener("click",function(){
    let inputEl=document.querySelector("#input-el")
    inputValue=inputEl.value
    convert()
})
function convert(){
    if(inputValue!=0)
    {lengthEl.innerHTML=`${inputValue} meters =${Number(inputValue*mtofeet).toFixed(4)}feet | ${inputValue} feet =${(Number(inputValue/mtofeet).toFixed(4))} meters`
    volEl.innerHTML=`${inputValue} litres =${Number(inputValue*ltogallons).toFixed(4)}gallons | ${inputValue} gallons =${(Number(inputValue/ltogallons).toFixed(4))} litres`
    massEl.innerHTML=`${inputValue} kilos =${Number(inputValue*kgtolb).toFixed(4)}pounds | ${inputValue} pounds =${(Number(inputValue/kgtolb).toFixed(4))} kilos`
 }
}