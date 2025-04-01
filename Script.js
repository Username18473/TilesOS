function updateTime() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    const now = new Date();

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const year = now.getFullYear().toString().substr(-2); // Get last two digits of the year

    timeElement.textContent = `${hours}:${minutes}`;
    dateElement.textContent = `${month}/${day}/${year}`;
}

setInterval(updateTime, 1000);
updateTime();

function goBack() {
    document.getElementById('webview').contentWindow.history.back();
}

function goForward() {
    document.getElementById('webview').contentWindow.history.forward();
}

function loadPage() {
    const urlBar = document.getElementById('url-bar');
    const webview = document.getElementById('webview');
    let url = urlBar.value;
    if (!url.startsWith('http')) {
        url = 'https://' + url; // Add https if missing
    }
    webview.src = url;
}

function closeBrowser() {
    document.getElementById('browser').style.display = 'none';
}

// Reopen browser when browser icon is clicked
document.getElementById('browserIcon').addEventListener('click', function() {
    document.getElementById('browser').style.display = 'block';
});

// Toggle start menu visibility
function toggleStartMenu() {
    const startMenu = document.getElementById('start-menu');
    if (startMenu.style.display === 'none' || startMenu.style.display === '') {
        startMenu.style.display = 'block';
    } else {
        startMenu.style.display = 'none';
    }
}

// Reopen browser when "Browser" link in start menu is clicked
document.getElementById('startMenuBrowserLink').addEventListener('click', function() {
    document.getElementById('browser').style.display = 'block';
});

document.getElementById("fullscreen-btn").addEventListener("click", () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
});

// Handling the form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // For demonstration purposes, log the username and password
    console.log('Username:', username);
    console.log('Password:', password);

    // Add your form submission logic here

    // Show the desktop after login
    document.getElementById('desktop').style.display = 'block';
    document.getElementById('loginContainer').style.display = 'none';
});

// Hide the desktop icons during login
document.addEventListener('DOMContentLoaded', function() {
    const loginContainer = document.getElementById('loginContainer');
    const desktop = document.getElementById('desktop');

    if (loginContainer.style.display !== 'none') {
        desktop.style.display = 'none';
    }
});

// Add JavaScript to make the browser window draggable
function makeElementDraggable(element) {
    let isDragging = false;
    let offsetX, offsetY;

    element.addEventListener('mousedown', function(e) {
        console.log('Mouse down on element');
        isDragging = true;
        offsetX = e.clientX - element.getBoundingClientRect().left;
        offsetY = e.clientY - element.getBoundingClientRect().top;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });

    function onMouseMove(e) {
        if (isDragging) {
            console.log('Dragging element');
            element.style.left = `${e.clientX - offsetX}px`;
            element.style.top = `${e.clientY - offsetY}px`;
        }
    }

    function onMouseUp() {
        console.log('Mouse up, stop dragging');
        isDragging = false;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }
}

// Make the browser element draggable
makeElementDraggable(document.getElementById('browser'));

// Function to open My PC popup
function openMyPC() {
    document.getElementById('myPCPopup').style.display = 'block';
}

// Function to close My PC popup
function closeMyPC() {
    document.getElementById('myPCPopup').style.display = 'none';
}

// Make the My PC popup draggable
makeElementDraggable(document.getElementById('myPCPopup'));

}
function logoff() {
    // Perform logoff actions here
    // For example, redirect to a logoff page or clear session data
    alert("Logging off...");
    window.location.href = "logoff.html"; // Redirect to a logoff page
}
