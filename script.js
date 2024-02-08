class MyRombo extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<div class="rombo"></div>`;
      this.addEventListener('mouseover', this.handleMouseOver.bind(this));
      this.addEventListener('mouseout', this.handleMouseOut.bind(this));
    }
  
    handleMouseOver() {
      this.style.backgroundColor = '#b6adcd5c'; 
      this.style.transform = 'scale(1.1)'; 
    }
  
    handleMouseOut() {
      this.style.backgroundColor = '';
      this.style.transform = ''; 
    }
  }
      
  customElements.define('my-rombo', MyRombo);

function createDiamondRow(startTop, startLeft, rowCount) {
    for (let i = 0; i < rowCount; i++) {
      const myRombo = new MyRombo();
      document.body.appendChild(myRombo);
    
      const desplazamientoX = i * 30;
      const desplazamientoY = i * 30;
    
      myRombo.style.position = 'absolute';
      myRombo.style.top = `${startTop + desplazamientoY}px`;
      myRombo.style.left = `${startLeft + desplazamientoX}px`;
    }
  }
  
  createDiamondRow(-55, 110, 8);
  createDiamondRow(-55, 170, 7);
  createDiamondRow(-55, 230, 6);
  createDiamondRow(-25, 80, 8);
  createDiamondRow(35, 80, 7);
  createDiamondRow(95, 80, 11);
  createDiamondRow(155, 80, 9);
  createDiamondRow(215, 80, 9);
  createDiamondRow(275, 80, 7);
  createDiamondRow(335, 80, 7);
  createDiamondRow(395, 80, 5);
  createDiamondRow(455, 80, 5);
  createDiamondRow(515, 80, 3);
  createDiamondRow(575, 80, 1);

  function createDiamond(startTop, startLeft, rowCount) {
    for (let i = 0; i < rowCount; i++) {
      const myRombo = new MyRombo();
      document.body.appendChild(myRombo);
    
      const desplazamientoX = i * -30;
      const desplazamientoY = i * 30;
    
      myRombo.style.position = 'absolute';
      myRombo.style.top = `${startTop + desplazamientoY}px`;
      myRombo.style.left = `${startLeft + desplazamientoX}px`;
    }
  }

  createDiamond(30, 1450, 7);
  createDiamond(90, 1450, 6);
  createDiamond(150, 1450, 5);
  createDiamond(210, 1450, 6);
  createDiamond(270, 1450, 6);
  createDiamond(330, 1450, 6);
  createDiamond(390, 1450, 4);
  createDiamond(450, 1450, 5);
  createDiamond(510, 1450, 3);
  createDiamond(570, 1450, 1);