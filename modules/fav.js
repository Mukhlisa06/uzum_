import { headerCreate,  footer} from "./header";  
import axios from "axios";
let header = document.querySelector('header')
let foot = document.querySelector('footer')

headerCreate(header)
footer(foot)

let data = JSON.parse(localStorage.getItem('favourite')) || []
let url = "http://localhost:9120/goods";
let cons = document.querySelector(".smth")
console.log(data)
let favCard = []
let tem = []


function cartFetch(arr) {
    axios.get(url)

    .then(res => {
        favCard = []


        for(let item of res.data) {
            for(let id of arr) {
                if(item.id === id) {
                    favCard.push(item)
                }
            }
        }
        reloadFav(favCard, cons)

    })
}

cartFetch(data)
let toCartId = JSON.parse(localStorage.getItem("liked")) || [];
 function reloadFav(arr, place) {
    tem = []
    place.innerHTML = ''
    
	for (let item of arr) {
	    let cont = document.createElement("div")
        let img = document.createElement("img")
        let ganre = document.createElement("div")
        let p = document.createElement("p")
        let p2 = document.createElement("p")
        let btn = document.createElement("button")
        let spon = document.createElement("span")
        let ret = document.createElement("div")
        let imret = document.createElement("img")
        let h35 = document.createElement("h6")
        let divfori = document.createElement("div")
        let txt = document.createElement("div")
        let spn = document.createElement("span")
        let a = document.createElement("a")

     
        txt.classList.add("txt")
        divfori.classList.add("im")
        ret.classList.add("reting")
        imret.src = "/img/star.svg"
        h35.innerHTML = item.rating
        spon.classList.add("material-symbols-outlined")
        spn.classList.add("material-symbols-outlined")
        spn.innerHTML = 'favorite'
        spon.innerHTML = 'shopping_cart'
        cont.classList.add('item_content')
        img.src = item.media[0]
        ganre.classList.add("name_genre")
        p.innerHTML = item.title
        p2.innerHTML = item.price + " " + "сум"
        a.href = "/pages/id.html?id=" + item.id
        spn.classList.add("fav")
        a.append(img)
        txt.append(p)
        divfori.append(a)
        ret.append(imret,h35)
        cont.append(divfori,txt,ret,ganre)
        ganre.append( p2,btn)
        btn.append(spn,spon)
        place.append(cont)

        spn.onclick = () => {
            data = data.filter(el => el != item.id)
            localStorage.setItem('favourite', JSON.stringify(data))
            cartFetch(data)
        }

        spon.onclick = () => {
			if (toCartId.includes(item.id)) {
				toCartId = toCartId.filter((el) => el !== item.id);
				localStorage.setItem("liked", JSON.stringify(toCartId));
                spon.classList.remove("car_act")
			} else {
				toCartId.push(item.id);
				localStorage.setItem("liked", JSON.stringify(toCartId));
                spon.classList.add("car_act")
			}
		};
	}
}