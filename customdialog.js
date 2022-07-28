export function cusAlert() {
    let dialog = document.getElementById("alDia");
    document.getElementById("cusAl").addEventListener("click", function() {
        dialog.show();
    })
    document.getElementById("ok").addEventListener("click", function() {
        dialog.close();
    })
}

export function cusConfirm() {
    let dialog = document.getElementById("cfDia");
    document.getElementById("cusCf").addEventListener("click", function() {
        dialog.show();
    }) 
    document.getElementById("yes").addEventListener("click", function() {
        dialog.close();
        document.getElementById("out").innerHTML = "The user said yes!";
    })
    document.getElementById("no").addEventListener("click", function() {
        dialog.close();
        document.getElementById("out").innerHTML = "The user said No :(";
    })
}

export function cusPrompt() {
    let dialog = document.getElementById("prDia");
    let text = "";
    document.getElementById("cusPr").addEventListener("click", function () {
        dialog.show();
    });

    document.getElementById("enter").addEventListener("click", function () {
        let firstName = document.getElementById("prInput").value;
        if (firstName != null) {
            if (firstName.length == 0) {
                text = `User didn't enter anything`;
            }
            else {
                text = `Your First Name is ${firstName.charAt(0).toUpperCase () + firstName.slice (1)}`;
            }
        } 
        else {
            text = `User didn't enter anything`;
        }
        dialog.close();
        document.getElementById ("out").innerHTML = text;
    })

    document.getElementById("cancel").addEventListener("click", function () {
        text = `User didn't enter anything`;
        dialog.close();
        document.getElementById ("out").innerHTML = text;
    })
}