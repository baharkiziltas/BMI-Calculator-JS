function calculate (){
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    let result = weight / Math.pow(height,2);
     document.getElementById('answerparagraph').innerHTML = result.toFixed(2);

     if(result < 18.5){
        document.getElementById('statu').innerHTML = "Zayıf";
        document.getElementById('statu').style.color = '#2196f3';
     }
     else if(result >= 18.5 && result < 25){
        document.getElementById('statu').innerHTML = "Normal Kilolu";
        document.getElementById('statu').style.color = '#43a047';

     }
     else if(result >= 25 && result < 30){
        document.getElementById('statu').innerHTML = "Fazla Kilolu";
        document.getElementById('statu').style.color = '#fb8c00';

     }
     else if(result >= 30 && result < 40){
        document.getElementById('statu').innerHTML = "Obez";
        document.getElementById('statu').style.color = '#c62828';

     }
     else if(result >40){
        document.getElementById('statu').innerHTML = "İleri Derecede Obez";
        document.getElementById('statu').style.color = '#c62828';

     }


}

function reset(){
    document.getElementById('weight').value = 0;
    document.getElementById('height').value = 0;
    document.getElementById('answerparagraph').innerText = "";
    document.getElementById('statu').innerText = "";

}