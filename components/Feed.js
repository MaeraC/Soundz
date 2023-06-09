const feedSection = document.querySelector(".feed")

fetch("../datas/user.json")
.then(res => res.json())
.then(data => {
    const users = data

    users.forEach(user => {
        const box = document.createElement("div")
        const videoBox = document.createElement("div")
        const video = document.createElement("video")
        const infos = document.createElement("div")
        const picture = document.createElement("img")
        const infosPB = document.createElement("div")
        const pseudo = document.createElement("span")
        const bio = document.createElement("p")
        const tags = document.createElement("ul")
        const asideInfos = document.createElement("div")
        const commentsInfos = document.createElement("div")
        const likesInfos = document.createElement("div")
        const shareInfos = document.createElement("div")
        const likesNb = document.createElement("div")
        const likesImg = document.createElement("span")
        const commentsNb = document.createElement("div")
        const commentsImg = document.createElement("span")
        const shareNb = document.createElement("div")
        const shareImg = document.createElement("span")
        const playBtn = document.createElement("span")
        const pauseBtn = document.createElement("span")
        const playBtn2 = document.createElement("span")
        
        video.setAttribute("src", user.video)
        picture.setAttribute("src", user.picture)

        playBtn.innerHTML = "<i class='fas fa-play'></i>"
        playBtn2.innerHTML = "<i class='fas fa-play'></i>"
        pauseBtn.innerHTML = "<i class='fas fa-pause'></i>"

        playBtn.addEventListener("click", () => {
            video.play()
            playBtn.style.display = "none"
            pauseBtn.style.display = "block"
        })

        pauseBtn.addEventListener("click", () => {
            video.pause()
            pauseBtn.style.display = "none"
            playBtn2.style.display = "block"
        })

        playBtn2.addEventListener("click", () => {
            video.play()
            pauseBtn.style.display = "block"
            playBtn2.style.display = "none"
        })

        pseudo.textContent = "@" + user.pseudo
        bio.textContent = user.bio

        user.tags.forEach(item => {
            const tag = document.createElement("li")
            tag.textContent = "#" + item
            tags.appendChild(tag)
        })

        likesInfos.textContent = user.likes
        likesImg.innerHTML = "<i class='fas fa-heart'></i>"
        commentsInfos.textContent = user.comments
        commentsImg.innerHTML = "<i class='fas fa-comment'></i>"
        shareInfos.textContent = user.share
        shareImg.innerHTML = "<i class='fas fa-share'></i>"

        box.classList.add("feed-box");
        infos.classList.add("feed-infos")
        pseudo.classList.add("feed-pseudo")
        bio.classList.add("feed-bio")
        videoBox.classList.add("video-box")
        asideInfos.classList.add("feed-aside-infos")
        playBtn.classList.add("feed-play-btn")
        playBtn2.classList.add("feed-play-btn2")
        pauseBtn.classList.add("feed-pause-btn")

        feedSection.appendChild(box)
        box.appendChild(infos)
        infos.appendChild(picture)
        infos.appendChild(infosPB)
        infosPB.appendChild(pseudo)
        infosPB.appendChild(bio)
        box.appendChild(videoBox)
        videoBox.appendChild(video)
        videoBox.appendChild(playBtn)
        videoBox.appendChild(playBtn2)
        videoBox.appendChild(pauseBtn)
        box.appendChild(tags)
        box.appendChild(asideInfos)
        asideInfos.appendChild(likesInfos)
        likesInfos.appendChild(likesImg)
        likesInfos.appendChild(likesNb)
        asideInfos.appendChild(commentsInfos)
        commentsInfos.appendChild(commentsImg)
        commentsInfos.appendChild(commentsNb)
        asideInfos.appendChild(shareInfos)
        shareInfos.appendChild(shareImg)
        shareInfos.appendChild(shareNb)
    })
})