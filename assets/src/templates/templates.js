const urlParams = new URLSearchParams(window.location.search);
const emailParameter = urlParams.get('email');


/**
 * this function integrates html templates
 *
 * @param {html-include} templates
 */
async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html");
        let resp = await fetch(file); 
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}

/**
 * this function makes a menu appear, for this I delete the div a css class called d-none
 *
 * @param {class} class
 */
function openPopupMenu() {
    let element = document.getElementById("popupMenuHeader");
    element.classList.remove("d-none");
}

/**
 * this function makes a menu disappear, for this I give the div a css class called d-none
 *
 * @param {class} class
 */
function closePopupMenu() {
    let element = document.getElementById("popupMenuHeader");
    element.classList.add("d-none");
}

/**
 * 
 * 
 * 
 */
function selectedPage() {
    let element = document.getElementById(`${document.title}`);
    element.classList.add("selected-page");
}
/**
 * the function sets the parameter query for board in order to load information from server for the logged user.
 */
function setParameterQuery() {
    document.getElementById('Board').href = '../board/board.html?email=' + emailParameter;
}