import { button } from "./compBtn.js"

export const modalComp = (
	titleText = "Default title",
	bodyText = "default body",
	className = ""
) => {
	// create the modal and add important attributes likes tabindex and some classes
	const divElement = document.createElement("div")
	divElement.setAttribute("tabindex", "-1")
	divElement.classList.add("overlay-modal")
	divElement.classList.add("d-none")

	const handleClick = (e) => {
		// evaluate what classes the e (event) contains
	}

	divElement.addEventListener("click", handleClick)

	// create the modal content element (div) with a class "modal-content"

	// create the modal header element (div) with a class "modal-header"
	// this element will also accept a dynamic class that will change its background color
	// see modal.css

	// create a title that accepts text as dynamic data through the titleText param

	// create a body element with its class "class-body"
	// evaluate bodyText
	// console.log(typeof bodyText)

	// is it a text or a node element ?

	modalHeader.appendChild(modalTitle)
	modalHeader.appendChild(button("X", handleClick, "btn"))

	const modalFooter = document.createElement("footer")
	modalFooter.classList.add("modal-footer")

	// add dynamic class name for background color
	// add a button component than handles the click event and passes a class too

	// here you have some variable names that you can use to declare your different modal parts
	modalContent.appendChild(modalHeader)
	modalContent.appendChild(modalBody)
	modalContent.appendChild(modalFooter)

	divElement.appendChild(modalContent)

	return divElement
}
