const navSection = document.querySelector(".navigation")
const logo = document.createElement("h1")
const menu = document.createElement("ul")

const menuArray = [
    {"image": "../assets/icons/home-white.png", 
     "link": "../pages/",
     "title": "Accueil"},
    {"image": "../assets/icons/creer-white.png", 
     "link": "../pages/",
     "title": "Créer"},
    {"image": "../assets/icons/explore-white.png", 
     "link": "../pages/",
     "title": "Explorer"},
    {"image": "../assets/icons/user-white.png", 
     "link": "../pages/",
     "title": "Profil"},
    {"image": "../assets/icons/notif-white(1).png", 
     "link": "../pages/",
     "title": "Notification"},
    {"image": "../assets/icons/message-white.png", 
     "link": "../pages/",
     "title": "Message"},
    {"image": "../assets/icons/search-white.png", 
     "link": "../pages/",
     "title": "Rechercher"},
    {"image": "../assets/icons/params-white.png", 
     "link": "../pages/",
     "title": "Plus"},
]

menuArray.forEach((item) => {
    const itemArray = document.createElement("li")
    const iconItem = document.createElement("img")
    const linkItem = document.createElement("a")

    iconItem.setAttribute("src", item.image)
    linkItem.setAttribute("href", item.link)
    linkItem.textContent = item.title

    menu.appendChild(itemArray)
    itemArray.appendChild(iconItem)
    itemArray.appendChild(linkItem)
})

logo.textContent = "Soundz"

logo.classList.add("logo")

navSection.appendChild(logo)
navSection.appendChild(menu)
