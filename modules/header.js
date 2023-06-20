
export function headerCreate(place) {
	place.innerHTML = ''
	place.innerHTML = `
	      <div class="left">
                <a href='/'>
                   <img src="/img/uzum logo.svg" alt="img">
                </a>
                <button class="category">Каталог</button>
            </div>
        
            <div class="search">
                <form action="#">
                    <input type="text" placeholder="Искать товары">
                        <span class="material-icons">
                            search
                        </span>
                </form>
               
             </div>
            <div class="right">
                <span class="material-icons">
                    person
                    </span>
                    <h2>Войти</h2>
                    <a href='/pages/fav.html'>
                    <h2 ">Избранное</h2>
                </a>
                

                <a href='/pages/card.html'>
                <h2>Корзина</h2>
            </a>
             
            </div>
    `
}
let toCartId = JSON.parse(localStorage.getItem("liked")) || [];
let toLike  = JSON.parse(localStorage.getItem("favourite")) || [];
 export function reload(arr, place) {
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
        let div = document.createElement("div")
        let div2 = document.createElement("div")
        let a = document.createElement("a")
        div.classList.add("h")
        div2.classList.add("cart")
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

        a.append(img)
        txt.append(p)
        divfori.append(a)
        ret.append(imret,h35)
        cont.append(divfori,txt,ret,ganre)
        ganre.append( p2,btn)
        btn.append(div,div2)
        place.append(cont)
        div.append(spn)
        div2.append(spon)

       
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



export function footer(place) {
	place.innerHTML = ''
	place.innerHTML = `
    <div class="conta">
            <div class="box">
                <h3>О нас</h3>
                <h4>Пункты выдачи</h4>
                <h4>Вакансии</h4>
              </div>
  
              <div class="box">
              <h3>Пользователям</h3>
              <h4>Связаться с нами</h4>
              <h4>Вопрос - Ответ</h4>
            </div>
  
             <div class="box">
                <h3>Для предпринимателей</h3>
                <h4>Продавайте на Uzum</h4>
                <h4>Вход для продавцов</h4>
              </div>
  
              <div class="bo">
              <h3>Скачать приложение</h3>
              <div class="right">
              
              <div class="dor_img">
              <img src="/img/apple.svg" alt="img">
              <h3>AppStore</h3>
              </div>
              
              <div class="dor_img">
              <img src="/img/pl.svg" alt="img">
              <h3>Google Play</h3>
              </div>
              </div>
              <h3>Uzum в соцсетях</h3>
              <img src="/img/sociaal.svg" alt="img">
            </div>
        </div>

        <hr>
        <div class="down">
        <h3>Соглашение о конфиденциальности</h3>
        <h3>Пользовательское соглашение</h3>
        <h4>«2023© ИП ООО «UZUM MARKET». ИНН 309376127. Все права защищены»</h4>
        </div>
        
`
            
            
           
}


