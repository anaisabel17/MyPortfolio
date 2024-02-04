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
  
  createDiamondRow(-55, -110, 8);
  createDiamondRow(-55, -50, 7);
  createDiamondRow(-55, 10, 6);
  createDiamondRow(-25, -140, 8);
  createDiamondRow(35, -140, 7);
  createDiamondRow(95, -140, 11);
  createDiamondRow(155, -140, 9);
  createDiamondRow(215, -140, 9);
  createDiamondRow(275, -140, 7);
  createDiamondRow(335, -140, 7);
  createDiamondRow(395, -140, 5);
  createDiamondRow(455, -140, 5);
  createDiamondRow(515, -140, 3);
  createDiamondRow(575, -140, 1);

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

  createDiamond(30, 1210, 7);
  createDiamond(90, 1210, 6);
  createDiamond(150, 1210, 5);
  createDiamond(210, 1210, 6);
  createDiamond(270, 1210, 6);
  createDiamond(330, 1210, 6);
  createDiamond(390, 1210, 4);
  createDiamond(450, 1210, 5);
  createDiamond(510, 1210, 3);
  createDiamond(570, 1210, 1);