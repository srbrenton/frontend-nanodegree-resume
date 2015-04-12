
var bio = {
	"name" : "Steve Brenton",
	"role" : "5ESS System Analyst",
	"contacts" : {
		"mobile": "562-555-1234",
		"email": "sbrenton@AnyISP.net",
		"github": "srbrenton",
		"twitter": "N/A",
		"location": "Long Beach, CA"
		},
	"picture" : "images/steve.jpg",
	"welcome" : "Web Developers, look out!",
	"skills" : [  "HTML", "PHP", "JavaScript", "C/Unix", "Java", "5ESS", "1AESS" ],
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
}

var work = {
	"jobs": [
		{
			"employer":	"Arby's Roast Beef",
			"title":	"Worker",
			"location":	"Anaheim, CA",
			"dates":	"1970-1971",
			"description":	"Fast Food Worker"
		},
		{
			"employer":	"Pacific Bell",
			"title":	"Motorized Messenger",
			"location":	"Orange, CA",
			"dates":	"1971-1972",
			"description":	"Deliver Company Mail"
		},
		{
			"employer":	"Pacific Bell",
			"title":	"Frameman",
			"location":	"Orange, CA",
			"dates":	"1972-1973",
			"description":	"Install SxS and X-bar Cross Connects"
		},
		{
			"employer":	"Orange County Food Service",
			"title":	"Ice Specialist",
			"location":	"Placentia, CA",
			"dates":	"1973-1974",
			"description":	"Fill Catering Trucks with Ice"
		},
		{
			"employer":	"Pacific Bell",
			"title":	"Repair Clerk",
			"location":	"Orange",
			"dates":	"1974-1976",
			"description":	"Answer 611 Telephone Repair Calls"
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
			"title":	"Cold Fusion",
			"dates":	"2011-2014",
			"description":	"Provide the world with limitless energy",
			"images": [
					"images/Aten_disk.jpg",
					"images/yoda.jpg"
				]
		},
		{
			"title":	"Milky Way Exploration",
			"dates":	"2008-2010",
			"description":	"Looking for Yoda",
			"images": [
					"images/yoda.jpg",
					"images/lion.png"
				]
		}
	],
	"display": function() {
		var myProject;
		var myImage;
		for ( myProject in projects.project ) {
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.project[myProject].title));
			$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.project[myProject].dates));
			$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.project[myProject].description));
	$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.project[1].images[0]));
	$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.project[1].images[1]));
//			for ( myImage in projects.project.images ) {
//				$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.project["myProject"].images["myImage"]));
//			}
		}
	}
}

var education = {
	"schools": [
			{
				"name": "Cory Elementary School",
				"location": "Denver, CO",
				"degree": "1st Grade",
				"majors":["Arithmetic", "Printing", "Finger Painting"],
				"dates": "1959-1960",
				"url": "http://cory.dpsk12.org/"
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
				"name": "Robert M. Pyles Elementary School",
				"location": "Stanton, CA",
				"degree": "3rd - 5th Grade",
				"majors":["Arithmetic", "Report Writing", "Reading"],
				"dates": "1961-1964",
				"url": "http://www.msd.k12.ca.us/index.php/rmp-home"
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
				"name": "California State College Fullerton",
				"location": "Fullerton, CA",
				"degree": "na",
				"majors":["English"],
				"dates": "1974-1975",
				"url": "http://www.fullerton.edu"
			}
	],
	"onlineCourses": [
			{
				"title": "",
				"school": "",
				"dates": "",
				"url": ""
			},
			{
				"title": "",
				"school": "",
				"dates": "",
				"url": ""
			}
	],
	display: function() {

		var formattedSchoolName;
		$("#education").append(HTMLschoolStart);

		
		for ( key in education.schools ) {
			formattedSchoolName = HTMLschoolName.replace("#",education.schools[key].url)
			formattedSchoolName = formattedSchoolName.replace("%data%",education.schools[key].name);
			formattedSchoolName += HTMLschoolDegree.replace("%data%",education.schools[key].degree);
			$(".education-entry:last").append(formattedSchoolName);
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[key].dates));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[key].location));
			console.log("key: " + education.schools[key].majors);
			var formattedMajors = HTMLschoolMajor.replace("%data%",education.schools[key].majors);
			if ( /,/.test(formattedMajors) ) {
				formattedMajors = formattedMajors.replace("Major","Majors");
				formattedMajors = formattedMajors.replace(/,/g,", ");
			}
			$(".education-entry:last").append(formattedMajors);
		}
	}
}

console.log("job count " + work.jobs.length);



bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

