$(document).ready(function () {

    $("#submit").click(function(){
    
    let firstName = $('#yourName').val()
    let secondName = $('#loverName').val()
    
    $.ajax({
        url: "https://love-calculator.p.mashape.com/getPercentage?fname=" + firstName + "&sname=" + secondName,

        headers: {
            "X-Mashape-Key" : "WDTUtA1dWfmshu8uiA0JtKMODVnop1jJbSyjsn8BxMgeUVEQ40",
            "Access" : "application/json",
        },
        success: function(data){
            console.log(data);
            let percent = data.percentage + "%"
            let results = data.result
            $("#percentText").html("Love Connection " + percent)
            $("#resultsText").html( results)
          
        },

     
    })
  })
})