var formatData = function(format, data) {
    //function that replaces Data placeholder(%data%) in the format with the data
    return (format.replace("%data%", data));
};

var formatURL = function(format, url) {
    //function that replaces URL placeholder(#) in the format with the URL
    return (format.replace("#", url));
};

var internationalizeName = function(name) {
    //function that formats the name to International Name standard
    return (name.charAt(0).toUpperCase() + name.slice(1, name.indexOf(" ")).toLowerCase() + name.slice(name.indexOf(" ")).toUpperCase());
};

var bio = {
    //Object containing all personal details of the person
    "name": "Gladwin Prince",
    "role": "Front-End Web Developer",
    "contacts": {
        //Object containing contact details of the person
            "mobile": "9876543210",
            "email": "mail@GladwinPrince.com",
            "twitter": "https://twitter.com/GladwinPrince",
            "github": "https://github.com/GladwinPrince/",
            "location": "Madurai, Tamil Nadu, India"
    },
    "biopic": "images/me.jpg",
    "welcomeMessage": "Hi, I am Gladwin Prince. I am a Front-End Web Developer. I am interested in programming, testing of beta softwares and occasionally gaming.",
    "skills": ["Java", "Java Servlets", "Java Servlet Pages (JSP)", "HyperText Markup Language (HTML)", "Cascading Stylesheets (CSS)", "JavaScript"],
    "display": function() {
        //display function for the personal details
        $("#header").prepend(formatData(HTMLheaderRole, bio.role));
        $("#header").prepend(formatData(HTMLheaderName, internationalizeName(bio.name)));
        $("#header").append(formatData(HTMLbioPic, bio.biopic));
        $("#header").append(formatData(HTMLWelcomeMsg, bio.welcomeMessage));
        $("#header").append(HTMLskillsStart);
        for(var i=0; i<bio.skills.length; i++){
            $("#skills").append(formatData(HTMLskills, bio.skills[i]));
        }
        //appending contact details to IDs #topContacts and #footerContacts
        $("#topContacts, #footerContacts").append(formatData(HTMLmobile, bio.contacts.mobile));
        $("#topContacts, #footerContacts").append(formatData(HTMLemail, bio.contacts.email));
        $("#topContacts, #footerContacts").append(formatData(HTMLtwitter, bio.contacts.twitter));
        $("#topContacts, #footerContacts").append(formatData(HTMLgithub, bio.contacts.github));
        $("#topContacts, #footerContacts").append(formatData(HTMLlocation, bio.contacts.location));
    }
};

var work = {
    //Object containing work details of the person
    "jobs": [{
            "employer": "Udacity",
            "title": "Front-End Web Developer",
            "dates": "2015-Present",
            "location": "Madurai, Tamil Nadu, India",
            "url": "https://udacity.com",
            "description": "I design Web pages :)"
        },
        {
            "employer": "Infosys",
            "title": "Front-End Web Developer",
            "dates": "2013-2015",
            "location": "Chennai, Tamil Nadu, India",
            "url": "https://www.infosys.com",
            "description": "I design Web pages (:"
        }],
    "display": function() {
        //display function for the work details
        for(var i=0; i<work.jobs.length; i++){
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(formatURL(formatData(HTMLworkEmployer, work.jobs[i].employer), work.jobs[i].url));
            $(".work-entry:last").append(formatData(HTMLworkTitle, work.jobs[i].title));
            $(".work-entry:last").append(formatData(HTMLworkDates, work.jobs[i].dates));
            $(".work-entry:last").append(formatData(HTMLworkLocation, work.jobs[i].location));
            $(".work-entry:last").append(formatData(HTMLworkDescription, work.jobs[i].description));
        }
    }
};

