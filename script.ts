function toggleSection(sectionId: string): void {
    const section = document.getElementById(sectionId) as HTMLElement;
    const button = section.previousElementSibling as HTMLButtonElement;
    if (section) {
        if (section.style.display === "none" || !section.style.display) {
            section.style.display = "block";
            button.innerHTML = "Hide";
        } else {
            section.style.display = "none";
            button.innerHTML = "Show";
        }
    }
}

// Initialize all sections as visible
window.onload = (): void => {
    const sections = document.querySelectorAll(".content") as NodeListOf<HTMLElement>;
    sections.forEach((section: HTMLElement) => {
        section.style.display = "block";
    });
};
