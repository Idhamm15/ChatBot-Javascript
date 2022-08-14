function talk(){
    var know = {

        "who are you" : "Hello, Codewith_random here",
        "How are you" : "Good :)",
        "What can i do for you" : "Please Give us A follow & Like",
        "Your followers" : "I have my family off 5000 members, i don't have followers, have supportive Family",
        "Ok" : "Thank you So Much",
        "Bye" : "Okey! will meet soon..",
    
     };
    var user = document.getElementById('userbox').value;
        document.getElementById('chatlog').innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById('chatlog').innerHTML = know[user] + "<br>";
    }else{
        document.getElementById('chatlog').innerHTML = "Sorry, I didn't understand <br>";

    }
}