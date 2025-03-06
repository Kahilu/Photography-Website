document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".wrapper").forEach(wrapper => {
        let clone = wrapper.cloneNode(true); // Clone full wrapper
        wrapper.parentElement.appendChild(clone); // Append to column
    });
});
