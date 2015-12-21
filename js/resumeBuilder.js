/* Javascript for Resume Project */

//Setup bio data
var bio = {
    'name': 'Ele O',
    'role': 'Web Developer',
    'contacts': {
        'mobile': '650-555-5555',
        'email': 'eleocholi@gmail.com',
        'github': 'https://github.com/ele0',
        'twitter': '@mr_eleo',
        'location': 'Mechanicville, NY'
    },
    'welcomeMessage': 'Hi! Welcome and thanks for checking out my resume!',
    'skills': ['JavaScript', 'HTML with CSS', 'Project Management', 'Java'],
    'biopic': 'images/fry.jpg',
    'display': function() {
        //Format and add most of the bio elements
        var formattedName = HTMLheaderName.replace('%data%', bio.name);
        var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
        var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
        var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
        var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
        var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
        var formattedPrimaryLocation = HTMLlocation.replace('%data%', bio.contacts.location);

        var formattedPic = HTMLbioPic.replace('%data%', bio.biopic);
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

        //Add the header elements to the page
        $('#header').prepend(formattedName, formattedRole);
        $('#topContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedPrimaryLocation);
        $('#footerContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedPrimaryLocation);
        $('#header').append(formattedPic, formattedWelcomeMessage);

        //Format and add in each skill
        if (Array.isArray(bio.skills) && (bio.skills.length > 0)) {
            $('#header').append(HTMLskillsStart);
            bio.skills.forEach(function(skill, index, array) {
                var fSkill = HTMLskills.replace('%data%', skill);
                $('#skills').append(fSkill);
            });
        }
    }
};


//Setup education data
var education = {
    'schools': [{
        'name': 'Massachusetts Institute of Technology',
        'location': 'Cambridge, MA',
        'degree': 'MEng',
        'majors': ['Computer Sci.'],
        'dates': 2009,
        'url': 'http://web.mit.edu'

    }, {
        'name': 'Massachusetts Institute of Technology',
        'location': 'Cambridge, MA',
        'degree': 'BSc',
        'majors': ['Electrical Eng. & Computer Sci.'],
        'dates': 2008,
        'url': 'http://web.mit.edu'
    }],
    'onlineCourses': [{
            'title': 'Front-end Web Developer Nanodegree',
            'school': 'Udacity',
            'date': 2016,
            'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
        }, {
            'title': 'Rapid Prototyping',
            'school': 'Udacity',
            'date': 2016,
            'url': 'https://www.udacity.com/course/rapid-prototyping--ud723'
        }, {
            'title': 'How to Use Git and GitHub',
            'school': 'Udacity',
            'date': 2015,
            'url': 'https://www.udacity.com/course/how-to-use-git-and-github--ud775'
        }

    ],
    'display': function() {
        if (education.schools && education.schools.length > 0) {
            education.schools.forEach(function(school) {
                $('#education').append(HTMLschoolStart);
                var formattedSchoolName = HTMLschoolName.replace('%data%', school.name);
                var formattedDegree = HTMLschoolDegree.replace('%data%', school.degree);
                var formattedDates = HTMLschoolDates.replace('%data%', school.dates);
                var formattedLocation = HTMLschoolLocation.replace('%data%', school.location);
                $('.education-entry:last').append((formattedSchoolName + formattedDegree), formattedDates, formattedLocation);
                school.majors.forEach(function(major) {
                    $('.education-entry:last').append(HTMLschoolMajor.replace('%data%', major));
                });

            });
        }

        //display online classes
        if (education.onlineCourses && education.onlineCourses.length > 0) {
            $('#education').append(HTMLonlineClasses);
            education.onlineCourses.forEach(function(course) {
                $('#education').append(HTMLonlineClassStart);
                var formattedOTitle = HTMLonlineTitle.replace('%data%', course.title);
                var formattedOSchool = HTMLonlineSchool.replace('%data%', course.school);
                var formattedODates = HTMLonlineDates.replace('%data%', course.date);
                var formattedOURL = HTMLonlineURL.replace('%data', course.url);
                $('.education-entry:last').append((formattedOTitle + formattedOSchool), formattedODates, formattedOURL);
            });

        }
    }
};

//Setup work data
var work = {
    'jobs': [{
            'employer': 'Telecomsoft Incorporated',
            'title': 'Cool Position Analyst',
            'location': 'Paris, France',
            'dates': 'June 2010 - Present',
            'description': '• Assessed financial risks involved with participating in online advertising-space exchanges <br>• Devised bidding policies for auctions at the exchanges that led to victories three times out of five and built mathematical models around these policies to increase the company’ s margin from online ad - spaces by 5 % '
        }, {
            'employer': 'MIT Sloan School of Management',
            'title': 'Undergraduate Researcher',
            'location': 'Cambridge, MA',
            'dates': 'June 2010 - October 2010',
            'description': '• Conducted experimental prediction markets with human and artificial intelligence to find the best tools to predict future events such as election - results or the stock market <br>•Developed an experiment - procedure online that reduced bias by eliminating involvement of the experimenter and saved two hours and $200 per experiment '
        }, {

            'employer': 'MIT Center for Collective Intelligence',
            'title': 'Undergraduate Researcher',
            'location': 'Cambridge, MA',
            'dates': 'June 2010 - October 2010',
            'description': '• Conducted individual and group IQ/EQ tests on human subjects to formulate ways to measure and predict the performance of individuals working as part of a team and the efficacy of the team dynamic <br>• Saved four hours of experiment-time per day by redesigning the experiment-procedure so that each experiment could be held with three fewer researchers and up to six experiments could be held at the same time '
        }, {
            'employer': 'MIT Tech Callers',
            'title': 'Caller',
            'location': 'Cambridge, MA',
            'dates': 'February 2010 - June 2010',
            'description': '• Communicated with MIT alumni on behalf of the MIT Alumni Association and raised $5,000 in donations'
        }

    ],
    'display': function() {
        //Add Work into index.html
        if (this.jobs && this.jobs.length > 0) {
            this.jobs.forEach(function(job) {
                $('#workExperience').append(HTMLworkStart);
                var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
                var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
                var formattedDates = HTMLworkDates.replace('%data%', job.dates);
                var formattedLocation = HTMLworkLocation.replace('%data%', job.location);
                var formattedDescription = HTMLworkDescription.replace('%data%', job.description);
                $('.work-entry:last').append((formattedEmployer + formattedTitle), formattedDates, formattedLocation, formattedDescription);

            });
        }
    }

};

// Setup Projects data
var projects = {
    'projects': [{
        'title': 'Web portfolio',
        'dates': 'October 2015',
        'description': 'A portfolio page of web projects',
        'images': [
            'images/MyPortfolio_screenshot1.jpg', 'images/MyPortfolio_screenshot2.jpg'
        ]
    }, {
        'title': 'Resume',
        'dates': 'November 2015',
        'description': 'An online resume',
        'images': [
            'http://www.unsplash.it/300/200/?random', 'http://www.unsplash.it/300/200/?random'
        ]
    }],
    'display': function() {
       if (this.projects && this.projects.length > 0) {
            this.projects.forEach(function(project){
                $('#projects').append(HTMLprojectStart);
                var formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
                var formattedDates = HTMLprojectDates.replace('%data%', project.dates);
                var formattedDescription = HTMLprojectDescription.replace('%data%', project.description);
                $('.project-entry:last').append(formattedTitle, formattedDates, formattedDescription);
                project.images.forEach(function(imgUrl) {
                    $('.project-entry:last').append(HTMLprojectImage.replace('%data%', imgUrl));
                });
            });
        }
    }
};


// Change format of Bio name to be "Firstname LASTNAME"
function inName() {
    var names = bio.name.trim().split(' ');
    var firstname = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
    var lastname = names[1].toUpperCase();
    return firstname + ' ' + lastname;

}

//Run display code of all sections
bio.display();
work.display();
projects.display();
education.display();

//Add button to modify format of Name
$('#main').append(internationalizeButton);
// Add map to resume
$('#mapDiv').append(googleMap);
