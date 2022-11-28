let btn1 = document.getElementById('btn')
let n = document.getElementById('uname')
btn1.addEventListener("click",function f(){
    fetch('https://api.github.com/users/'+n.value)
    .then(response => response.json())
    .then(data=>getdata2(data))
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
