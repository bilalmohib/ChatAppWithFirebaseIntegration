

alert("Select your contact on the left to see your messages.Note dont worry of @ and . because firebase dosent accept them thats why I have removed them.Your messages will be properly sent to particular users you choose please type correct email including @ and everything which it have");

var UserEmail;
var UserDisplayName;
var UserPhotoURL;
let app = (user) => {
    UserDisplayName = user.displayName;
    UserPhotoURL = user.photoURL;
    document.getElementById("clientName").innerHTML = user.displayName;
    document.getElementById("clientPhoto").setAttribute("src", user.photoURL);
    document.getElementById("clientEmail").innerHTML = user.email;
}


var SendEmail;

let sendID = (e) => {
    SendEmail = e.innerHTML;
    document.getElementById("SendUser").innerHTML = e.innerHTML;

    console.log(SendEmail);

    let str12 = UserEmail;

    let str = SendEmail;
    let res = str.split("@").join("");
    res = res.split(".").join("");
    res = res.split("`").join("");
    res = res.split("!").join("");
    res = res.split(".").join("");
    res = res.split("#").join("");
    res = res.split("%").join("");
    res = res.split("^").join("");
    res = res.split("&").join("");
    res = res.split("*").join("");
    res = res.split("(").join("");
    res = res.split(")").join("");
    res = res.split('"').join("");
    res = res.split("'").join("");
    res = res.split("_").join("");
    res = res.split("-").join("");
    res = res.split("+").join("");
    res = res.split("=").join("");
    res = res.split("}").join("");
    res = res.split("{").join("");
    res = res.split("]").join("");
    res = res.split("[").join("");
    res = res.split("|").join("");
    res = res.split("/").join("");
    res = res.split("?").join("");
    res = res.split(";").join("");
    res = res.split(",").join("");



    console.log(str12)

    let res12 = str12.split("@").join("");
    res12 = res12.split(".").join("");
    res12 = res12.split("`").join("");
    res12 = res12.split("!").join("");
    res12 = res12.split(".").join("");
    res12 = res12.split("#").join("");
    res12 = res12.split("%").join("");
    res12 = res12.split("^").join("");
    res12 = res12.split("&").join("");
    res12 = res12.split("*").join("");
    res12 = res12.split("(").join("");
    res12 = res12.split(")").join("");
    res12 = res12.split('"').join("");
    res12 = res12.split("'").join("");
    res12 = res12.split("_").join("");
    res12 = res12.split("-").join("");
    res12 = res12.split("+").join("");
    res12 = res12.split("=").join("");
    res12 = res12.split("}").join("");
    res12 = res12.split("{").join("");
    res12 = res12.split("]").join("");
    res12 = res12.split("[").join("");
    res12 = res12.split("|").join("");
    res12 = res12.split("/").join("");
    res12 = res12.split("?").join("");
    res12 = res12.split(";").join("");
    res12 = res12.split(",").join("");

    // once() method
    firebase.database().ref(`Comment/${res12}/${res}`).once('value', (data) => {
        var UserComments = data.val()
        var Keys = Object.keys(UserComments);
        console.log(Keys);
        for (let i = 0; i < Keys.length; i++) {
            let k = Keys[i];

            let comment = UserComments[k].Comment;
            let date = UserComments[k].Time;
            let name = UserComments[k].Name;
            let email = UserComments[k].Email;
            let photo = UserComments[k].UserPhoto;
            //console.log(k);
            let list1 = document.getElementById("list1");

            let li = document.createElement("li");




            let img = document.createElement("img");

            img.setAttribute("src", photo)

            img.setAttribute("class","dabas")

            li.appendChild(img);

            let para = document.createElement("p");
            para.innerHTML = `<b>Name</b>: ${name}</br>
            <b>Email</b>: ${email}</br>
            <b>Comments</b>: ${comment}</br>
            <b>Time:</b> ${date}</br>`;
            para.setAttribute("id", "UserComments")
            li.appendChild(para);
            list1.appendChild(li)
        }
    });


    //For sent comments 
// once() method
firebase.database().ref(`Comment/${res}/${res12}`).once('value', (data) => {
    var UserComments = data.val()
    var Keys = Object.keys(UserComments);
    console.log(Keys);
    for (let i = 0; i < Keys.length; i++) {
        let k = Keys[i];

        let comment = UserComments[k].Comment;
        let date = UserComments[k].Time;
        let name = UserComments[k].Name;
        let email = UserComments[k].Email;
        let photo = UserComments[k].UserPhoto;
        //console.log(k);
        let list2 = document.getElementById("list2");

        let li = document.createElement("li");




        let img = document.createElement("img");

        img.setAttribute("src", photo)

        img.setAttribute("class","dabas")

        li.appendChild(img);

        let para = document.createElement("p");
        para.innerHTML = `<b>Name</b>: ${name}</br>
    <b>Email</b>: ${email}</br>
    <b>Comments</b>: ${comment}</br>
    <b>Time:</b> ${date}</br>`;
        para.setAttribute("id", "UserComments")
        li.appendChild(para);
        list2.appendChild(li)
    }
});
//For sent comments

}



