$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const veg = $("#veg").val();
    const fruit = $("#fruit").val();
    const deli = $("#deli").val();

   
    $(".veg").text(veg);
    $(".fruit").text(fruit);
    $(".deli").text(deli);

    $("#story").show();

    event.preventDefault();

  });
});

// $(document).ready(function() {
//   $("#formTwo").submit(function(event) {
//     const person1Input = $("input#person1").val();
//     const address1Input = $("input#address1").val();
  
//     $(".person1").text(person1Input);
//     $(".address1").text(address1Input);

//     $("#story").show();

//     event.preventDefault();

//   });
// });