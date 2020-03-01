$(function() {
    $(".change-devour").on("click", function() {
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");
        console.log(newDevour)

        var newlyDevoured = {
            devoured: newDevour
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newlyDevoured
        }).then(
            function() {
                console.log("changed burger to", newlyDevoured);
                location.reload();
            }
            
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#ca").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                location.reload();
            }
        );
    });
});