document.addEventListener("DOMContentLoaded", function () {
    // Create form container
    const formContainer = document.createElement("div");
    formContainer.classList.add("form-container");

    // Create form element
    const form = document.createElement("form");

    // Create heading
    const heading = document.createElement("h2");
    heading.innerText = "Login";

    // Create email label and input
    const emailLabel = document.createElement("label");
    emailLabel.innerText = "Email:";
    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("placeholder", "Enter your email");
    emailInput.required = true;

    // Create password label and input
    const passwordLabel = document.createElement("label");
    passwordLabel.innerText = "Password:";
    const passwordInput = document.createElement("input");
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("placeholder", "Enter your password");
    passwordInput.required = true;

    // Create login button
    const loginButton = document.createElement("button");
    loginButton.innerText = "Login";
    loginButton.setAttribute("type", "submit");

    // Append elements to form
    form.appendChild(heading);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(passwordLabel);
    form.appendChild(passwordInput);
    form.appendChild(loginButton);

    // Append form to container
    formContainer.appendChild(form);

    // Append container to body
    document.body.appendChild(formContainer);

    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Login successful! (This is a placeholder action)");
    });
});