var bio={
    "name":"Gladwin Prince",
    "role":"Front-End Web Developer",
    "mobile":9876543210,
    "mail":"mail@GladwinPrince.com",
    "twitter":"https://twitter.com/GladwinPrince",
    "github":"https://github.com/GladwinPrince/",
    "location":"Madurai, Tamil Nadu, India",
    "picture":"images/me.jpg",
    "welcomeMsg":"Hi, I am Gladwin Prince",
    "skills":["Java","Java Servlets","Java Servlet Pages (JSP)","HyperText Markup Language (HTML)","Cascading Stylesheets (CSS)","JavaScript"]
};

var work={
    "employer":"Udacity",
    "title":"Front-End Web Developer",
    "duration":"3 years",
    "location":"Madurai, Tamil Nadu, India",
    "description":"I design Web pages :)"
};

var education={
    "name":"Karunya University",
    "degree":"B.Tech",
    "duration":"4 years",
    "location":"Coimbatore, Tamil Nadu, India",
    "major":"Electronics and Communications"
};

var bioName=HTMLheaderName.replace("%data%",bio.name);
var bioRole=HTMLheaderRole.replace("%data%",bio.role);
var bioMobile=HTMLmobile.replace("%data%",bio.mobile);
var bioMail=HTMLemail.replace("%data%",bio.mail);
var bioTwitter=HTMLtwitter.replace("%data%",bio.twitter);
var bioGithub=HTMLgithub.replace("%data%",bio.github);
var bioLocation=HTMLlocation.replace("%data%",bio.location);
var bioPicture=HTMLbioPic.replace("%data%",bio.picture);
var bioWelcomeMsg=HTMLWelcomeMsg.replace("%data%",bio.welcomeMsg);
var bioSkills=[];
for(var i=0;i<bio.skills.length;i++){
     bioSkills.push(HTMLskills.replace("%data%",bio.skills[i]));
}

var workEmployer=HTMLworkEmployer.replace("%data%",work.employer);
var workTitle=HTMLworkTitle.replace("%data%",work.title);
var workDuration=HTMLworkDates.replace("%data%",work.duration);
var workLocation=HTMLworkLocation.replace("%data%",work.location);
var workDescription=HTMLworkDescription.replace("%data%",work.description);

var schoolName=HTMLschoolName.replace("%data%",education["name"]);
var schoolDegree=HTMLschoolDegree.replace("%data%",education["degree"]);
var schoolDuration=HTMLschoolDates.replace("%data%",education["duration"]);
var schoolLocation=HTMLschoolLocation.replace("%data%",education["location"]);
var schoolMajor=HTMLschoolMajor.replace("%data%",education["major"]);

$("#header").prepend(bioRole);
$("#header").prepend(bioName);
$("#header").append(bioPicture);
$("#header").append(bioWelcomeMsg);
$("#header").append(HTMLskillsStart);
for(i in bioSkills){
    $("#skills").append(bioSkills[i]);
}
$("#topContacts").append(bioMobile);
$("#topContacts").append(bioMail);
$("#topContacts").append(bioTwitter);
$("#topContacts").append(bioGithub);
$("#topContacts").append(bioLocation);
$("#footerContacts").append(bioMobile);
$("#footerContacts").append(bioMail);
$("#footerContacts").append(bioTwitter);
$("#footerContacts").append(bioGithub);
$("#footerContacts").append(bioLocation);

$("#workExperience").append(HTMLworkStart);
$(".work-entry").append(workEmployer);
$(".work-entry").append(workTitle);
$(".work-entry").append(workDuration);
$(".work-entry").append(workLocation);
$(".work-entry").append(workDescription);

$("#education").append(HTMLschoolStart);
$(".education-entry").append(schoolName);
$(".education-entry").append(schoolDegree);
$(".education-entry").append(schoolDuration);
$(".education-entry").append(schoolLocation);
$(".education-entry").append(schoolMajor);
