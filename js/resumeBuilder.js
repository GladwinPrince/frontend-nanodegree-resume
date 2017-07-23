var formatData= function(format,data){
    return (format.replace("%data%",data));
}

var formatURL= function(format,url){
    return (format.replace("#",url));
}

var internationalizeName= function(name){
    return (name.charAt(0).toUpperCase()+name.slice(1,name.indexOf(" ")).toLowerCase()+name.slice(name.indexOf(" ")).toUpperCase());
}

var bio={
    "name":"Gladwin Prince",
    "role":"Front-End Web Developer",
    "contacts":{
            "mobile":9876543210,
            "mail":"mail@GladwinPrince.com",
            "twitter":"https://twitter.com/GladwinPrince",
            "github":"https://github.com/GladwinPrince/",
            "location":"Madurai, Tamil Nadu, India"
    },
    "picture":"images/me.jpg",
    "welcomeMsg":"Hi, I am Gladwin Prince. I am a Front-End Web Developer. I am interested in programming, testing of beta softwares and occasionally gaming.",
    "skills":["Java","Java Servlets","Java Servlet Pages (JSP)","HyperText Markup Language (HTML)","Cascading Stylesheets (CSS)","JavaScript"],
    "display": function(){
        $("#header").prepend(formatData(HTMLheaderRole,bio.role));
        $("#header").prepend(formatData(HTMLheaderName,internationalizeName(bio.name)));
        $("#header").append(formatData(HTMLbioPic,bio.picture));
        $("#header").append(formatData(HTMLWelcomeMsg,bio.welcomeMsg));
        $("#header").append(HTMLskillsStart);
        for(var i=0; i<bio.skills.length; i++){
            $("#skills").append(formatData(HTMLskills,bio.skills[i]));
        }
        $("#topContacts").append(formatData(HTMLmobile,bio.contacts.mobile));
        $("#topContacts").append(formatData(HTMLemail,bio.contacts.mail));
        $("#topContacts").append(formatData(HTMLtwitter,bio.contacts.twitter));
        $("#topContacts").append(formatData(HTMLgithub,bio.contacts.github));
        $("#topContacts").append(formatData(HTMLlocation,bio.contacts.location));
        $("#footerContacts").append(formatData(HTMLmobile,bio.contacts.mobile));
        $("#footerContacts").append(formatData(HTMLemail,bio.contacts.mail));
        $("#footerContacts").append(formatData(HTMLtwitter,bio.contacts.twitter));
        $("#footerContacts").append(formatData(HTMLgithub,bio.contacts.github));
        $("#footerContacts").append(formatData(HTMLlocation,bio.contacts.location));
    }
};

var work={
    "jobs":[{
            "employer":"Udacity",
            "title":"Front-End Web Developer",
            "dates":"2015-Present",
            "location":"Madurai, Tamil Nadu, India",
            "url":"https://udacity.com",
            "description":"I design Web pages :)"
        },
        {
            "employer":"Infosys",
            "title":"Front-End Web Developer",
            "dates":"2013-2015",
            "location":"Chennai, Tamil Nadu, India",
            "url":"https://www.infosys.com",
            "description":"I design Web pages (:"
        }],
    "display": function(){
        for(var i=0; i<work.jobs.length; i++){
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(formatURL(formatData(HTMLworkEmployer,work.jobs[i].employer),work.jobs[i].url));
            $(".work-entry:last").append(formatData(HTMLworkTitle,work.jobs[i].title));
            $(".work-entry:last").append(formatData(HTMLworkDates,work.jobs[i].dates));
            $(".work-entry:last").append(formatData(HTMLworkLocation,work.jobs[i].location));
            $(".work-entry:last").append(formatData(HTMLworkDescription,work.jobs[i].description));
        }
    }
};

var education={
    "schools":[{
            "name":"Karunya University",
            "degree":"B.Tech",
            "dates":"2009-2013",
            "location":"Coimbatore, Tamil Nadu, India",
            "major":"Electronics and Communications",
            "url":"https://karunya.edu"
        },
        {
            "name":"Vikaasa School",
            "degree":"High School",
            "dates":"2007-2009",
            "location":"Madurai, Tamil Nadu, India",
            "major":"Computer Science",
            "url":"http://vikaasa.edu.in/vikaasa/"
        }],
    "onlineCourses":[{
            "title":"Front-End Web Developer",
            "school":"Udacity",
            "dates":"2013",
            "url":"https://udacity.com"
    }],
    "display": function(){
        for(var i=0; i<education.schools.length; i++){
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formatURL(formatData(HTMLschoolName,education.schools[i].name),education.schools[i].url));
            $(".education-entry:last").append(formatData(HTMLschoolDegree,education.schools[i].degree));
            $(".education-entry:last").append(formatData(HTMLschoolDates,education.schools[i].dates));
            $(".education-entry:last").append(formatData(HTMLschoolLocation,education.schools[i].location));
            $(".education-entry:last").append(formatData(HTMLschoolMajor,education.schools[i].major));
        }

        $("#education").append(HTMLonlineClasses);

        for(var i=0; i<education.onlineCourses.length; i++){
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formatURL(formatData(HTMLonlineTitle,education.onlineCourses[i].title),education.onlineCourses[i].url));
            $(".education-entry:last").append(formatData(HTMLonlineSchool,education.onlineCourses[i].school));
            $(".education-entry:last").append(formatData(HTMLonlineDates,education.onlineCourses[i].dates));
            $(".education-entry:last").append(formatURL(formatData(HTMLonlineURL,education.onlineCourses[i].url),education.onlineCourses[i].url));
        }
    }
};

var projects={
        "projects":[{
            "title":"Smart Parking Management System using IoT",
            "dates":"2013",
            "description":"A IoT based Parking Management system that keeps track of the parking spaces available.",
            "images":["https://i.ytimg.com/vi/jtqKyuTId80/maxresdefault.jpg","https://i.ytimg.com/vi/56AiTPYecTM/maxresdefault.jpg","https://i.ytimg.com/vi/t6lEPNM57yo/maxresdefault.jpg"],
            "url":"https://google.com"
        },
        {
            "title":"Attendance Management System using NFC",
            "dates":"2012",
            "description":"A NFC based Attendance Management system that keeps track of the students and teachers who have checked In and checked Out.",
            "images":["https://cdn.instructables.com/FU0/9JTK/I8J9Y6Z3/FU09JTKI8J9Y6Z3.MEDIUM.jpg","http://www.electroschematics.com/wp-content/uploads/2015/02/arduino-rfid-security-system-board.jpg","https://cdn.itead.cc/media/blog/mirror/en/uploads/image/2015_05/Arduino-based-time-attendance-system-1.jpg"],
            "url":"https://google.com"
        }],
        "display": function(){
            for(var i=0; i<projects.projects.length; i++){
                $("#projects").append(HTMLprojectStart);
                $(".project-entry:last").append(formatURL(formatData(HTMLprojectTitle,projects.projects[i].title),projects.projects[i].url));
                $(".project-entry:last").append(formatData(HTMLprojectDates,projects.projects[i].dates));
                $(".project-entry:last").append(formatData(HTMLprojectDescription,projects.projects[i].description));
                for(var j=0;j<projects.projects[i].images.length;j++){
                    $(".project-entry:last").append(formatData(HTMLprojectImage,projects.projects[i].images[j]));
                }
            }
        }
};

bio.display();
work.display();
education.display();
projects.display();
$("#mapDiv").append(googleMap);
initializeMap();
/*
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
*/
