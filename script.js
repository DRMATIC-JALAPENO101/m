document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent form submission

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    try {
        // Fetch user data from users.json
        let response = await fetch("users.json");
        let users = await response.json();

        // Check if entered details match any stored user
        let validUser = users.find(user => user.username === username && user.password === password);

        if (validUser) {
            alert("Login successful! (But there's no dashboard yet)");
        } else {
            window.location.href = "error.html"; // Redirect to error page
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
});

