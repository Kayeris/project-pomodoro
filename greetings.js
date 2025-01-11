console.log("testing printing");
class Greeting extends HTMLElement {

    static styles = `
  <style>
  :host {
    width: 100%;
    display: flex;
  }
  #greeting {
        color: white;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 3vw;
        margin: 0;
        position: absolute;
        top: 65%;
        left: 50%;
        transform: translate(-50%, -30%);
        text-align: center;
        text-shadow: 2px -1px 10px #000000;
    }
  </style>
  `;
    get template() {
      return `
      ${Greeting.styles}
      <div id="greeting"></div>
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
        const hello = () => {
            let date = new Date(); 
            let hh = date.getHours();
            let session = "AM";
            let greeting = "Good Morning! 🔆";

            if(hh === 0){
                hh = 12;
            }
            if(hh > 12){
                hh = hh - 12;
                session = "PM";
                greeting = "Good Afternoon ☀︎";
            }
            if(hh > 5 && session == "PM"){
                greeting = "Good Evening 🌙";
            }
            this.shadowRoot.getElementById("greeting").innerHTML = greeting;
        }
        hello();

        // setInterval(() => { clockTime(); }, 1000);
    }
}

customElements.define("hello-greetings", Greeting);