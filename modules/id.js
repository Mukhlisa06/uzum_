import { headerCreate, reload,  footer} from "./header";  
let header = document.querySelector('header')
let foot = document.querySelector('footer')
headerCreate(header)
footer(foot)
let movie_id = location.search.split('=').at(-1)
let con = document.querySelector(".same_pro")
let img = document.querySelector(".f_liyer img")
let h1 = document.querySelector("h1")
let pric = document.querySelector(".price span")
let dis = document.querySelector(".discrip")
let plus = document.querySelector(".plus")
let count = document.querySelector(".count")
let minus = document.querySelector(".minus")
let url = "http://localhost:9120/goods";
const getData = () => {
    fetch(url)
        .then(msg => msg.json())
        .then(data => {
            let id = data[movie_id - 1]
            img.src = id.media[0]
            h1.innerHTML = id.title
            pric.innerHTML = id.price + " "
            dis.innerHTML = id.description
            let pl = []

            for(let item of data) {
                if(id.type === item.type){
                    pl.push(item)
                  reload(pl.slice(0,5), con)
                }
            }

            plus.onclick = () => {
                count.innerHTML++
                pric.innerHTML =  Math.floor(pric.innerHTML) +  Math.floor(id.price)
            }
    
    
            minus.onclick = () => {
                count.innerHTML--
              pric.innerHTML =  Math.floor(pric.innerHTML) -  Math.floor(id.price)
            }
            
           

        })}

        getData()
     

       
       

       
       