function signup(event) {
    // alert("registered successfully");
    event.preventDefault();

    var name = document.getElementById("uname").value;

    var email = document.getElementById("uemail").value;

    var password = document.getElementById("upassword").value;

    var cartproduct = [];
    if (name && email && password) {
        if (password.length >= 8) {

            var ls = JSON.parse(localStorage.getItem("S_user")) || [];
            var flag = false;
            for (var i = 0; i < ls.length; i++) {
                if (ls[i].email == email) {
                    flag = true;
                }
            }

            if (flag == false) {
                var userdata = { name: name, email: email, paswword: password, cartproduct}
                ls.push(userdata);

                localStorage.setItem("S_user", JSON.stringify(ls));
                alert("registration successfull");
                window.location.href = `./login.html`
                document.getElementById("uname").value = "";
                document.getElementById("uemail").value = "";
                document.getElementById("upassword").value = "";
            } else {
                console.log("user already exist")
                alert("user already exist")
            }
        } else {
            console.log("password should contain 8 digit")
        }
    } else {
        console.log("all fields are mandatory")
    }
}
