import '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'

// React code
import React from 'react'
import ReactDOM from 'react-dom'

// Import Reacy components that I created
import MyReactComponent from './modules/MyReactComponent'

ReactDOM.render(<MyReactComponent />, document.querySelector("#my-react-example"))

new StickyHeader()
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
new MobileMenu()
let modal

document.querySelectorAll(".open-modal").forEach(el => {
	el.addEventListener("click", e => {
		e.preventDefault()
		if (typeof modal == "undefined") {
			import(/* webpackChunkName: "modal" */'./modules/Modal').then(x => {
				modal = new x.default()
				setTime0ut(() => modal.openTheModal(), 20)
			}).catch(() => console.log("There is a problem"))
		} else {
			modal.openTheModal()
		}
	})
})


if (module.hot) {
	module.hot.accept()
}


