alert("Important! You have to add contacts manually at the right sidebar.Then click on one to start chat dont worry about @ and . They are removed by me and you have to add correct gmail in order to send message to that one.Thanks");
var UserEmail;
var UserDisplayName;
var UserPhotoURL;
let app = (user) => {
    UserDisplayName = user.displayName;
    UserPhotoURL = user.photoURL;
    UserEmail = user.email;

    localStorage.setItem("SignedUser", user.email);
    document.getElementById("clientName").innerHTML = user.displayName;
    document.getElementById("clientPhoto").setAttribute("src", user.photoURL);
    document.getElementById("clientEmail").innerHTML = user.email;
}


var SendEmail;

var res12;
var res;


let sendID = (e) => {
    ////////////////////////////
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + ' ' + time;
    dateTime = dateTime.toString();
    ////////////////////////////

    document.getElementById("back").style.display = "block";
    SendEmail = e.innerHTML;

    localStorage.setItem("SelectedUser", SendEmail);






    let str12 = localStorage.getItem("SignedUser");
    res12 = str12.split("@").join("");
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



    /////////////////////////////////////////////////////////////////////////    
    //Setting the current user
    let CurrentUser = {
        CU: SendEmail
    }
    firebase.database().ref(`CurrentUser/${res12}`).set(CurrentUser);


    location.reload();
}


let startShow = (user) => {
    ////////////////////////////////This is for showing data all data/////////////////////////////
    // console.log(SendEmail);
    //////////////////////////////////////////////////////////////////////////////////////////////

    let str12 = user;
    res12 = str12.split("@").join("");
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



    /////////////////////////////////////////////////////////
    firebase.database().ref(`CurrentUser/${res12}`).on('value', (snapshot) => {
        snapshot.forEach(function (data) {
            var current_user = data.val();
            console.log(current_user)
            // ...
            document.getElementById("SendUser").innerHTML = current_user;



            ///////////////////This is all the data/////////////////////////////////
            let str = current_user;
            res = str.split("@").join("");
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



            //console.log(str12)






            // once() method
            //For received comments
            firebase.database().ref(`Comment/${res12}/${res}`).on('value', (data) => {
                var UserComments = data.val()
                var Keys = Object.keys(UserComments);
                //console.log(Keys);
                for (let i = 0; i < Keys.length; i++) {
                    let k = Keys[i].toString();

                    let comment = UserComments[k].Comment;
                    let date = UserComments[k].Time;
                    let name = UserComments[k].Name;
                    let email = UserComments[k].Email;
                    let photo = UserComments[k].UserPhoto;
                    //console.log(k);
                    let list1 = document.getElementById("list1");

                    let li = document.createElement("li");


                    //Creating image
                    let img = document.createElement("img");

                    img.setAttribute("src", photo)

                    img.setAttribute("class", "dabas")
                    //Creating img


                    //Creating Name
                    let Name = document.createElement("span");
                    Name.setAttribute("class", "Name")
                    Name.innerHTML = `${name}`;
                    //Creating Name

                    //Creating Message
                    let Message = document.createElement("span");
                    Message.setAttribute("class", "Message")
                    Message.innerHTML = comment;
                    //Creating Message


                    //Creating time
                    let Time = document.createElement("span");
                    Time.setAttribute("class", "Time")
                    Time.innerHTML = `${date}`;
                    //Creating time


                    //Creating key
                    let Key = document.createElement("span");
                    Key.setAttribute("class", "Key")
                    Key.innerHTML = k;
                    //Creating key


                    //Creating img box
                    let picbox = document.createElement("div");

                    picbox.setAttribute("class", "picbox");
                    //Creating img box

                    //Creating the delete button
                    let deleteBtn = document.createElement("button");
                    deleteBtn.innerHTML = "Delete"
                    deleteBtn.setAttribute("onclick", "deleteIt(this)");
                    deleteBtn.setAttribute("class", "delBtn")
                    //Creating the delete button


                    //Creating message box
                    let messagebox = document.createElement("div");

                    messagebox.setAttribute("class", "messagebox");
                    //Creating message box


                    //Creating the major box
                    let MajorBox = document.createElement("div");
                    MajorBox.setAttribute("class", "MajorBox");

                    //Creating the major box




                    //Appending things to pic box
                    picbox.appendChild(img);
                    picbox.appendChild(Name);
                    //Appending things to pic box



                    //Appending things to Message box
                    messagebox.appendChild(Message);
                    messagebox.appendChild(Key);
                    messagebox.appendChild(deleteBtn);

                    //Appending things to Message box


                    //Appending the boxes in Majorboxes
                    MajorBox.appendChild(picbox);
                    MajorBox.appendChild(messagebox)
                    MajorBox.appendChild(Time)
                    //Appending the boxes in Majorboxes




                    list1.appendChild(MajorBox)
                }
            });


            //For sent comments 
            // once() method
            firebase.database().ref(`Comment/${res}/${res12}`).on('value', (data) => {
                var UserComments = data.val()
                var Keys = Object.keys(UserComments);
                //  console.log(Keys);
                for (let i = 0; i < Keys.length; i++) {
                    let k = Keys[i];

                    let comment = UserComments[k].Comment;
                    let date = UserComments[k].Time;
                    let name = UserComments[k].Name;
                    let email = UserComments[k].Email;
                    let photo = UserComments[k].UserPhoto;
                    //console.log(k);
                    let list = document.getElementById("list2");

                    let li = document.createElement("li");




                    //Creating image
                    let img = document.createElement("img");

                    img.setAttribute("src", photo)

                    img.setAttribute("class", "dabas")
                    //Creating img


                    //Creating Name
                    let Name = document.createElement("span");
                    Name.setAttribute("class", "Name")
                    Name.innerHTML = `${name}`;
                    //Creating Name

                    //Creating Message
                    let Message = document.createElement("span");
                    Message.setAttribute("class", "Message")
                    Message.innerHTML = comment;
                    //Creating Message


                    //Creating time
                    let Time = document.createElement("span");
                    Time.setAttribute("class", "Time")
                    Time.innerHTML = `${date}`;
                    //Creating time


                    //Creating key
                    let Key = document.createElement("span");
                    Key.setAttribute("class", "Key")
                    Key.innerHTML = `${k}`;
                    //Creating key


                    //Creating img box
                    let picbox = document.createElement("div");

                    picbox.setAttribute("class", "picbox");
                    //Creating img box

                    //Creating the delete button
                    let deleteBtn = document.createElement("button");
                    deleteBtn.innerHTML = "Delete"
                    deleteBtn.setAttribute("onclick", "deleteIt2(this)");
                    deleteBtn.setAttribute("class", "delBtn")
                    //Creating the delete button


                    //Creating message box
                    let messagebox = document.createElement("div");

                    messagebox.setAttribute("class", "messagebox1");
                    //Creating message box


                    //Creating the major box
                    let MajorBox = document.createElement("div");
                    MajorBox.setAttribute("class", "MajorBox1");

                    //Creating the major box




                    //Appending things to pic box
                    picbox.appendChild(img);
                    picbox.appendChild(Name);
                    //Appending things to pic box



                    //Appending things to Message box
                    messagebox.appendChild(Message);
                    messagebox.appendChild(Key);
                    messagebox.appendChild(deleteBtn);

                    //Appending things to Message box


                    //Appending the boxes in Majorboxes
                    MajorBox.appendChild(picbox);
                    MajorBox.appendChild(messagebox)
                    MajorBox.appendChild(Time)
                    //Appending the boxes in Majorboxes




                    list.appendChild(MajorBox)
                }
            });
            //For sent comments
            ///////////////////This is all the data/////////////////////////////////



        });
    });
    /////////////////////////////////////////////////////////
    ////////////////////////////////This is for showing data all data/////////////////////////////
}

