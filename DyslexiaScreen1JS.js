var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
var no_of_clicks_male = 0;
var no_of_clicks_female = 0;
var no_of_clicks_other = 0;
var selected_gender;
(function ($) {
    "use strict";
    // First we store the name user entered
    var entered_name = $("#lname").value;
    $('.gender_selection_male').click(function() {
    selected_gender = "Male";
    $('.gender_selection_female').css({
        'border': 'none',
        'border-radius': '6px',
        'background-color': '#ddd',
        'color': '#C6C1C3'
        });
    $('.gender_selection_other').css({
        'border': 'none',
        'border-radius': '6px',
        'background-color': '#ddd',
        'color': '#C6C1C3'
        });
        if(no_of_clicks_female%2 != 0){
            no_of_clicks_female++;
        }
        if(no_of_clicks_other%2 != 0){
            no_of_clicks_other++;
        }
        
        

        if(no_of_clicks_male%2 == 0){

    $('.gender_selection_male').css({
    'border': 'none',
    'border-radius': '6px',
    'background-color': '#3AAFA9',
    'color': '#fff'
    });
}
else{
    $('.gender_selection_male').css({
        'border': 'none',
        'border-radius': '6px',
        'background-color': '#ddd',
        'color': '#C6C1C3'
        });
}
no_of_clicks_male++;
});

$('.gender_selection_female').click(function() {
    selected_gender = "Female";
    $('.gender_selection_male').css({
        'border': 'none',
        'border-radius': '6px',
        'background-color': '#ddd',
        'color': '#C6C1C3'
        });
    $('.gender_selection_other').css({
        'border': 'none',
        'border-radius': '6px',
        'background-color': '#ddd',
        'color': '#C6C1C3'
        });
        
        if(no_of_clicks_male%2 != 0){
            no_of_clicks_male++;
        }
        if(no_of_clicks_other%2 != 0){
            no_of_clicks_other++;
        }
        

        if(no_of_clicks_female%2 == 0){

    $('.gender_selection_female').css({
    'border': 'none',
    'border-radius': '6px',
    'background-color': '#3AAFA9',
    'color': '#fff'
    });
}
else{
    $('.gender_selection_female').css({
        'border': 'none',
        'border-radius': '6px',
        'background-color': '#ddd',
        'color': '#C6C1C3'
        });
}
no_of_clicks_female++;
});

$('.gender_selection_other').click(function() {
    selected_gender = "Other";
    $('.gender_selection_male').css({
        'border': 'none',
        'border-radius': '6px',
        'background-color': '#ddd',
        'color': '#C6C1C3'
        });
    $('.gender_selection_female').css({
        'border': 'none',
        'border-radius': '6px',
        'background-color': '#ddd',
        'color': '#C6C1C3'
        });
        if(no_of_clicks_male%2 != 0){
            no_of_clicks_male++;
        }
        if(no_of_clicks_female%2 != 0){
            no_of_clicks_female++;
        }
        
    
        if(no_of_clicks_other%2 == 0){

    $('.gender_selection_other').css({
    'border': 'none',
    'border-radius': '6px',
    'background-color': '#3AAFA9',
    'color': '#fff'
    });
}
else{
    $('.gender_selection_other').css({
        'border': 'none',
        'border-radius': '6px',
        'background-color': '#ddd',
        'color': '#C6C1C3'
        });
}
no_of_clicks_other++;
});
console.log(selected_gender);
// Selecting date of birth
var date;
var month;
var year;
$('#dob-day').click(function(){
    date = $('#dob-day option:selected').text();
});
$('#dob-month').click(function(){
    month = $('#dob-month option:selected').text();
    console.log(month);
});
$('#dob-year').click(function(){
    year = $('#dob-year option:selected').text();
});
})(jQuery);