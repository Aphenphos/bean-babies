export default function createPaging(root, { handlePaging }) {
    const selectSize = root.querySelector('select');
    const pageInfo = root.querySelector('#page-info');
    const prev = root.querySelector('#prev');
    const next = root.querySelector('#next');

    prev.addEventListener('click', () => {
        handlePaging(-1, selectSize.value);
    });
    next.addEventListener('click', () => {
        handlePaging(1, selectSize.value);
    });

    selectSize.addEventListener('click', () => {
        handlePaging(0, selectSize.value);
    });

    return ({ page, pageSize, totalPages }) => {

        selectSize.value = pageSize;
        prev.disabled = page === 1;
        next.disabled = page === totalPages;

        pageInfo.textContent = `You're on ${page} of ${totalPages}`;
    };
}