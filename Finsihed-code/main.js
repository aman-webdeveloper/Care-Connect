document.getElementById("sign-in-tab").addEventListener("click", function () {
    document.getElementById("sign-up-tab").classList.remove("active");
    this.classList.add("active");
    document.getElementById("sign-up-form").innerHTML = `
          <input type="email" placeholder="Email" required>
          <input type="password" placeholder="Password" required>
          <button type="submit">Sign In</button>
      `;
    document.querySelector(".login-link").style.display = "none";
  });
  
  document.getElementById("sign-up-tab").addEventListener("click", function () {
    document.getElementById("sign-in-tab").classList.remove("active");
    this.classList.add("active");
    document.getElementById("sign-up-form").innerHTML = `
          <input type="text" placeholder="Full Name" required>
          <input type="email" placeholder="Email" required>
          <input type="password" placeholder="Password" required>
          <button type="submit">Sign Up</button>`;
            document.querySelector(".login-link").style.display = "block";
  });

//   crusel
