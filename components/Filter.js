export default function createFilter(form, { handleFilter }) {
    const titleInput = form.querySelector('#title');
    const themeInput = form.querySelector('#theme');
    const releaseYearInput = form.querySelector('#release-year');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);

        handleFilter(
            formData.get('title'),
            formData.get('theme'),
            formData.get('releaseYear'),
        );
    });

    return ({ title, theme, releaseYear }) => {
        titleInput.value = title;
        themeInput.value = theme;
        releaseYearInput.value = releaseYear;
  
    };
}