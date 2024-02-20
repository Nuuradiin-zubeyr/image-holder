// 
const imageSlider = document.querySelector("#imageSlider")
const nextBtn = document.querySelector("#nextButton")
const prevBtn = document.querySelector("#prevButton")



const images =[
    "https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://lh5.googleusercontent.com/p/AF1QipP20BOM772Kb432Qh96O9xO7LOo8rRHxIPbyiy1=w810-h468-n-k-no",
    "https://img.freepik.com/premium-photo/winter-rooftop-bars-city-views-cocktails_198067-12005.jpg?size=626&ext=jpg&uid=R135568844&ga=GA1.2.2036638764.1702721138&semt=sph",
    "https://img.freepik.com/free-photo/manhattan-financial-district-with-skyscrapers-brooklyn-bridge_649448-4691.jpg?size=626&ext=jpg&uid=R135568844&ga=GA1.2.2036638764.1702721138&semt=sph"
]

let indexImage =  4
function currentImage(){
    imageSlider.src = images[indexImage]
}

//Handle Next Button
nextBtn.addEventListener("click",function(){
    indexImage++;
    if(indexImage > images.length -1){
        indexImage = 0
    }
    currentImage()


})
prevBtn.addEventListener("click",function(){
    indexImage--;
    if(indexImage < 0){
        indexImage = 0
    }
    currentImage()
})



currentImage()