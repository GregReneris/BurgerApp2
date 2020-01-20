// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newd");

    var newDevouredState = {
      devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burger8000/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newCat = {
      name: $("#ca").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burger8000", {
      type: "POST",
      data: newCat
    }).then(
      function() {
        console.log("created new sandwich");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  // $.ajax("/api/burger8000", {
  //   type: "DELETE",
  // }).then(
  //   function() {
  //     console.log("created new sandwich");
  //     // Reload the page to get the updated list
  //     location.reload();
  //   }
  // );

  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newd");

    var newDevouredState = {
      devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burger8000/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devour state to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // copying from above:


  $(".delete").on("click", function(event) {
    var id = $(this).data("id");

    console.log(id);
    $.ajax("/api/burger8000/" + id, {
      type: "DELETE",
          }).then(
      function() {
        
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });





});

