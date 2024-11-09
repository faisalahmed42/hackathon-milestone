
const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement | null;
const skills = document.getElementById('skills') as HTMLElement | null;

if (toggleButton && skills) {
    toggleButton.addEventListener('click', () => {
        skills.style.display = skills.style.display === 'none' ? 'block' : 'none';
    });
}