let addUser = () => {
    let email = document.getElementById("addUser").value;
    console.log(email);



    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + ' ' + time;
    dateTime = dateTime.toString();

    console.log(email);

    if (email == "") {
        alert("Enter the Email to  add It to your contacts");
        return;
    }

    let str = UserEmail;
    let res = str.split("@").join("");
    res = res.split(".").join("");
    res = res.split("`").join("");
    res = res.split("!").join("");
    res = res.split(".").join("");
    res = res.split("#").join("");
    res = res.split("%").join("");
    res = res.split("^").join("");
    res = res.split("&").join("");
    res = res.split("*").join("");
    res = res.split("(").join("");
    res = res.split(")").join("");
    res = res.split('"').join("");
    res = res.split("'").join("");
    res = res.split("_").join("");
    res = res.split("-").join("");
    res = res.split("+").join("");
    res = res.split("=").join("");
    res = res.split("}").join("");
    res = res.split("{").join("");
    res = res.split("]").join("");
    res = res.split("[").join("");
    res = res.split("|").join("");
    res = res.split("/").join("");
    res = res.split("?").join("");
    res = res.split(";").join("");
    res = res.split(",").join("");



    let str1 = email;
    let res1 = str1.split("@").join("");
    res1 = res1.split(".").join("");
    res1 = res1.split("`").join("");
    res1 = res1.split("!").join("");
    res1 = res1.split(".").join("");
    res1 = res1.split("#").join("");
    res1 = res1.split("%").join("");
    res1 = res1.split("^").join("");
    res1 = res1.split("&").join("");
    res1 = res1.split("*").join("");
    res1 = res1.split("(").join("");
    res1 = res1.split(")").join("");
    res1 = res1.split('"').join("");
    res1 = res1.split("'").join("");
    res1 = res1.split("_").join("");
    res1 = res1.split("-").join("");
    res1 = res1.split("+").join("");
    res1 = res1.split("=").join("");
    res1 = res1.split("}").join("");
    res1 = res1.split("{").join("");
    res1 = res1.split("]").join("");
    res1 = res1.split("[").join("");
    res1 = res1.split("|").join("");
    res1 = res1.split("/").join("");
    res1 = res1.split("?").join("");
    res1 = res1.split(";").join("");
    res1 = res1.split(",").join("");

    let Users = {
        Name: UserDisplayName,
        Email: UserEmail,
        UserPhoto: UserPhotoURL,
        Time: dateTime
    }

    firebase.database().ref(`Users/${res}/${res1}`).push(Users);
    location.reload();
}


////////////////////////////////////
let retreiveData = (user) => {
    let str1 = user.email;

    console.log(str1)

    let res1 = str1.split("@").join("");
    res1 = res1.split(".").join("");
    res1 = res1.split("`").join("");
    res1 = res1.split("!").join("");
    res1 = res1.split(".").join("");
    res1 = res1.split("#").join("");
    res1 = res1.split("%").join("");
    res1 = res1.split("^").join("");
    res1 = res1.split("&").join("");
    res1 = res1.split("*").join("");
    res1 = res1.split("(").join("");
    res1 = res1.split(")").join("");
    res1 = res1.split('"').join("");
    res1 = res1.split("'").join("");
    res1 = res1.split("_").join("");
    res1 = res1.split("-").join("");
    res1 = res1.split("+").join("");
    res1 = res1.split("=").join("");
    res1 = res1.split("}").join("");
    res1 = res1.split("{").join("");
    res1 = res1.split("]").join("");
    res1 = res1.split("[").join("");
    res1 = res1.split("|").join("");
    res1 = res1.split("/").join("");
    res1 = res1.split("?").join("");
    res1 = res1.split(";").join("");
    res1 = res1.split(",").join("");

    // once() method
    firebase.database().ref(`Users/${res1}/`).once('value', (data) => {
        let comments = data.val()
        var emailKeys = Object.keys(comments);
        console.log(emailKeys);
        for (let i = 0; i < emailKeys.length; i++) {
            let k = emailKeys[i];
            //console.log(k);
            let list = document.getElementById("list");

            let li = document.createElement("li");

            let button = document.createElement("button");
            button.innerHTML = k;
            button.setAttribute("onclick", "sendID(this)")
            li.appendChild(button);
            list.appendChild(li)
        }
    });

}

