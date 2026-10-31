// Simple script for section switching
function show(id) {
    // Hide all
    document.querySelectorAll('section').forEach(s => {
        s.className = 'hide';
    });
    // Show selected
    document.getElementById(id).className = 'show';
    
    // Scroll to top for mobile feel
    window.scrollTo(0,0);
}

// Basic check if running in webview (for student project log)
console.log("Trichy Guide Web App Loaded - MAD Assignment");
