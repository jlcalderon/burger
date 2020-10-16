$(document).ready(function() {
    $(document).on("click", ".update-burgers", function(event) {
        event.preventDefault();
        console.log("Button clicked");
        let id = $(this).data("id");
        let statusChange = {
            devoured: true
        }
        console.log(statusChange);
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: statusChange
        }).then(function(data) {
            console.log("Burger changed to", data);
            location.reload();
        });
    });

    $(document).on("submit", ".create-burger", function(event) {
        event.preventDefault();
        console.log("Adding new burger to waiting menu list");
        let newBurger = {
            name: $("#new-burger").val().trim(),
            devoured: $("#new-burger").data("devoured")
        }
        $.ajax("/api/burgers/", {
            type: "POST",
            data: newBurger
        }).then(function(data) {
            console.log(`New burger ${data} added to the list`);
            location.reload();
        })
    });
});