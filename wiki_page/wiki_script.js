document.addEventListener("DOMContentLoaded", function() {
    const toc = document.getElementById("toc");
    const sections = document.querySelectorAll("section");

    sections.forEach((section, index) => {
        const button = section.querySelector("button.collapsible");
        const sectionID = `section-${index + 1}`;
        
        // Assign an ID to each button for linking
        button.setAttribute("id", sectionID);

        // Create a table of contents link
        const tocItem = document.createElement("a");
        tocItem.textContent = button.textContent;
        toc.appendChild(tocItem);
    });

    // Collapsible functionality
    const collapsibles = document.querySelectorAll(".collapsible");
    collapsibles.forEach(button => {
        button.addEventListener("click", function() {
            this.classList.toggle("active");
            const content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});
