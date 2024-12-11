// Define the image and text data for each section
const imagetext = {
    about: {
        title: "About VOIR",
        text: "VOIR is a groundbreaking company dedicated to revolutionizing the world of medical glasses for children. Our mission is to create innovative, stylish, and highly functional eyewear that not only improves vision but also boosts confidence.",
        image: "images/store.png",
    },
    goals: {
        title: "Our Goals",
        text: "Our primary goal is to empower children with vision impairments by providing them with state-of-the-art medical glasses tailored to their unique needs.",
        image: "images/child4.png",
    },
    team: {
        title: "Our Team",
        text: "The heart of VOIR lies in our team of passionate experts, including pediatric optometrists, designers, and child development specialists.",
        image: "images/team.png",
    },
};

// Function to update the image and text
function updateimagetext(section) {
    const data = imagetext[section];
    document.getElementById("imagetext_title").textContent = data.title;
    document.getElementById("text").textContent = data.text;
    document.getElementById("story_image").src = data.image;
}
// Initialize with default content
document.addEventListener("DOMContentLoaded", () => {
    updateimagetext("about"); // Display "About Voir" by default
});

// Add event listeners to buttons
document.getElementById("about").addEventListener("click", () => updateimagetext("about"));
document.getElementById("goals").addEventListener("click", () => updateimagetext("goals"));
document.getElementById("team").addEventListener("click", () => updateimagetext("team"));
