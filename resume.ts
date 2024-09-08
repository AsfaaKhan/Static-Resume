

function toggleSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    const button = section?.querySelector('button');
    const hiddenSectionsList = document.getElementById('hidden-sections-list');
    
    if (section && button && hiddenSectionsList) {
        if (section.style.display === 'none') {
            // Show the section
            section.style.display = 'block';
            button.textContent = 'Hide';
            removeHiddenSection(sectionId);
        } else {
            // Hide the section
            section.style.display = 'none';
            button.textContent = 'Show';
            addHiddenSection(sectionId);
        }
    }
}

function addHiddenSection(sectionId: string) {
    const hiddenSectionsList = document.getElementById('hidden-sections-list');
    if (hiddenSectionsList) {
        const sectionItem = document.createElement('li');
        sectionItem.textContent = capitalizeFirstLetter(sectionId.replace('-', ' '));
        sectionItem.id = `hidden-${sectionId}`;
        
        const showButton = document.createElement('button');
        showButton.textContent = `Show ${sectionItem.textContent}`;
        showButton.onclick = () => toggleSection(sectionId);
        
        sectionItem.appendChild(showButton);
        hiddenSectionsList.appendChild(sectionItem);
    }
}

function removeHiddenSection(sectionId: string) {
    const hiddenSectionsList = document.getElementById('hidden-sections-list');
    if (hiddenSectionsList) {
        const sectionItem = document.getElementById(`hidden-${sectionId}`);
        if (sectionItem) {
            hiddenSectionsList.removeChild(sectionItem);
        }
    }
}

function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
