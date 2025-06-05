// Keys for localStorage
const STORAGE_USERS = 'pokemonAppUsers';
const STORAGE_LOGGED_IN = 'pokemonAppLoggedInUser';

const profileIcon = document.getElementById('profileIcon');
const profileMenu = document.getElementById('profileMenu');
const goAccountBtn = profileMenu ? profileMenu.querySelector('#goAccount') : null;
const logoutBtn = profileMenu ? profileMenu.querySelector('#logout') : null;

// Utility functions
function getUsers() {
  const u = localStorage.getItem(STORAGE_USERS);
  return u ? JSON.parse(u) : {};
}
function setUsers(users) {
  localStorage.setItem(STORAGE_USERS, JSON.stringify(users));
}
function getLoggedInUser() {
  return localStorage.getItem(STORAGE_LOGGED_IN);
}
function setLoggedInUser(username) {
  localStorage.setItem(STORAGE_LOGGED_IN, username);
}
function logoutUser() {
  localStorage.removeItem(STORAGE_LOGGED_IN);
}

// Profile icon update
function updateProfileIcon() {
  if (!profileIcon) return; // Header may not exist on some pages
  const username = getLoggedInUser();
  let img = profileIcon.querySelector('img');
  if (!img) {
    img = document.createElement('img');
    profileIcon.appendChild(img);
  }
  if (!username) {
    img.src = "https://cdn-icons-png.flaticon.com/512/847/847969.png";
    profileIcon.title = "Not logged in";
    return;
  }
  const users = getUsers();
  const user = users[username];
  if (user && user.profilePic) {
    img.src = user.profilePic;
  } else {
    img.src = "https://cdn-icons-png.flaticon.com/512/847/847969.png";
  }
  profileIcon.title = `Logged in as ${username}`;
}

// Toggle menu visibility
function toggleMenu() {
  if (!profileMenu) return;
  const isVisible = profileMenu.style.display === 'block';
  if (isVisible) {
    profileMenu.style.display = 'none';
    profileMenu.setAttribute('aria-hidden', 'true');
    profileIcon.setAttribute('aria-expanded', 'false');
  } else {
    profileMenu.style.display = 'block';
    profileMenu.setAttribute('aria-hidden', 'false');
    profileIcon.setAttribute('aria-expanded', 'true');
  }
}

if (profileIcon) {
  profileIcon.addEventListener('click', e => {
    e.stopPropagation();
    toggleMenu();
  });
}
document.addEventListener('click', e => {
  if (!profileIcon?.contains(e.target) && !profileMenu?.contains(e.target)) {
    if (profileMenu) {
      profileMenu.style.display = 'none';
      profileMenu.setAttribute('aria-hidden', 'true');
    }
    if (profileIcon) {
      profileIcon.setAttribute('aria-expanded', 'false');
    }
  }
});

if (goAccountBtn) {
  goAccountBtn.addEventListener('click', e => {
    e.preventDefault();
    if (profileMenu) {
      profileMenu.style.display = 'none';
      profileMenu.setAttribute('aria-hidden', 'true');
      profileIcon?.setAttribute('aria-expanded', 'false');
    }
    // Navigation handling - send to account page
    window.location.href = 'account.html';
  });
}

if (logoutBtn) {
  logoutBtn.addEventListener('click', e => {
    e.preventDefault();
    logoutUser();
    if (profileMenu) {
      profileMenu.style.display = 'none';
      profileMenu.setAttribute('aria-hidden', 'true');
      profileIcon?.setAttribute('aria-expanded', 'false');
    }
    updateProfileIcon();
    window.location.href = 'login.html';
  });
}

// Initialize profile icon at page load
updateProfileIcon();
