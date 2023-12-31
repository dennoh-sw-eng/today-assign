document.addEventListener("DOMContentLoaded", function() {
    var contactLink = document.getElementById("contact");
    contactLink.addEventListener("click", function(event) {
        event.preventDefault();
        displayEmailNotification();
    });

    function displayEmailNotification() {
        var notification = document.createElement("div");
        notification.className = "email-notification";
        notification.innerHTML = "email us at: assignhelpa@gmail.com";

        document.body.appendChild(notification);

        // Flashing effect: Toggle between two background colors every 500 milliseconds.
        var colors = ["#FF5733", "#FFD700"];
        var currentColorIndex = 0;

        var flashingInterval = setInterval(function() {
            notification.style.backgroundColor = colors[currentColorIndex];
            currentColorIndex = (currentColorIndex + 1) % colors.length;
        }, 500);

        // Automatically remove the notification after a few seconds (e.g., 5 seconds).
        setTimeout(function() {
            clearInterval(flashingInterval); // Stop the flashing effect
            document.body.removeChild(notification);
        }, 5000);
    }
});
