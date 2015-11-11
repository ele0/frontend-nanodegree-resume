/* Javascript for Resume Project */

var bio = {
	"name": "Ele O",
	"role": "Web Developer",
	"email": "eleocholi@gmail.com",
	"github": "https://github.com/ele0",
	"pictureUrl": "http://web.mit.edu/cron/group/house_n/images/ele150.jpg",
	"message" : "Hi! Welcome and thanks for checking out my resume!",
	"skills" : ["Javascript", "HTML with CSS", "Project Management"]
}

//Format most of the bio elements
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%", bio.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.github);

var formattedPic = HTMLbioPic.replace("%data%", bio.pictureUrl);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.message);

//Add the header elements to the page
$("#header").prepend(formattedName,formattedRole);
$("#topContacts").append(formattedEmail, formattedGithub);
$("#header").append(formattedPic, formattedWelcomeMessage, HTMLskillsStart);

//Format and add in each skill
bio.skills.forEach(function (skill,index,array){
	var fSkill = HTMLskills.replace("%data%", skill);
	$("#skills-h3").append(fSkill);
});
