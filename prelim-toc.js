function createTocFigure() {
    let tocFigure = document.createElement("figure");
    let tocFigCaption = document.createElement("figcaption");
    tocFigCaption.innerText = "Table of Contents";
    tocFigure.append(tocFigCaption);
    return tocFigure;
}

function createTocListItem(href, linkText) {
    let tocItemElem = document.createElement("li");
    let anchorElem = document.createElement("a");
    anchorElem.href = href;
    anchorElem.innerText = linkText;
    tocItemElem.append(anchorElem);
    return tocItemElem;
}

/* Definitely not meant to be used, but a starting point for discussion*/
function _generateH1OnlyToc() {
    let tocFigure = createTocFigure();
    let tocElem = document.createElement("ol");
    document.querySelectorAll("h1").forEach((elem) => tocElem.append(
        createTocListItem("#" + elem.id, elem.innerText)
    ));
    tocFigure.append(tocElem);
    document.querySelector("body").prepend(tocFigure);
}

function _generateToc() {
    let tocFigure = createTocFigure();
    let tocElem = document.createElement("ol");
    let currentLevel = 1;
    let currentList = tocElem;

    document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((elem) => {
        let level = parseInt(elem.tagName.substring(1));
        let listItem = createTocListItem("#" + elem.id, elem.innerText);

        if (level > currentLevel) {
            let newList = document.createElement("ol");
            currentList.lastElementChild.append(newList);
            currentList = newList;
        } else if (level < currentLevel) {
            while (level < currentLevel) {
                currentList = currentList.parentElement.closest("ol");
                currentLevel--;
            }
        }
        currentList.append(listItem);
        currentLevel = level;
    });

    tocFigure.append(tocElem);
    document.querySelector("body").prepend(tocFigure);
}

document.addEventListener("DOMContentLoaded", _generateToc);