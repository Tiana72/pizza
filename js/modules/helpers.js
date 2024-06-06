export const changeFirstUpperCase = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase()

export const createInput = (id, name, value, type, className) => {
    const input = document.createElement('input');
    input.classList.add(className);
    input.id = id;
    input.name = name;
    input.value = value;
    input.type = type;
    return input;

}

export const createLabel = (forId, labelText, className) => {
    const label = document.createElement('Label');
    label.classList.add(className);
    label.htmlFor = forId;
    label.textContent = labelText;
    return label;
}