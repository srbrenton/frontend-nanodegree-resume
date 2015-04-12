
var bio = {
	"name" : "Steve Brenton",
	"role" : "5ESS Systems Analyst",
	"contacts" : {
		"mobile": "562-555-1234",
		"email": "sbrenton@AnyISP.net",
		"github": "srbrenton",
		"twitter": "N/A",
		"location": "Long Beach, CA"
		},
	"picture" : "images/steve.jpg",
	"welcome" : "Web Developers, look out!",
	"skills" : [  "HTML", "PHP", "JavaScript", "C/Unix", "Perl", "Java", "$$\\TeX$$", "$$\\LaTeX$$", "5ESS", "1AESS" ],
};

bio.display = function() {

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedPicture = HTMLbioPic.replace("%data%", bio.picture);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedPicture);
	$("#header").append(formattedWelcome);

	for ( var key in bio.contacts ) {
		formattedContact = HTMLcontactGeneric.replace("%contact%",key);
		formattedContact = formattedContact.replace("%data%",bio.contacts[key]);
		$("#topContacts").append(formattedContact);
	}

	if ( bio.skills.length > 0 ) {
		$("#header").append(HTMLskillsStart);
		var index = 0;
		while ( index < bio.skills.length ) {
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[index++]));
		}
	}

	formattedContact = HTMLcontactGeneric.replace("%contact%","email");
	formattedContact = formattedContact.replace("%data%",bio.contacts.email);
	$("#footerContacts").append(formattedContact);

}

var work = {
	"jobs": [
		{
			"employer":	"Pacific Bell",
			"title":	"Systems Analyst",
			"location":	"Anaheim, CA",
			"dates":	"1987 - Current",
			"description":	"Tier 3 Switching System Support"
		},
		{
			"employer":	"Pacific Bell",
			"title":	"Switchman",
			"location":	"Santa Ana, CA",
			"dates":	"1980-1986",
			"description":	"1AESS & 5ESS Surveillance and Analysis"
		},
		{
			"employer":	"Pacific Bell",
			"title":	"Frameman",
			"location":	"Garden Grove, CA",
			"dates":	"1977-1979",
			"description":	"Install X-bar and Special Circuit Cross Connects"
		},
		{
			"employer":	"Pacific Bell",
			"title":	"Repair Clerk",
			"location":	"Orange, CA",
			"dates":	"1975-1976",
			"description":	"Answer 611 Telephone Repair Calls"
		},
		{
			"employer":	"Pacific Bell",
			"title":	"Frameman",
			"location":	"Orange, CA",
			"dates":	"1972-1973",
			"description":	"Install SxS and X-bar Cross Connects"
		},
		{
			"employer":	"Pacific Bell",
			"title":	"Motorized Messenger",
			"location":	"Orange, CA",
			"dates":	"1971-1972",
			"description":	"Deliver Company Mail"
		},
		{
			"employer":	"Arby's Roast Beef",
			"title":	"Worker",
			"location":	"Anaheim, CA",
			"dates":	"1970-1971",
			"description":	"Fast Food Worker"
		}
	],
	display: function() {
		for ( job in work.jobs ) {
			$("#workExperience").append(HTMLworkStart);
			var jobItem = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			jobItem += HTMLworkTitle.replace("%data%", work.jobs[job].title);
			$(".work-entry:last").append(jobItem);
			$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
			$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
		}
	}
}

var projects = {
	"project": [
		{
			"title":	"Search for Extraterrestial Intelligence with the Drake Equation",
			"dates":	"1996 - Ongoing",
			"description":	"Using MathJax: $$N = R^{*} \\cdot f_{p} \\cdot n_{e} \\cdot f_{l} \\cdot f_{i} \\cdot f_{c} \\cdot L$$",
			"images": [
					"images/setilogo.gif",
					"images/lion.png",
					"images/Aten_disk.jpg",
					"images/yoda.jpg"
				]
		},
		{
			"title":	"Cold Fusion",
			"dates":	"2011-2014",
			"description":	"Consulted with ancient Egyptians in order to provide the world with limitless energy - $$E=mc^{2}$$",
			"images": [
					"images/Aten_disk.jpg",
					"images/yoda.jpg",
					"images/lion.png"
				]
		},
		{
			"title":	"Milky Way Exploration",
			"dates":	"2008-2010",
			"description":	"Helped Luke Skywalker search for Yoda in the final frontier - $$\\infty$$",
			"images": [
					"images/yoda.jpg",
					"images/lion.png",
					"images/Aten_disk.jpg"
				]
		},
	],
	"display": function() {
		var myProject;
		var myImage;
		for ( myProject in projects.project ) {
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.project[myProject].title));
			$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.project[myProject].dates));
			$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.project[myProject].description));
			for ( var imageCount = 0; imageCount < projects.project[myProject].images.length; imageCount++ ) {
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.project[myProject].images[imageCount]));
			}
		}
	}
}

