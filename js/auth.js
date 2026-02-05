function quickLogin(email, password) {
    document.getElementById('email').value = email;
    document.getElementById('password').value = password;
    document.getElementById('loginForm').dispatchEvent(new Event('submit'));
}

document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('errorMessage');
    const user = MOCK_DATA.users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        const redirectUrls = {
            'SUPER_ADMIN': 'pages/super-admin.html',
            'CIRT_ADMIN': 'pages/cirt-admin.html',
            'OEM': 'pages/oem.html',
            'PENTESTER': 'pages/pentester.html'
        };
        window.location.href = redirectUrls[user.role];
    } else {
        errorDiv.textContent = ' Invalid email or password';
        errorDiv.style.display = 'block';
    }
});

function checkAuth() {
    const user = localStorage.getItem('currentUser');
    if (!user) {
        window.location.href = '../index.html';
        return null;
    }
    return JSON.parse(user);
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = '../index.html';
}

function getCurrentUser() {
    const userStr = localStorage.getItem('currentUser');
    return userStr ? JSON.parse(userStr) : null;
}