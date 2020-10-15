$(document).ready(function() {
    $(document).on("click", ".update-burgers", function(event) {
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
});