window.onload = startShow;

//Implementing the deletion of message function
let deleteIt = (e) => {
    let key = e.parentNode.childNodes[1].innerHTML
    console.log(key);




    console.log(res12)
    console.log(res);

    let userRefs = firebase.database().ref(`Comment/${res12}/${res}/${key}`);
    userRefs.remove();
    // refreshing the page 
    var x = window.location.href;
    x = x.split('#');
    window.location.href = x[0];
}
//Implementing the deletion of message function



//Implementing the deletion of message function
let deleteIt2 = (e) => {
    let key = e.parentNode.childNodes[1].innerHTML
    console.log(key);




    console.log(res12)
    console.log(res);

    let userRefs = firebase.database().ref(`Comment/${res}/${res12}/${key}`);
    userRefs.remove();
    // refreshing the page 
    var x = window.location.href;
    x = x.split('#');
    window.location.href = x[0];
}
//Implementing the deletion of message function






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

    //  console.log(str1)

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
        // console.log(emailKeys);
        for (let i = 0; i < emailKeys.length; i++) {
            let k = emailKeys[i];
            //console.log(k);
            let list = document.getElementById("list");

            let li = document.createElement("li");


            //Creating the button
            let button = document.createElement("button");
            button.innerHTML = k;
            button.setAttribute("onclick", "sendID(this)")
            button.setAttribute("id", "user")
            //Creating the button


            //Now craeting the anchor tag to delete the users
            let anchor=document.createElement("a");
            anchor.innerHTML="Delete";
            anchor.setAttribute("href","#")
            anchor.setAttribute("onclick","deleteUser(this)");
            anchor.setAttribute("id","anchor")
            //Now craeting the anchor tag to delete the users


            li.appendChild(button);
            li.appendChild(anchor)
            list.appendChild(li)

        }
    });

}

window.onload = retreiveData;
////////////////////////////////////


//Deleting the user
let deleteUser=(e)=>{
     console.log(e.parentNode.childNodes[0].innerHTML)
     
     alert("Are you sure you want to delete the user");

     let delUser=e.parentNode.childNodes[0].innerHTML;


     
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


     let userRefs = firebase.database().ref(`Users/${res}/${delUser}`);
     userRefs.remove();
     // refreshing the page 
     var x = window.location.href;
     x = x.split('#');
     window.location.href = x[0];
}
//Deleting the user




let login = () => {

    let newLoginHappened = (user) => {

        if (user) {
            UserEmail = user.email;
            retreiveData(user);
            //user is signed in
            startShow(user.email);
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
    // Sign out from firebase.
firebase.auth().signOut().then(function() {
  // Redirect to google sign out.
  window.location.assign('https://accounts.google.com/logout');
}).catch(function(error) {
  // Error occurred.
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


    /////////////////////////////////////////////////////////
    firebase.database().ref(`CurrentUser/${res12}`).on('value', (snapshot) => {
        snapshot.forEach(function (data) {
            var current_user = data.val();
            console.log(current_user)
            // ...
            document.getElementById("SendUser").innerHTML = current_user;


            if (current_user == null) {
                alert("Select the user from the left sidebar named select contacts to chat with them")
            }
        
        
            let str=current_user;
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
        
        
            alert("Message Sent");
            location.reload();


        })

    })
}




let showIt = () => {
    document.getElementById("Add").style.display = "block";
}


let closeIt = () => {
    document.getElementById("Add").style = "display:none";
}







////////////////////////////////////////////////////////////////////////////////////

