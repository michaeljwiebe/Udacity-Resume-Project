var bio = {
  "name" : "Michael J. Wiebe",
  "role" : "Freelance Front-End Web Developer",
  "skills" : ["HTML", "CSS", "JS", "Process Improvement", "Lean Principles and Methodology", "Spanish", "French","Bicycles"],
  "picture" : "images/johanAndMe.jpg",
  "welcome" : "Thank you for visiting my site! I hope to meet you soon.",
  "location" : "Philadelphia, Pennsylvania",
  "contacts" : [ {
    "email" : "michaelwiebe@email.com",
    "phone" : "1-574-123-4567",
    "skype" : "michaelwiebe00",
    "github" : "<a id='github' href='https://github.com/michaeljwiebe'>github.com/michaeljwiebe</a>"
  }]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedBioPic);

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var i = 0;
  while (i < bio.skills.length) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill);
    i++;
}}

var contactDisplay = function() {
  bio.contacts.forEach(function(contact){
    var formattedMobile = HTMLmobile.replace("%data%",contact.phone);
    var formattedEmail = HTMLemail.replace("%data%",contact.email);
    var formattedSkype = HTMLcontactGeneric.replace("%contact%","skype").replace("%data%",contact.skype);
    var formattedGithub = HTMLgithub.replace("%data%",contact.github);
    $("#topContacts").append(formattedMobile,formattedEmail,formattedSkype,formattedGithub);
    $("#footerContacts").append(formattedMobile,formattedEmail,formattedSkype,formattedGithub);
  });
};
contactDisplay();


var work = {
  jobs :
[ {
  "employer" : "Aluminum Trailer Company",
  "yearsWorked" : 2,
  "date" : "07/2014 to 06/2016",
  "city" : "Nappanee, Indiana",
  "position" : "PI and Training Coordinator",
  "description" : "Adapted training system and methodology for use in factory and applied improvements in various environments",
  "location" : "Nappanee, Indiana"
},{
  "employer" : "Hope Builders Group",
  "yearsWorked" : 1,
  "date" : "06/2013 to 06/2014",
  "city" : "Elkhart, Indiana",
  "position" : "Lean Change Agent",
  "description" : "Initiated and drove cultural change across organization",
  "location": "Elkhart, Indiana"
} ]
};

var workDisplay = function() {
  work.jobs.forEach(function(job) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",job.position);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDate = HTMLworkDates.replace("%data%",job.date);
    $(".work-entry:last").append(formattedDate);
    var formattedDescription = HTMLworkDescription.replace("%data%",job.description);
    $(".work-entry:last").append(formattedDescription);
  });
};
workDisplay();

var education = {
  "schools":
[ {
  "school" : "New York Code and Design Academy",
  "major" : "Web Development Intensive",
  "degree" : "Certificate",
  "location" : "Philadelphia, PA",
  "dates" : "April - June 2017"
}, {
  "school" : "Goshen College",
  "major" : "Environmental Science",
  "degree" : "Bachelor's",
  "location" : "Goshen, Indiana",
  "dates" : "2011 - 2013"
}, {
  "school" : "Purdue University",
  "major" : "Biology",
  "degree" : "no degree",
  "location" : "West Lafayette, Indiana",
  "dates" : "2007 - 2008"
} ],
"onlineCourses":
[ {
  "school" : "Udacity",
  "title": "Front-End Nanodegree",
  "classes": "HTML, CSS, JS, jQuery",
  "url": "www.udacity.com",
  "dates": "January - April 2017"
} ]
};

var educationDisplay = function() {
  education.schools.forEach(function(ed) {
    $("#education").append(HTMLschoolStart);
    var formattedSchool = HTMLschoolName.replace("%data%",ed.school);
    $(".education-entry:last").append(formattedSchool);
    var formattedDates = HTMLschoolDates.replace("%data%",ed.dates);
    $(".education-entry:last").append(formattedDates);
    var formattedMajor = HTMLschoolMajor.replace("%data%",ed.major);
    $(".education-entry:last").append(formattedMajor);
    var formattedDegree = HTMLschoolDegree.replace("%data%",ed.degree);
    $(".education-entry:last").append(formattedDegree);
    var formattedLocation = HTMLschoolLocation.replace("%data%",ed.location);
    $(".education-entry:last").append(formattedLocation);
  });
  education.onlineCourses.forEach(function(online) {
    $("#education").append(HTMLonlineClasses);
    var formattedSchool = HTMLonlineSchool.replace("%data%",online.school);
    $(".education-entry:last").append(formattedSchool);
    var formattedTitle = HTMLonlineTitle.replace("%data%",online.title);
    $(".education-entry:last").append(formattedTitle);
    var formattedClasses = HTMLonlineClasses.replace("%data%",online.classes);
    $(".education-entry:last").append(formattedClasses);
    var formattedURL = HTMLonlineURL.replace("%data%",online.url);
    $(".education-entry:last").append(formattedURL);
    var formattedDates = HTMLonlineDates.replace("%data%",online.dates);
    $(".education-entry:last").append(formattedDates);
  });
};
educationDisplay();

var projects = {
  "websites":
  [ {
    "website": "http://www.michaelwiebe.net",
    "date": "February 2017",
    "title": "Semi-Professional Photography Portfolio",
    "description": "Photography exhibition",
    "images": [
      "images/portrait.jpg",
      "images/flower.jpg",
      "images/dance.jpg",
      "images/party.jpg"]
  }, {
    "website": "www.github.com/michaeljwiebe",
    "date": "March 2017",
    "title": "Web Development Portfolio",
    "images": ["images/github.png"],
    "description": "exhibition of JavaScript and jQuery skills"
  } ]
};

var projectsDisplay = function() {
  projects.websites.forEach(function(project) {
    $("#projects").append(HTMLprojectStart);
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
    $(".project-entry:last").append(formattedProjectTitle);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", project.date);
    $(".project-entry:last").append(formattedProjectDates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
    $(".project-entry:last").append(formattedProjectDescription);
    project.images.forEach(function(image) {
      var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
      $(".project-entry:last").append(formattedProjectImage);
    });
  });
};
projectsDisplay();

$("#mapDiv").append(googleMap);

$("#main").append(internationalizeButton);

function inName(name) {
  name = name.trim().split(" ");
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}

console.log(inName("michael wiebe"));
