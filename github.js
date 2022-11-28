d = document.getElementById('name')
b = document.getElementById('btn')
b.addEventListener("click", function getdata() {
    fetch('https://api.github.com/users/' + d.value)
        .then(response => response.json())
        .then(data => details(data))
})

tab = document.getElementById('tab')
function details(data) {
    if (data.message =="Not Found") {
        alert("invalid")
        return false

    }
    console.log(data);
    let row =
        `<tr>
    <td>login</td>
    <td>${data.login}</td>
    </tr>
    <tr>
    <td>id</td>
    <td>${data.id}</td>
    </tr>`

    tab.innerHTML += row
}