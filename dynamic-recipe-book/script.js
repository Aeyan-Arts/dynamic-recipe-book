function prevent(event){
    event.preventDefault()
}
function popup(event){
    prevent(event)
    const x=document.querySelector("textarea").value
    const place = document.getElementById("recipes")
    let newRcipe = document.createElement("p")
    newRcipe.textContent=x
    place.appendChild(newRcipe)
}
