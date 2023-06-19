import { headerCreate,   footer} from "./header";  
let header = document.querySelector('header')
let foot = document.querySelector('footer')
let con = document.querySelector(".cart_place")
headerCreate(header)
footer(foot)

 function reloadFav(arr) {
    con.innerHTML = ''
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
        let div = document.createElement("div")
        let div2 = document.createElement("div")

        div.classList.add("h")
        div2.classList.add("cart")
        txt.classList.add("txt")
        divfori.classList.add("im")
        ret.classList.add("reting")
        imret.src = "./img/star.svg"
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


       
        txt.append(p)
        divfori.append(img)
        ret.append(imret,h35)
        cont.append(divfori,txt,ret,ganre)
        ganre.append( p2,btn)
        btn.append(div,div2)
        place.append(cont)
        div.append(spn)
        div2.append(spon)
        con.append(cont)
       
	}
}