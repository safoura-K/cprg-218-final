// JavaScript for glasses matching functionality

document.getElementById("show-match").addEventListener("click", function () {
    // Get user inputs
    const age = parseInt(document.getElementById("age").value, 10);
    const skinColor = document.getElementById("skin-color").value;
    const frameColor = document.getElementById("frame-color").value;

  
    const glassesPreview = document.getElementById("glasses-preview");

 
    const glassesMatch = getGlassesMatch(age, skinColor, frameColor);

   
    if (glassesMatch) {
        glassesPreview.src = `images/${glassesMatch}`;
        glassesPreview.alt = "Matching glasses preview";
    } else {
        glassesPreview.src = "images/default_glasses.png"; // Default image for no match
        glassesPreview.alt = "Default glasses preview";
        alert("No match found for the selected combination.Please try different options!");
    }
});

// Function to determine the matching glasses based on inputs
function getGlassesMatch(age, skinColor, frameColor) {
    // Map of glasses
    const glassesMap = {
        "child-fair-black": "child_fair_black_glasses.png",
        "child-medium-red": "child_medium_red_glasses.png",
        "child-brown-blue": "child_brown_blue_glasses.png",
        "child-dark-brown1": "child_dark_brown_glasses.png",
        "teen-fair-black": "teen_fair_black_glasses.png",
        "teen-medium-red": "teen_medium_red_glasses.png",
        "teen-brown-blue": "teen_brown_blue_glasses.png",
        "teen-dark-brown1": "teen_dark_brown_glasses.png",
    };

    // age group
    let ageGroup = "";
    if (age >= 0 && age <= 12) {
        ageGroup = "child";
    } else if (age >= 13 && age <= 19) {
        ageGroup = "teen";
    } else {
        return null; // Invalid age
    }

    const key = `${ageGroup}-${skinColor}-${frameColor}`;

    return glassesMap[key] || null;
}