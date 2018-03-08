var s = '{"first_name" : "James", "last_name" : "Sloan", "location" : "Idaho"}';

var user_profile = {
  "username" : "Koredan",
  "social_media" : [
    {
      "description" : "twitter",
      "link" : "https://twitter.com/Koredan"
    },
    {
      "description" : "facebook",
      "link" : "https://www.facebook.com/Koredan"
    },
    {
      "description" : "github",
      "link" : "https://github.com/Sloan-James"
    }
  ]
};

function user(){
    var obj = JSON.parse(s);

    document.getElementById("user").innerHTML =
        "Name: " + obj.first_name + " " + obj.last_name + "<br>" +
            "Location: " + obj.location;
}

function stringify() {
    var userStr = JSON.stringify(user_profile);
    document.getElementById('stringify').innerHTML = userStr;
}
