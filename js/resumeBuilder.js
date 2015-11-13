/* Javascript for Resume Project */

//Setup bio data
var bio = {
    'name': 'Ele O',
    'role': 'Web Developer',
    'welcomeMessage': 'Hi! Welcome and thanks for checking out my resume!',
    'contacts': {
        'mobile': '650-555-5555',
        'email': 'eleocholi@gmail.com',
        'github': 'https://github.com/ele0'
    }
    //'pictureUrl': 'http://web.mit.edu/cron/group/house_n/images/ele150.jpg',
    'skills': ['JavaScript', 'HTML with CSS', 'Project Management']
};


//Setup education data
var education = {
    'schools': [{
        'name': 'Massachusetts Institute of Technology',
        'location': 'Cambridge, MA',
        'dates': '2009',
        'degree': 'MEng',
        'majors': ['Computer Sci.'],
        'url': 'http://web.mit.edu'

    }, {
        'name': 'Massachusetts Institute of Technology',
        'location': 'Cambridge, MA',
        'dates': '2008',
        'degree': 'BSc',
        'majors': ['Electrical Eng. & Computer Sci.'],
        'url': 'http://web.mit.edu'
    }],
    'onlineCourses': [{
            'title': 'Front-end Web Developer Nanodegree',
            'School': 'Udacity',
            'dates': 'October 2015 - December 2015',
            'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
        }, {
            'title': 'Rapid Prototyping',
            'School': 'Udacity',
            'dates': 'October 2015 - December 2015',
            'url': 'https://www.udacity.com/course/rapid-prototyping--ud723'
        }, {
            'title': 'How to Use Git and GitHub',
            'School': 'Udacity',
            'dates': 'November 2015',
            'url': 'https://www.udacity.com/course/how-to-use-git-and-github--ud775'
        }

    ]

};

//Setup work data
var work = {
    'jobs': [{
            'employer': 'Telecomsoft Incorporated',
            'title': 'Cool Position Analyst',
            'location': 'Paris, France',
            'dates': 'June 2010 - Present',
            'description': 'Assessed financial risks involved with participating in online advertising-space exchanges' +
                '• Devised bidding policies for auctions at the exchanges that led to victories three times out of five and built mathematical models
            around these policies to increase the company’ s margin from online ad - spaces by 5 % '
        }, {
            'employer': 'MIT Sloan School of Management',
            'title': 'Undergraduate Researcher',
            'location': 'Cambridge, MA',
            'dates': 'June 2010 - October 2010',
            'description': '• Conducted experimental prediction markets with human and artificial intelligence to find the best tools to predict future events such as
            election - results or the stock market ' + '•
            Developed an experiment - procedure online that reduced bias by eliminating involvement of the experimenter and saved two hours
            and $200 per experiment '
        }, {

            'employer': 'MIT Center for Collective Intelligence',
            'title': 'Undergraduate Researcher',
            'location': 'Cambridge, MA',
            'dates': 'June 2010 - October 2010',
            'description': '• Conducted individual and group IQ/EQ tests on human subjects to formulate ways to measure and predict the performance of
            individuals working as part of a team and the efficacy of the team dynamic ' +
            '• Saved four hours of experiment-time per day by redesigning the experiment-procedure so that each experiment could be held with
            three fewer researchers and up to six experiments could be held at the same time '
        }, {
            'employer': 'MIT Tech Callers',
            'title': 'Caller',
            'location': 'Cambridge, MA',
            'dates': 'February 2010 - June 2010',
            'description': 'Communicated with MIT alumni on behalf of the MIT Alumni Association and raised $5,000 in donations'
        }

    ]

};

// Setup Projects data
// TODO: Add in URLs
var projects = {
    'projects': [{
        'title': 'Web portfolio',
        'dates': 'October 2015',
        'description': 'A portfolio page of web projects',
        'images': [
            '', ''
        ]
    }, {
        'title': 'Resume',
        'dates': 'November 2015',
        'description': 'An online resume',
        'images': [
            '', ''
        ]
    }]
};





/*
//Format most of the bio elements
var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
var formattedEmail = HTMLemail.replace('%data%', bio.email);
var formattedGithub = HTMLgithub.replace('%data%', bio.github);

var formattedPic = HTMLbioPic.replace('%data%', bio.pictureUrl);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.message);

//Add the header elements to the page
$('#header').prepend(formattedName,formattedRole);
$('#topContacts').append(formattedEmail, formattedGithub);
$('#header').append(formattedPic, formattedWelcomeMessage, HTMLskillsStart);

//Format and add in each skill
bio.skills.forEach(function (skill,index,array){
	var fSkill = HTMLskills.replace('%data%', skill);
	$('#skills-h3').append(fSkill);
});
*/

//Add them into index.html
//$('#workExperience').append(HTMLworkStart, work['position']);
