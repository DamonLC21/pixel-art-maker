
var table = document.querySelector('.grid')
var cell = document.querySelector('.cell')
let colorPicker = document.querySelector('#colorPicker')
var all = document.querySelectorAll('divv')

document.addEventListener('DOMContentLoaded', function () {
    for(let x = 0; x < 90; x++){
       var row = document.createElement('tr')
       table.appendChild(row)
    
       for(let y = 0; y < 170; y++){
        var td = document.createElement('td')
        var div = document.createElement('div')
           div.className = 'cell'
           td.appendChild(div)
           row.appendChild(td)
           div.addEventListener('mouseover', function() {
            this.style.backgroundColor = colorPicker.value;
        })
       }
    }

   
       
    


  














})