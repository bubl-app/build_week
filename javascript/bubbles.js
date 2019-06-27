class BubbleItem{
    constructor(element){
        this.element = element;
    }
    select(){
        const items = document.querySelectorAll(".text-container");
        
        items.forEach((item) => {item.classList.remove("bubbleItemSelected")});

        this.element.classList.add("bubbleItemSelected");
    }
}

class BubbleLink{
    constructor(element){
        this.element = element;

        this.data = this.element.dataset.bubble;

        this.itemElement = document.querySelector(`.text-container[data-bubble="${this.data}"]`);
        // console.log(this.itemElement);

        this.bubbleItem = new BubbleItem(this.itemElement);
        // console.log(this.bubbleItem);

        this.element.addEventListener('click', () => {
            this.select();
        })
    };
    select() {
        let links = document.querySelectorAll(".bubbles");

        Array.from(links).forEach((item) => {item.classList.remove("bubbleLinkSelected")});
        this.element.classList.add("bubbleLinkSelected");
        this.bubbleItem.select();
    }
}

let links = document.querySelectorAll(".bubbles");
// console.log(links);

links.forEach((link) => {
    return new BubbleLink(link)
});





