export enum AttributeCard {
    "cat" = "cat",
    "says" = "says",
    "fact" = "fact"
}

export default class Card extends HTMLElement {
    cat: string = "";
    says: string = "";
    fact: string = "";

    static get observedAttributes(){
        const attrs: Record<AttributeCard, null> = {
            cat: null,
            says: null,
            fact: null
        }
        return Object.keys(attrs);
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    attributeChangedCallback(propName: AttributeCard, olValue: string | undefined, newValue: string){
        switch(propName){
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){this.shadowRoot.innerHTML = `
           <section>
           <img src="${this.cat}">
           <h1>${this.says}</h1>
           <p>${this.fact}</p>
           </section>`
        }
    }

}

customElements.define('app-card', Card)