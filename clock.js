class MyClock extends HTMLElement {
    static styles = `
  <style>
  :host {
    width: 100%;
  }
  #clock {
        display: block;
        color: white;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 10vw;
        font-weight: 700;
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        text-shadow: 2px -1px 10px #000000;
    }
  </style>
  `;
    get template() {
      return `
      ${MyClock.styles}
      <div id="clock"></div>
      `;
    }
  
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.shadowRoot.innerHTML = this.template;
      this.init();
    }
  
    init() {
        const clockTime = () => {
            let date = new Date(); 
            let hh = date.getHours();
            let mm = date.getMinutes();
            let ss = date.getSeconds();
            let session = "AM";

            if(hh === 0){
                hh = 12;
            }
            if(hh > 12){
                hh = hh - 12;
                session = "PM";
            }

            hh = (hh < 10) ? "0" + hh : hh;
            mm = (mm < 10) ? "0" + mm : mm;
            ss = (ss < 10) ? "0" + ss : ss;
            
            let time = hh + ":" + mm;
            this.shadowRoot.getElementById("clock").innerHTML = time;
        }
        clockTime();

        setInterval(() => { clockTime(); }, 1000);
    }
}

customElements.define("my-clock", MyClock);