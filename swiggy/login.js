function login(event) {
    event.preventDefault();
    // console.log();
    // alert("login success");


    var uemail = document.getElementById("uemail").value;

    if(uemail){
        var ls = JSON.parse(localStorage.getItem("S_user"));
        var currentuser;
        var flag = false;

        for(var i=0;i<ls.length;i++){
            if(ls[i].email == uemail){
                flag = true;
                currentuser = ls[i];
            }
        }
        if(flag == true){
            localStorage.setItem("S_currentuser", JSON.stringify(currentuser));
            alert("login Successful");
            window.location.href = `./home.html`;
        } else {
            alert("credentials are wrong");
        }
    } else {
        alert("All fields are mandatory");
    }

}




