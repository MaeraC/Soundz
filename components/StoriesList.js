const storiesListSection = document.querySelector(".stories-list")

fetch("../datas/user-data.json")
.then(res => res.json())
.then(data => {
    const users = data
    
    users.forEach((user) => {
        const userBox = document.createElement("div")
        const userPicture = document.createElement("img")
        const userBoxAside = document.createElement("div")
        const userPseudo = document.createElement("span")
        const userTime = document.createElement("span")

        userPicture.setAttribute("src", user.picture)

        userPseudo.textContent = user.pseudo 
        userTime.textContent = "Il y a " + user.time + "minutes"

        userBox.classList.add("user-box")
        userPseudo.classList.add("pseudo")
        userTime.classList.add("time")

        storiesListSection.appendChild(userBox)
        userBox.appendChild(userPicture)
        userBox.appendChild(userBoxAside)
        userBoxAside.appendChild(userPseudo)
        userBoxAside.appendChild(userTime)
    })
})