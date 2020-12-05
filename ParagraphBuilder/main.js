

function getParagraph1()
{
  
    var inputs = []; 
    
    for( var i=1 ;i<=6; i++)
    {
        //window.alert(document.getElementById("para1_input_box_"+ i).value);
        inputs.push(document.getElementById("para1_input_box_"+ i).value);
    }
    inputs.join(". ");
    document.getElementById("showParagraph1").innerHTML = inputs.join(". ");
    
}



function getParagraph2()
{
   
    var inputs2 = []; 
    
    for( var i=1 ;i<=6; i++)
    {
        //window.alert(document.getmEleentById("para1_input_box_"+ i).value);
        inputs2.push(document.getElementById("para2_input_box_"+ i).value);
    }
    inputs2.join(". ");
    document.getElementById("showParagraph2").innerHTML = inputs2.join(". ");
    
}