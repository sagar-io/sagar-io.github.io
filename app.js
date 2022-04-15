const tabItems = document.querySelectorAll('.tab-item');
const tabContents = document.querySelectorAll('.tab-content');



function handleTab() {
    hideTabContent();
    removeBorder();
    const currentTabContent = document.querySelector(`#${this.id}-content`);
    console.log(currentTabContent)
    currentTabContent.classList.add('show');

    this.classList.add('bottom-border');
}

function hideTabContent() {
    tabContents.forEach(tabContent => tabContent.classList.remove('show'));
}

function removeBorder() {
    tabItems.forEach(tabItem => tabItem.classList.remove('bottom-border'));
}






tabItems.forEach((tabItem) => tabItem.addEventListener('click', handleTab));
