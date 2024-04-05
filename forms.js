    let toDoList = [];
    document.querySelector('form').addEventListener("submit", function(event) {
    console.log("submitted form");
    event.preventDefault();
    
    let toDoValue = "";
    toDoValue = document.querySelector("#toDoField").value;
    console.log(toDoValue);

    toDoList.push(toDoValue)
    console.log(toDoList)
    
    const ul = document.querySelector("ul")
    const template = toDoList.map(toDoList => `
    <li>
        <p>${toDoList}</p>
    </li>
    `)
    console.log(template)
    ul.innerHTML = template.join('');
})