class Elem{
    
    constructor(szuloElem){
        //beállítja az adattagokat
        this.szuloElem = szuloElem;
        this.#htmlosszeallit() //a this a konkrét osztálypéldányra mutat
        //megfogjuk a html elemekhez
        this.divElem = this.szuloElem.children("div:last-child")
        this.pElem = this.divElem.children("p")
        console.log(this.divElem)
        console.log(this.pElem)
        this.divElem.on("click",()=>{
            this.#esemelyTrigger("elemkivalaszt")
        })
    }
    setErtek(ertek){
        this.pElem.html(ertek)
    }
    #htmlosszeallit(){
        let txt = '<div class="elem"><p></p></div>'
        this.szuloElem.append(txt)
    }
    //saját esemény
    //az osztály tud elmondani magáról dolgokat
    
    #esemelyTrigger(esemenyNev){
        const eseményem = new CustomEvent(esemenyNev,{detail:this})
        window.dispatchEvent(eseményem);
    }
}
export default Elem;