const toggleMenu = () =>{
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function showTab(category) {
    const sweProjects = document.getElementById('swe-projects');
    const dataProjects = document.getElementById('data-projects');
    const sweButton = document.querySelector('button[onclick="showTab(\'swe\')"]');
    const dataButton = document.querySelector('button[onclick="showTab(\'data\')"]');

    if (category === 'swe') {
        sweProjects.style.display = 'block';
        dataProjects.style.display = 'none';
        sweButton.classList.add('active-tab');
        dataButton.classList.remove('active-tab');
    } else if (category === 'data') {
        sweProjects.style.display = 'none';
        dataProjects.style.display = 'block';
        sweButton.classList.remove('active-tab');
        dataButton.classList.add('active-tab');
    }
}
