let show = false;
const handleMenu = () => {
    const listsContainer = document.querySelector('.lists_container');
    if (show) {
        listsContainer.style.display = 'none';
        show = !show;
    } else {
        listsContainer.style.display = 'flex';
        show = !show;
    }
};
