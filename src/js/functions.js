

function createHtmlElement (tag, attrs={}) {
    const element = document.createElement(tag);
    for(let [key, value] of Object.entries(attrs)) {
        if(key === 'text') 
            element.textContent = value;
        else if(key === 'html') 
            element.innerHTML = value;
        else if(key === 'class') 
            element.classList.add(value);
        else if(key === 'id') 
            element.id = value;
        else if(key === 'data') {
            for(let [dataKey, dataValue] of Object.entries(value)) 
                element.dataset[dataKey] = dataValue;
        }
        else 
            element.setAttribute(key, value);
    }
    return element;
}

