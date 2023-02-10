function Talk(){
var Know = {
"Who Are You" : "Hello, Codewith_random Here ",
"How Are You" : "Good :)",
"What Can I Do For You" : "Please Give Us A Follow & Like.",
"Your Followers" : "I Have My Family Of 5000 Members, I Don't Have Follower ,Have Supportive Famiy ",
"Ok" : "Thank You So Much ",
"Bye" : "Okay! Will Meet Soon.."
};
var User = document.getElementById('UserBox').Value;
document.getElementById('ChatLog').InnerHTML = User + "<Br>";
if(User In Know) {
document.getElementById('ChatLog').InnerHTML = Know[User] + "<Br>";
}
else{
document.getElementById('ChatLog').InnerHTML = "Sorry,I Didn't Understand <Br>";
}
}