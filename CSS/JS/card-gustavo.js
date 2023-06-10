'use strict'

class card extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.imagem__mockup = null
    this.imagem__background = null
  }

  static get observedAttributes() {
    return [
      'imagem__mockup',
      'imagem__background',
    ]
  }


  attributeChangedCallback(nameAttr, oldValue, newValue) {
    this[nameAttr] = newValue
  }

  connectedCallback() {
    this.shadow.appendChild(this.component())
    this.shadow.appendChild(this.styles())
  }

  styles() {
    const css = document.createElement('style')
    css.textContent = `

    .container {
      width:60%;
      height: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      background: rgb(5,14,39);
      background: linear-gradient(30deg, rgba(5,14,39,1) 0%, rgba(26,56,140,1) 35%, rgba(255,255,255,1) 100%);
      border-radius: 32px;
      overflow: hidden;
    }
    
    .container__image {
      height: 100%;
      width: 80%;
      overflow: hidden;
      transform: translateY(20%);
      position: relative;
      display: flex;
      justify-content: center;
    }
    
    .mockup2 {
      width: 120%;
      height: fit-content;
      z-index: 2;
      position: absolute;
    }
    
    .background {
      width: 76%;
      height: fit-content;
      transform: translateY(3%);
    }
    
      
        `

    return css
  }

  component() {
    const container = document.createElement('div')
    container.classList.add('container')

    const container__image = document.createElement('div')
    container__image.classList.add('container__image')

    const mockup = document.createElement('img')
    mockup.src = this.imagem__mockup
    mockup.classList.add('mockup2')

    const background = document.createElement('img')
    background.src = this.imagem__background
    background.classList.add('background')

    container__image.append(mockup, background)
    container.append(container__image)

    return container
  }
}

customElements.define('card-gustavo', card)
