// Array of phrases for the poem generator
const subjects = ["Your smile", "Your eyes", "Your voice", "Your laugh", "Your touch", "Your Hugs", "Your Kisses", "Your Love"];
const verbs = ["brightens", "melts", "warms", "lights up", "softens", "soothes", "enlightens", "adores", "cherishes", "nurtures"];
const objects = ["my day", "my heart", "my soul", "my world", "everything", "my life"];
const adjectives = ["beautiful", "endless", "amazing", "incredible", "lovely", "gorgeous", "fantastic", "fantabulous",
                    "heart warming", "infinte", "never ending", "elegant", "caring", "charming", "dynamic"];
const closings = ["forever and always", "beyond words", "with all my heart", "until the end of time"];

// Function to generate and display a random love poem
function generatePoem() {
    const line1 = `${getRandomElement(subjects)} ${getRandomElement(verbs)} ${getRandomElement(objects)}.`;
    const line2 = `You are ${getRandomElement(adjectives)}, ${getRandomElement(closings)}.`;
    
    const poemOutput = document.getElementById("poem-output");
    poemOutput.innerHTML = `<p>${line1}<br>${line2}</p>`;
}

// Helper function to get a random element from an array
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Function to play the selected song
function playSong() {
    const songSelect = document.getElementById("song-select");
    const audioSource = document.getElementById("audio-source");
    const audioPlayer = document.getElementById("audio-player");

    // Get the selected song file and set the audio source
    const selectedSong = songSelect.value;
    audioSource.src = `static/${selectedSong}`;
    
    // Load and play the audio
    audioPlayer.load();
    audioPlayer.play();
}