var education = {
    //Object containing education details of the person
    "schools": [{
            "name": "Karunya University",
            "degree": "B.Tech",
            "dates": "2009-2013",
            "location": "Coimbatore, Tamil Nadu, India",
            "majors": "Electronics and Communications",
            "url": "https://karunya.edu"
        },
        {
            "name": "Vikaasa School",
            "degree": "High School",
            "dates": "2007-2009",
            "location": "Madurai, Tamil Nadu, India",
            "majors": "Computer Science",
            "url": "http://vikaasa.edu.in/vikaasa/"
        }],
    "onlineCourses": [{
            "title": "Front-End Web Developer",
            "school": "Udacity",
            "dates": "2013",
            "url": "https://in.udacity.com/course/front-end-web-developer-nanodegree--nd001/"
    }],
    "display": function() {
        //display function for the education details
        for(var i=0; i<education.schools.length; i++){
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formatURL(formatData(HTMLschoolName, education.schools[i].name), education.schools[i].url));
            $(".education-entry:last").append(formatData(HTMLschoolDegree, education.schools[i].degree));
            $(".education-entry:last").append(formatData(HTMLschoolDates, education.schools[i].dates));
            $(".education-entry:last").append(formatData(HTMLschoolLocation, education.schools[i].location));
            $(".education-entry:last").append(formatData(HTMLschoolMajor, education.schools[i].majors));
        }

        $("#education").append(HTMLonlineClasses);

        for(i=0; i<education.onlineCourses.length; i++){
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formatURL(formatData(HTMLonlineTitle, education.onlineCourses[i].title), education.onlineCourses[i].url));
            $(".education-entry:last").append(formatData(HTMLonlineSchool, education.onlineCourses[i].school));
            $(".education-entry:last").append(formatData(HTMLonlineDates, education.onlineCourses[i].dates));
            $(".education-entry:last").append(formatURL(formatData(HTMLonlineURL, education.onlineCourses[i].url), education.onlineCourses[i].url));
        }
    }
};

var projects = {
    //Object containing Project details of the person
        "projects": [{
            "title": "Smart Parking Management System using IoT",
            "dates": "2013",
            "description": "A IoT based Parking Management system that keeps track of the parking spaces available.",
            "images": ["https://i.ytimg.com/vi/jtqKyuTId80/maxresdefault.jpg", "https://i.ytimg.com/vi/56AiTPYecTM/maxresdefault.jpg", "https://i.ytimg.com/vi/t6lEPNM57yo/maxresdefault.jpg"],
            "url": "https://google.com"
        },
        {
            "title": "Attendance Management System using NFC",
            "dates": "2012",
            "description": "A NFC based Attendance Management system that keeps track of the students and teachers who have checked In and checked Out.",
            "images": ["https://cdn.instructables.com/FU0/9JTK/I8J9Y6Z3/FU09JTKI8J9Y6Z3.MEDIUM.jpg", "http://www.electroschematics.com/wp-content/uploads/2015/02/arduino-rfid-security-system-board.jpg", "https://cdn.itead.cc/media/blog/mirror/en/uploads/image/2015_05/Arduino-based-time-attendance-system-1.jpg"],
            "url": "https://google.com"
        }],
        "display": function() {
            //display function for the project details
            for(var i=0; i<projects.projects.length; i++){
                $("#projects").append(HTMLprojectStart);
                $(".project-entry:last").append(formatURL(formatData(HTMLprojectTitle, projects.projects[i].title), projects.projects[i].url));
                $(".project-entry:last").append(formatData(HTMLprojectDates, projects.projects[i].dates));
                $(".project-entry:last").append(formatData(HTMLprojectDescription, projects.projects[i].description));
                for(var j=0; j<projects.projects[i].images.length;j++){
                    $(".project-entry:last").append(formatData(HTMLprojectImage, projects.projects[i].images[j]));
                }
            }
        }
};

//Calling display functions of bio, work, education and projects to append person details to HTML
bio.display();
work.display();
education.display();
projects.display();
//appending googleMap data to HTMl
$("#mapDiv").append(googleMap);
