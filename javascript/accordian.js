class Panel{
    constructor(panel){
        this.panelContent = panel.querySelector(".panel-content");
        this.buttons = panel.querySelector(".panel-buttons");
        this.openButton = panel.querySelector(".panel-open");
        this.closeButton = panel.querySelector(".panel-close");
        this.buttons.addEventListener('click', () => {
            this.togglePanel();
        })
    }

        togglePanel(){
            this.openButton.classList.toggle("hide");
            this.closeButton.classList.toggle("hide");
            this.panelContent.classList.toggle("toggle");
        }
    }

    let panels = document.querySelectorAll(".panel");

    panels.forEach((panel) => {
        return new Panel(panel)
    })