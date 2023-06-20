import { headerCreate,  footer} from "./header";   


let header = document.querySelector('header')
let foot = document.querySelector('footer')
let con = document.querySelector(".items")
let tvcon = document.querySelector(".tv")
let txt = document.querySelectorAll(".textt")



headerCreate(header)
footer(foot)
let first_section_moreBtn = document.querySelectorAll('.more button')
let black = document.querySelector(".bl")
let tvcart = []
let blackFri = []
let url = "http://localhost:9120/goods";

const getData = () => {
    fetch(url)
        .then(msg => msg.json())
        .then(data => {
            reload(data.slice(0, 10), con)
            console.log(data)
            
           first_section_moreBtn.forEach(btn => {
            btn.onclick = () => {
                let item = btn
                if (item.dataset.count === 'not-all') {
                    reload(data, con)
                    reload(blackFri,black)
                    item.dataset.count = 'all'
                    item.innerHTML = 'Скрыть'
                } else {
                    reload(data.slice(0, 10), con)
                    reload(blackFri.slice(0, 10),black)
                    item.dataset.count = 'not-all'
                    item.innerHTML = 'Показать еще'
                } 
            }
                
           })
       
          for(let item of data){
            if(item.type === "kitchen"){
                tvcart.push(item)
               reload(tvcart,tvcon)
            }
          
            if(item.isBlackFriday === true){
                blackFri.push(item)
                reload(blackFri.slice(0, 10),black)
            }
             
          }

          txt.forEach(t => {
            let f = document.createElement("h2") 
            let pric = document.createElement("h4")
            let tit = document.createElement("p")
            let i = Math.round(Math.random()*10)
            f.innerHTML = data[i].title
            pric.innerHTML = data[i].price + " " + "сум"
            tit.innerHTML = data[i].description
            t.append(f,pric,tit)
          })

         })


}

getData()


let toCartId = JSON.parse(localStorage.getItem("liked")) || [];
let toLike  = JSON.parse(localStorage.getItem("favourite")) || [];
console.log(toLike)
function reload(arr, place) {
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
        a.href = "/pages/id.html?id=" + item.id

        a.append(img)
        txt.append(p)
        divfori.append(a)
        ret.append(imret,h35)
        cont.append(divfori,txt,ret,ganre)
        ganre.append( p2,btn)
        btn.append(spn,spon)
        place.append(cont)
      

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

        spn.onclick = () => {
			if (toLike.includes(item.id)) {
				toLike = toLike.filter((el) => el !== item.id);
				localStorage.setItem("favourite", JSON.stringify(toLike));
                spn.classList.remove("fav")
			} else {
				toLike.push(item.id);
				localStorage.setItem("favourite", JSON.stringify(toLike));
                spn.classList.add("fav")
			}
		};


       
	}
} 

let category = document.querySelector(".category")
let cat = document.querySelector(".con")
let modal = document.querySelector(".modal")
let cdn = document.querySelector(".cdn")
category.onclick = () => {
   cat.classList.toggle("y")
   modal.classList.toggle("show")
   header.classList.toggle("h_act")
   cdn.classList.remove("hide")
   
}


let sear = document.querySelector(".search")

sear.onclick = () => {
    cat.classList.toggle("y")
    modal.classList.toggle("show")
    header.classList.toggle("h_act")
    cdn.classList.add("hide")
}



let search = document.querySelector(".modal__dialog  .inp")
let inputss = document.querySelector(".search input")

