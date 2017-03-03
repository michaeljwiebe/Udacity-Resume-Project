/*
$("#main").append("Michael J. Wiebe");
var awesomeThoughts = "I am Michael and I am AWESOME!";
console.log(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
console.log(funThoughts);

var bio = {
  "name" : "Michael J. Wiebe",
  "role" : "Web Developer",
  "skills" : "HTML, CSS, JS, bicycles",
  "picture" : img, //supposedly can also "images/me.jpg"?
  "welcome" : "Thank you for visiting my site! I hope to meet you soon."
}
//add key:value pairs to object using dot notation
bio.city = "Philadelphia"
//or bracket notation, var defined earlier
bio["email"] = "wiebe.michael.j@g"
//work.position = "process improvement Specialist"

var name = "Michael J. Wiebe";

var skills = "Front-end web dev, customer relations, Photography";

$("#main").append(bio.skills);
$("#main").prepend(bio.picture);
$("#main").append(bio.welcome);
$("#main").append(bio.email);
$("#main").prepend(bio.city);
$("#main").append(education.yearGraduated);
$("#main").append(work.position);
*/


var bio = {
  "name" : "Michael J. Wiebe",
  "role" : "Freelance Front-End Web Developer",
  "skills" : ["HTML", "CSS", "JS", "Process Improvement", "Lean Principles and Methodology", "bicycles"],
  "picture" : "images/me.jpg",
  "welcome" : "Thank you for visiting my site! I hope to meet you soon.",
  "location" : "Philadelphia, Pennsylvania",
  "contacts" : [ {
    "email" : "michaelwiebe@email.com",
    "phone" : "1-574-123-4567",
    "skype" : "michaelwiebe",
    "github" : "https://github.com/michaeljwiebe"
  }]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedBioPic);

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
  $("#skills").append(formattedSkill);
}

var contactDisplay = function() {
  bio.contacts.forEach(function(contact){
    var formattedMobile = HTMLmobile.replace("%data%",contact.phone);
    var formattedEmail = HTMLemail.replace("%data%",contact.email);
    var formattedSkype = HTMLcontactGeneric.replace("%contact%","skype").replace("%data%",contact.skype);
    var formattedGithub = HTMLgithub.replace("%data%",contact.github);
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
}

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
  "school" : "Goshen College",
  "major" : "Environmental Science",
  "location" : "Goshen, Indiana",
  "year" : 2013
}, {
  "school" : "Purdue University",
  "major" : "Biology",
  "location" : "West Lafayette, Indiana",
  "year" : "N//A"
} ],
"onlineCourses":
[ {
  "school": "Udacity",
  "degree": "Front-End Development Nanodegree",
  "location": "Philadelphia, Pennsylvania",
  "year": 2017
} ]
}

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
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
    $(".project-entry:last").append(formattedProjectTitle);
    $(".project-entry:last").append(formattedProjectDescription);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", project.date);
    $(".project-entry:last").append(formattedProjectDates);
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
