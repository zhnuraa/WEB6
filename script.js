// Task 0
// $ means jQuery. ready() waits until the HTML is ready to use.
$(document).ready(function() {
    console.log("jQuery is ready!");

    // Task 1
    // Tag selector: select h1 elements and change a style.
    $("h1").css("font-size", "28px");
    // ID selector: select one element and replace its text.
    $("#headline").text("Front-End Student — Learning jQuery");
    // Class selector: select elements with class="intro".
    $(".intro").css("font-size", "18px");

    // The function inside click() runs when the button is clicked.
    $("#lightButton").click(function() {
        $("body").css("background-color", "white");
        $("body").css("color", "black");
    });

    $("#darkButton").click(function() {
        $("body").css("background-color", "#222");
        $("body").css("color", "white");
    });

    // Task 2
    $("#hideButton").click(function() {
        $("#aboutContent").hide();
    });

    $("#showButton").click(function() {
        $("#aboutContent").show();
    });

    $("#toggleButton").click(function() {
        // toggle() switches between hidden and visible.
        $("#aboutContent").toggle();
    });

    // Task 3
    // Fade methods gradually change opacity (how visible something is).
    $("#fadeInButton").click(function() {
        $("#gallery").fadeIn();
    });

    $("#fadeOutButton").click(function() {
        $("#gallery").fadeOut();
    });

    $("#fadeToggleButton").click(function() {
        $("#gallery").fadeToggle();
    });

    // Task 4
    // Slide methods open or close a panel by changing its height.
    $("#musicHeading").click(function() {
        $("#musicPanel").slideToggle();
    });

    $("#movieHeading").click(function() {
        $("#moviePanel").slideToggle();
    });

    $("#subjectHeading").click(function() {
        $("#subjectPanel").slideToggle();
    });

    $("#openPanels").click(function() {
        $(".slide-panel").slideDown();
    });

    $("#closePanels").click(function() {
        $(".slide-panel").slideUp();
    });

    // Task 5
    $("#addSkillButton").click(function() {
        // val() reads the input. trim() removes spaces at both ends.
        const skill = $("#skillInput").val().trim();

        // Only add a skill if the trimmed text is not empty.
        if (skill !== "") {
            const newSkill = $("<li>"); // Create a new list item.
            newSkill.text(skill); // Treat what was typed as plain text.
            $("#skillList").append(newSkill); // Add at the end.
            $("#skillInput").val(""); // Clear the input.
        }
    });

    $("#prependSkillButton").click(function() {
        const skill = $("#skillInput").val().trim();

        if (skill !== "") {
            const newSkill = $("<li>");
            newSkill.text(skill);
            $("#skillList").prepend(newSkill); // Add at the beginning.
            $("#skillInput").val("");
        }
    });

    $("#removeSkillButton").click(function() {
        // Select the last li inside skillList and remove it.
        $("#skillList li:last").remove();
    });

    // Task 6
    $("#changeLinkButton").click(function() {
        $("#socialLink").attr("href", "https://www.linkedin.com/");
        $("#socialLink").text("LinkedIn");
    });

    // Task 7
    // The input event runs whenever the user changes an input value.
    $("#liveName").on("input", function() {
        $("#nameOutput").text($("#liveName").val());
    });

    $("#liveEmail").on("input", function() {
        $("#emailOutput").text($("#liveEmail").val());
    });

    $("#liveForm").on("submit", function(event) {
        event.preventDefault(); // Stop form submission and page reload.
    });

    // Task 8
    // A boolean stores true or false and remembers the bar state.
    let skillsAnimated = false;

    $("#animateSkillsButton").click(function() {
        if (skillsAnimated === false) {
            // Animate each width over 500 milliseconds (half a second).
            $("#htmlBar").animate({ width: "80%" }, 500);
            $("#cssBar").animate({ width: "70%" }, 500);
            $("#jsBar").animate({ width: "50%" }, 500);
            skillsAnimated = true;
        } else {
            $("#htmlBar").animate({ width: "0%" }, 500);
            $("#cssBar").animate({ width: "0%" }, 500);
            $("#jsBar").animate({ width: "0%" }, 500);
            skillsAnimated = false;
        }
    });
});
