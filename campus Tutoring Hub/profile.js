document.addEventListener("DOMContentLoaded", function () {
    let userName = localStorage.getItem("userName") || "Guest";
    let userEmail = localStorage.getItem("userEmail") || "Not Set";
    let userRole = localStorage.getItem("userRole") || "student";

    document.getElementById("user-name").textContent = userName;
    document.getElementById("user-email").textContent = userEmail;
    document.getElementById("user-role").textContent = userRole.charAt(0).toUpperCase() + userRole.slice(1);

    document.getElementById("upload-pic").addEventListener("change", function (event) {
        let file = event.target.files[0];
        let reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById("profile-pic").src = e.target.result;
            localStorage.setItem("profilePic", e.target.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    });

    let savedPic = localStorage.getItem("profilePic");
    if (savedPic) {
        document.getElementById("profile-pic").src = savedPic;
    }
});

function editProfile() {
    document.getElementById("edit-profile-form").style.display = "block";
}

function saveProfile() {
    let newName = document.getElementById("edit-name").value;
    let newRole = document.getElementById("edit-role").value;

    if (newName) {
        localStorage.setItem("userName", newName);
        document.getElementById("user-name").textContent = newName;
    }

    localStorage.setItem("userRole", newRole);
    document.getElementById("user-role").textContent = newRole.charAt(0).toUpperCase() + newRole.slice(1);

    alert("Profile updated successfully!");
    document.getElementById("edit-profile-form").style.display = "none";
}

document.getElementById("logout").addEventListener("click", function () {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "login.html";
});