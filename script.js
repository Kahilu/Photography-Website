document.addEventListener("DOMContentLoaded", function () {
    const columns = document.querySelectorAll(".hero-column .wrapper");

    columns.forEach((column) => {
        const clone = column.cloneNode(true);
        column.parentNode.appendChild(clone);
    });
});
