export default function createFilter(form, { handleFilter }) {
    const titleInput = form.querySelector('#title');
    const select = form.querySelector('select');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);

        handleFilter(
            formData.get('title'),
            formData.get('releaseYear'),
        );
    });

    return ({ title, releaseYear }) => {
        titleInput.value = title;
        select.value = releaseYear;
  
    };
}