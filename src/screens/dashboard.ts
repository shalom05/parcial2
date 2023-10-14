import { ApiCat, ApiText } from "../services/getData"
import "../components/export"
import { AttributeCard } from "../components/Card/card";
import { ApiType } from "../types/apiType";


export default class Dashboard extends HTMLElement {

    constructor(){
        super(),
        this.attachShadow({mode: 'open'})
    }

    async connectedCallback(){
        const Cat = await ApiCat();
        const Text = await ApiText();

        this.render(Cat, Text);
    }

    render(Cat: any, Text: any){
        if(this.shadowRoot){this.shadowRoot.innerHTML = `holi`}

        
            const card = this.ownerDocument.createElement("app-card");
            card.setAttribute(AttributeCard.cat, Cat);
            this.shadowRoot?.appendChild(card)
 

        const button = this.ownerDocument.createElement("button");
        button.innerText = "Traer Dato";
        this.shadowRoot?.appendChild(button)
        button.addEventListener("click",() => {
            console.log("click")
                const card = this.ownerDocument.createElement("app-card");
                card.setAttribute(AttributeCard.fact, Text);
                this.shadowRoot?.appendChild(card);
        });
    }
}

customElements.define('app-dashboard', Dashboard)