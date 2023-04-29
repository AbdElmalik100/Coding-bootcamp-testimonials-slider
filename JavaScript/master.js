let text = ["\" I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future. \"",
"\"If you want to lay the best foundation possible i'd recommend taking this course. The depth the insructors go into is incredible. I now feel so confident about starting up as a professional developer.\""]
let info = [["Tanya Sinclair" , "UX Engineer"],["John Tarkpor" , "Junior Front-end Developer"]]
let images = ["image-tanya.jpg" , "image-john.jpg"]

let theImage = document.querySelector(".hero")
let theText = document.querySelector(".txt p")
let theName = document.querySelector(".name")
let theJob = document.querySelector(".job")


let prevBtn = document.querySelector(".prev")
let nextBtn = document.querySelector(".next")

let counter = 0
let infoCounter = 0


// The Default Option
theImage.src = `images/${images[counter]}`
theText.innerHTML = text[counter]
theName.innerHTML = info[counter][infoCounter]
theJob.innerHTML = info[counter][infoCounter + 1]

prevBtn.addEventListener("click", (e) => {
    imageSlider()
})
nextBtn.addEventListener("click" , (e) => {
    imageSlider()
})



function imageSlider() {
    counter++
    if (counter === 2) {
        counter = 0
    }
    theImage.src = `images/${images[counter]}`
    theText.innerHTML = text[counter]
    theName.innerHTML = info[counter][infoCounter]
    theJob.innerHTML = info[counter][infoCounter + 1]
}