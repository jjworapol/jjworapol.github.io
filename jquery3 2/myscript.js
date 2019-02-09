$(document).ready(function() {
    $('#advanced-search').hide();/*hidden advanced search*/
    $.ajax({ /*initialize table */ 
        url: "data.json",
        dataType: "json"
    }).done(function(response) {
        console.log(response);
        var x = "";
        response.forEach(element => {
          /*  console.log(element.Name , element.Age ,element.Email);*/
            x += "<tr>" +
            "<td>"+ element.Name  +"</td>"+
            "<td>"+ element.Brand  +"</td>"+
            "<td>"+ element.Capacity  +"</td>"+
            "<td>"+ element.Display   +"</td>"+
            "<td>"+ element.Price +"</td>"+
            "</tr>";
            $('#datarow').html(x);
        });
    });
    // convert selects already on the page at dom load
//   $('select.form-control').combobox();	
    
  

  
});

$('#submit-btn').click(function() {
    $.ajax({
        url: "data.json",
        dataType: "json"
    }).done(function(response) {
        console.log(response);
        var x= "";
        var have = false;
        response.forEach(element => {
            if(element.Name.toLowerCase().includes($('#input-text').val().toLowerCase())){
                have = true;
                console.log(element.Name,element.Age,element.Email);
                x += "<tr>" +
                "<td>"+ element.Name  +"</td>"+
                "<td>"+ element.Brand  +"</td>"+
                "<td>"+ element.Capacity  +"</td>"+
                "<td>"+ element.Display   +"</td>"+
                "<td>"+ element.Price +"</td>"+
                "</tr>";
                $('#datarow').html(x);
                
            }
        });
        if(!have){
            $('#datarow').html("");
            $('#Warning').toggle();
        }
        

    });
});
$('#advanced-btn').click(function(){
    $('#advanced-search').toggle(1000);
});

$('#advanced-search-btn').click(function(){
    $.ajax({
        url: "data.json",
        dataType: "json"
    }).done(function(response) {
        console.log(response);
        var x= "";
        var have = "";
        var brand = $('#brand-selector').val();
        var capacity = $('#capacity-selector').val();
        var display = $('#display-selector').val();
        response.forEach(element => {
            if(element.Name.toLowerCase().includes($('#input-text').val().toLowerCase()) 
                && element.Brand.includes(brand) && element.Capacity.includes(capacity) && element.Display.includes(display)){
                have = true;
                console.log(element.Name,element.Age,element.Email);
                x += "<tr>" +
                "<td>"+ element.Name  +"</td>"+
                "<td>"+ element.Brand  +"</td>"+
                "<td>"+ element.Capacity  +"</td>"+
                "<td>"+ element.Display   +"</td>"+
                "<td>"+ element.Price +"</td>"+
                "</tr>";
                $('#datarow').html(x);
                
            }
            if(have=false){
                $('#datarow').html("");
                $('#warinig').show();
            }
        });
        

    });
    
});