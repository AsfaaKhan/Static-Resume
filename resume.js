// function toggleSection(sectionId: string): void {
//     const section = document.getElementById(sectionId);
//     const button = section?.previousElementSibling as HTMLButtonElement;
//     if (section?.style.display === "none") {
//         section.style.display = "block";
//         button.innerText = "Hide";
//     } else {
//         section!.style.display = "none";
//         button.innerText = "Show";
//     }
// }
// function toggleSection(sectionId: string, isShowButton: boolean = false): void {
//     const section = document.getElementById(sectionId);
//     const buttons = section?.parentElement?.querySelectorAll('button');
//     if (section && buttons) {
//         const [hideButton, showButton] = buttons as NodeListOf<HTMLButtonElement>;
//         if (isShowButton) {
//             section.style.display = "block";
//             hideButton.style.display = "inline";
//             showButton.style.display = "none";
//         } else if (section.style.display === "none") {
//             section.style.display = "block";
//             hideButton.style.display = "inline";
//             showButton.style.display = "none";
//         } else {
//             section.style.display = "none";
//             hideButton.style.display = "none";
//             showButton.style.display = "inline";
//         }
//     }
// }
function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    var button = section === null || section === void 0 ? void 0 : section.querySelector('button');
    var hiddenSectionsList = document.getElementById('hidden-sections-list');
    if (section && button && hiddenSectionsList) {
        if (section.style.display === 'none') {
            // Show the section
            section.style.display = 'block';
            button.textContent = 'Hide';
            removeHiddenSection(sectionId);
        }
        else {
            // Hide the section
            section.style.display = 'none';
            button.textContent = 'Show';
            addHiddenSection(sectionId);
        }
    }
}
function addHiddenSection(sectionId) {
    var hiddenSectionsList = document.getElementById('hidden-sections-list');
    if (hiddenSectionsList) {
        var sectionItem = document.createElement('li');
        sectionItem.textContent = capitalizeFirstLetter(sectionId.replace('-', ' '));
        sectionItem.id = "hidden-".concat(sectionId);
        var showButton = document.createElement('button');
        showButton.textContent = "Show ".concat(sectionItem.textContent);
        showButton.onclick = function () { return toggleSection(sectionId); };
        sectionItem.appendChild(showButton);
        hiddenSectionsList.appendChild(sectionItem);
    }
}
function removeHiddenSection(sectionId) {
    var hiddenSectionsList = document.getElementById('hidden-sections-list');
    if (hiddenSectionsList) {
        var sectionItem = document.getElementById("hidden-".concat(sectionId));
        if (sectionItem) {
            hiddenSectionsList.removeChild(sectionItem);
        }
    }
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
