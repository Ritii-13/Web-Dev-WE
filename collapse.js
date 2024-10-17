function toggleCollapse(heading) {
    let parent = heading.parentElement;
    for (let child of parent.children) {
        if (child !== heading) {
            child.style.display === 'none' ?
                child.style.display = 'block' : child.style.display = 'none';
        }
    }
}

function makeCollapsible(heading) {
    heading.addEventListener('click', () => toggleCollapse(heading));
}

document.addEventListener("DOMContentLoaded", () => 
    document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(makeCollapsible));

/* if you had to write a python-style list comprehension, it would look like
 document.addEventListener("...", lambda x: [makeCollapsible(item) for item in document.querySelectorAll(...)])*/