var education = {
	"schools": [
			{
				"name": "California State College Fullerton",
				"location": "Fullerton, CA",
				"degree": "na",
				"majors":["English"],
				"dates": "1974-1975",
				"url": "http://www.fullerton.edu"
			},
			{
				"name": "California State College Fullerton (CSUF)",
				"location": "Fullerton, CA",
				"degree": "na",
				"majors":["Music"],
				"dates": "1970-1971",
				"url": "http://www.fullerton.edu"
			},
			{
				"name": "Loara High School",
				"location": "Anaheim, CA",
				"degree": "HS Dilploma",
				"majors":["College Prep"],
				"dates": "1967-1970",
				"url": "http://loara.auhsd.k12.ca.us/"
			},
			{
				"name": "Robert M. Pyles Elementary School",
				"location": "Stanton, CA",
				"degree": "3rd - 5th Grade",
				"majors":["Arithmetic", "Report Writing", "Reading"],
				"dates": "1961-1964",
				"url": "http://www.msd.k12.ca.us/index.php/rmp-home"
			},
			{
				"name": "Marshall Elementary School",
				"location": "Anaheim, CA",
				"degree": "2nd Grade",
				"majors":["Arithmetic", "Cursive Writing", "Reading"],
				"dates": "1960-1961",
				"url": "http://marshall.acsd.us/"
			},
			{
				"name": "Cory Elementary School",
				"location": "Denver, CO",
				"degree": "1st Grade",
				"majors":["Arithmetic", "Printing", "Finger Painting"],
				"dates": "1959-1960",
				"url": "http://cory.dpsk12.org/"
			}
	],
	"onlineCourses": [
			{
				"title": "R Programming",
				"school": "Coursera",
				"dates": "2014",
				"url": "https://www.coursera.org/course/rprog"
			},
			{
				"title": "Intro to HTML and CSS",
				"school": "Udacity",
				"dates": "2015",
				"url": "https://www.udacity.com/course/ud304"
			}
	],
	display: function() {

		var formattedSchoolName;
		$("#education").append(HTMLschoolStart);

		
		for ( key in education.schools ) {
			formattedSchoolName = HTMLschoolName.replace("#", education.schools[key].url)
			formattedSchoolName = formattedSchoolName.replace("%data%", education.schools[key].name);
			formattedSchoolName += HTMLschoolDegree.replace("%data%", education.schools[key].degree);
			$(".education-entry:last").append(formattedSchoolName);
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[key].dates));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[key].location));
//			console.log("key: " + education.schools[key].majors);
			var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[key].majors);
			if ( /,/.test(formattedMajors) ) {
				formattedMajors = formattedMajors.replace("Major", "Majors");
				formattedMajors = formattedMajors.replace(/,/g,", ");
			}
			$(".education-entry:last").append(formattedMajors);
		}

		$(".education-entry:last").append(HTMLonlineClasses);
		for ( key in education.onlineCourses ) {
			formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[key].title);
			formattedTitle += HTMLonlineSchool.replace("%data%", education.onlineCourses[key].school);
			formattedTitle = formattedTitle.replace("#", education.onlineCourses[key].url);
			$(".education-entry:last").append(formattedTitle);
			$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[key].dates));
			onlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[key].url);
			onlineURL = onlineURL.replace("#", education.onlineCourses[key].url);
			$(".education-entry:last").append(onlineURL);

		}
	}
}

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