window.onload = retreiveData;
////////////////////////////////////




let login = () => {

    let newLoginHappened = (user) => {

        if (user) {
            UserEmail = user.email;
            retreiveData(user);
            //user is signed in 
            app(user);
        }
        else {
            let provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithRedirect(provider);
        }
    }

    firebase.auth().onAuthStateChanged(newLoginHappened);
}

window.onload = login;


let logout = () => {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
    }).catch(function (error) {
        // An error happened.
    });
}


let send = () => {

    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + ' ' + time;
    dateTime = dateTime.toString();

    let comment = document.getElementById("comments").value;

    console.log(comment);

    if (comment == "") {
        alert("Enter the feed back to continue");
        return;
    }

    if(SendEmail==null)
    {
        alert("Select the user from the left sidebar named select contacts to chat with them")
    }

    let str = SendEmail;
    let res = str.split("@").join("");
    res = res.split(".").join("");
    res = res.split("`").join("");
    res = res.split("!").join("");
    res = res.split(".").join("");
    res = res.split("#").join("");
    res = res.split("%").join("");
    res = res.split("^").join("");
    res = res.split("&").join("");
    res = res.split("*").join("");
    res = res.split("(").join("");
    res = res.split(")").join("");
    res = res.split('"').join("");
    res = res.split("'").join("");
    res = res.split("_").join("");
    res = res.split("-").join("");
    res = res.split("+").join("");
    res = res.split("=").join("");
    res = res.split("}").join("");
    res = res.split("{").join("");
    res = res.split("]").join("");
    res = res.split("[").join("");
    res = res.split("|").join("");
    res = res.split("/").join("");
    res = res.split("?").join("");
    res = res.split(";").join("");
    res = res.split(",").join("");




    let str1 = UserEmail;
    let res1 = str1.split("@").join("");
    res1 = res1.split(".").join("");
    res1 = res1.split("`").join("");
    res1 = res1.split("!").join("");
    res1 = res1.split(".").join("");
    res1 = res1.split("#").join("");
    res1 = res1.split("%").join("");
    res1 = res1.split("^").join("");
    res1 = res1.split("&").join("");
    res1 = res1.split("*").join("");
    res1 = res1.split("(").join("");
    res1 = res1.split(")").join("");
    res1 = res1.split('"').join("");
    res1 = res1.split("'").join("");
    res1 = res1.split("_").join("");
    res1 = res1.split("-").join("");
    res1 = res1.split("+").join("");
    res1 = res1.split("=").join("");
    res1 = res1.split("}").join("");
    res1 = res1.split("{").join("");
    res1 = res1.split("]").join("");
    res1 = res1.split("[").join("");
    res1 = res1.split("|").join("");
    res1 = res1.split("/").join("");
    res1 = res1.split("?").join("");
    res1 = res1.split(";").join("");
    res1 = res1.split(",").join("");

    // let Users = {
    //     Name: UserDisplayName,
    //     Email: UserEmail,
    //     UserPhoto: UserPhotoURL,
    //     Comment: comment,
    //     Time: dateTime
    // }

    // firebase.database().ref(`Users/${res1}`).push(Users);


    let Comment = {
        Name: UserDisplayName,
        Email: UserEmail,
        UserPhoto: UserPhotoURL,
        Comment: comment,
        Time: dateTime
    }

    firebase.database().ref(`Comment/${res1}/${res}/`).push(Comment);


    //Saving the user in the alert for particular user i.e next person 
    let Users = {
        Name: UserDisplayName,
        Email: UserEmail,
        UserPhoto: UserPhotoURL,
        Time: dateTime
    }

    firebase.database().ref(`Users/${res}/${res1}`).push(Users);
//Saving the user in the alert for particular user i.e next person 


    alert("Thanks for your valuable feedback");
    location.reload();
}















////////////////////////////////////////////////////////////////////////////////////





