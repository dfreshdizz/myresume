
/*
var formattedName = HTMLheaderName.replace("%data%", "John Doe");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
*/
var bio = {
	"name": "John Doe",
	"role": "Web Developer",
	"city": "New York, NY",
	"email": "user@example.com",
	"welcome": "Welcome to my page!",
	"skills": ["coding", "creating", "analyzing"],
	"images": "images/sample.png"	
}

var projects = {
	"designs": [
		{
			"title": "Pinteresting",
			"dates": "December 2014 to January 2015",
			"description": "This is my OneMonthRails project.",
			"images": ["image1"]
		},
		{
			"title": "Sample Project",
			"dates": "January 2015 to February 2015",
			"description": "This is my sample project.",
			"images": ["image1"]
		}
	]
}

var work = {
	"jobs": [
		{
			"employer": "Stryker Corporation",
			"city": "Mahwah, NJ",
			"role": "Oracle Systems Administrator - Consultant",
			"dates": "March 2012 to December 2014",
			"description": "...",
			"images": "image"
		},
		{
			"employer": "Bel-Ray Company, LLC",
			"city": "Farmingdale, NJ",
			"role": "Systems Analyst",
			"dates": "November 2008 to March 2011",
			"description": "...",
			"images": "image"
		}
	]
}

var education = {
	"schools": [
		{
			"name": "Rutgers University",
			"city": "New Brunswick, NJ",
			"year": 2007,
			"major": "Information Technology and Informatics",
			"images": "image"
		}
	]
}

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
}

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].role);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].city);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}

displayWork();

projects.display = function() {
	for (x in projects.designs) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.designs[x].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.designs[x].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.designs[x].description);
		$(".project-entry:last").append(formattedDescription);
	}
}

projects.display();
