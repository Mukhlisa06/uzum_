import axios from "axios";
import { headerCreate, footer} from "./header";   

let header = document.querySelector("header")
let foot = document.querySelector("footer")

headerCreate(header)
footer(foot)

let caa = document.querySelector(".cart_item")
let cart_item = document.querySelector(".cart_item .right")
let data = JSON.parse(localStorage.getItem('liked')) || []
let url = "http://localhost:9120/goods";


let xcart = []
let xarr = []

function cartFetch (arr) {
    axios.get(url)

    .then(res => {
        xcart = []


        for(let item of res.data) {
            for(let id of arr) {
                if(item.id === id) {
                    xcart.push(item)
                }
            }
        }
        reloadG(xcart, cart_item)

    })
}

cartFetch(data)


function reloadG(arr, place) {
    xarr = []
    place.innerHTML = ""


    for(let item of arr){
        let coont = document.createElement("div")
        let imbox = document.createElement("div")
        let txbox = document.createElement("div")
        let img = document.createElement("img")
        let h3 = document.createElement("h3")
        let h4 = document.createElement("h4")
        let button = document.createElement("div")
        let plus = document.createElement("div")
        let count = document.createElement("div")
        let minus = document.createElement("div")
        let butto = document.createElement("button")

         coont.classList.add("coont")
         imbox.classList.add("img_box") 
         txbox.classList.add("txbox")
         img.src =  item.media[0]
         h3.innerHTML = item.title
         h4.innerHTML = item.price 
         button.classList.add("btn")
         plus.classList.add("plus")
         count.classList.add("count")
         minus.classList.add("minus")
         butto.innerHTML = "Удалить"
         plus.innerHTML = "+"
         minus.innerHTML = "-"
         count.innerHTML = 1


         coont.append(imbox , txbox)
         imbox.append(img)
         txbox.append(h3,h4,button,butto)
         button.append(plus,count,minus)
         place.append(coont)



         plus.onclick = () => {
            count.innerHTML++
            h4.innerHTML =  Math.floor(h4.innerHTML) +  Math.floor(item.price)
         }

         minus.onclick = () => {
            count.innerHTML--
            h4.innerHTML =  Math.floor(h4.innerHTML) -  Math.floor(item.price)
         }

         butto.onclick = () => {
            data = data.filter(el => el != item.id)
            localStorage.setItem('liked', JSON.stringify(data))
            cartFetch(data)
         }
    }



}
