const bars = document.querySelector(".hamburger")
const navbar = document.querySelector(".navbar")
const closeNav = document.querySelector(".close")
const nav = document.querySelector("nav")
const allNavItems = document.querySelectorAll(".nav-item")

const form = document.querySelector("form")
const name = form.querySelector("#name")
const lastname = form.querySelector("#lastname")
const email = form.querySelector("#email")
const btnSend = form.querySelector(".send")
const errorText = form.querySelector(".errortext")
const closeFormBtn = form.querySelector(".close")
const openFormBtn = document.querySelector(".openForm")

const leftArrow = document.querySelector(".left")
const rightArrow = document.querySelector(".right")

const sliderbtn1 = document.querySelector("#one")
const sliderbtn2 = document.querySelector("#two")
const sliderbtn3 = document.querySelector("#three")
const sliderbtn4 = document.querySelector("#four")
const sliderbtns = document.querySelectorAll(".circle-btn")
let imagesScroll = document.querySelector(".scroll-images")
let i = 0


//nav
const toggleNavbar = () => {
	bars.classList.toggle("active")
	closeNav.classList.toggle("active")
	navbar.classList.toggle("active")
	nav.classList.toggle("collapse")

allNavItems.forEach(item => {
		item.addEventListener("click", () => {
			navbar.classList.remove("active")
			closeNav.classList.remove("active")
			bars.classList.remove("active")
			nav.classList.remove("collapse")
		})
	})

}

//form 
const showError = input => {
	const formBox = input.parentElement

	formBox.classList.add("error")
}
const clearError = input => {
	const formBox = input.parentElement

	formBox.classList.remove("error")
}

const checkForm = input => {
	input.forEach(el => {
		if (el.value === "") {
			console.log(el)
			showError(el)
			errorText.textContent = "Proszę uzupełnić wymagane pola!"
		} else {
			clearError(el)
		}
	})
}

const checkEmail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	if (re.test(email.value)) {
		clearError(email)
	} else {
		// do zastanowienia ??
		showError(email)
		if (email.value != "") {
			errorText.textContent = "Nieprawidłowy adres email"
		}
	}
}

const formValidation = (input, form) => {
	let errors = 0
	input.forEach(el => {
		if (el.parentElement.classList.contains("error")) {
			errors++
		}
	})
	if (errors == 0) {
		errorText.textContent = ""
		let data = {
			name: name.value,
			surname: lastname.value,
			email: email.value,
			accept: true,
		}

		console.log(JSON.stringify(data))
	}
}
const clearAllErrors = input => {
	input.forEach(el => {
		clearError(el)
	})
	errorText.textContent = ""
}
const clearInput = input => {
	input.forEach(el => {
		el.value = ""
	})
}
const closeForm = () => (form.style.display = "none")

const showForm = () => (form.style.display = "flex")

// slider
const scrollLeft = () => {
	mediaScrollLeft()

	if (i > 0) {
		i--
		sliderbtns.forEach(btn => btn.classList.remove("active"))
		sliderbtns[i].classList.add("active")
	}
}

const scrollRight = () => {
	mediaScrollRight()

	if (i < 3) {
		i++
		sliderbtns.forEach(btn => btn.classList.remove("active"))
		sliderbtns[i].classList.add("active")
	}
}

const scorll1 = () => {
	imagesScroll.scrollTo(0, 0)
	sliderbtns.forEach(btn => btn.classList.remove("active"))
	sliderbtn1.classList.add("active")
}

const scroll2 = () => {
	if (window.matchMedia("(max-width:414px").matches) {
		imagesScroll.scrollTo(370, 0)
	} else if (window.matchMedia("(max-width:768px").matches) {
		imagesScroll.scrollTo(690, 0)
	} else if (window.matchMedia("(max-width:1024px").matches) {
		imagesScroll.scrollTo(880, 0)
	} else if (window.matchMedia("(max-width:1440px").matches) {
		imagesScroll.scrollTo(1170, 0)
	} else if (window.matchMedia("(max-width:1904px").matches) {
		imagesScroll.scrollTo(1150, 0)
	} else {
		imagesScroll.scrollTo(1565, 0)
	}
	sliderbtns.forEach(btn => btn.classList.remove("active"))
	sliderbtn2.classList.add("active")
}
const scroll3 = () => {
	if (window.matchMedia("(max-width:414px").matches) {
		imagesScroll.scrollTo(740, 0)
	} else if (window.matchMedia("(max-width:768px").matches) {
		imagesScroll.scrollTo(1380, 0)
	} else if (window.matchMedia("(max-width:1024px").matches) {
		imagesScroll.scrollTo(1760, 0)
	} else if (window.matchMedia("(max-width:1440px").matches) {
		imagesScroll.scrollTo(2340, 0)
	} else if (window.matchMedia("(max-width:1904px").matches) {
		imagesScroll.scrollTo(2300, 0)
	} else {
		imagesScroll.scrollTo(3130, 0)
	}
	sliderbtns.forEach(btn => btn.classList.remove("active"))
	sliderbtn3.classList.add("active")
}
const scroll4 = () => {
	if (window.matchMedia("(max-width:414px").matches) {
		imagesScroll.scrollTo(1110, 0)
	} else if (window.matchMedia("(max-width:768px").matches) {
		imagesScroll.scrollTo(2070, 0)
	} else if (window.matchMedia("(max-width:1024px").matches) {
		imagesScroll.scrollTo(2640, 0)
	} else if (window.matchMedia("(max-width:1440px").matches) {
		imagesScroll.scrollTo(3510, 0)
	} else if (window.matchMedia("(max-width:1904px").matches) {
		imagesScroll.scrollTo(3450, 0)
	} else {
		imagesScroll.scrollTo(4695, 0)
	}
	sliderbtns.forEach(btn => btn.classList.remove("active"))
	sliderbtn4.classList.add("active")
}

const mediaScrollRight = () => {
	if (window.matchMedia("(max-width:414px").matches) {
		imagesScroll.scrollBy(370, 0)
	} else if (window.matchMedia("(max-width:768px").matches) {
		imagesScroll.scrollBy(690, 0)
	} else if (window.matchMedia("(max-width:1024px").matches) {
		imagesScroll.scrollBy(880, 0)
	} else if (window.matchMedia("(max-width:1440px").matches) {
		imagesScroll.scrollBy(1170, 0)
	} else if (window.matchMedia("(max-width:1904px").matches) {
		imagesScroll.scrollBy(1150, 0)
	} else {
		imagesScroll.scrollBy(1565, 0)
	}
}
const mediaScrollLeft = () => {
	if (window.matchMedia("(max-width:414px").matches) {
		imagesScroll.scrollBy(-370, 0)
	} else if (window.matchMedia("(max-width:768px").matches) {
		imagesScroll.scrollBy(-690, 0)
	} else if (window.matchMedia("(max-width:1024px").matches) {
		imagesScroll.scrollBy(-880, 0)
	} else if (window.matchMedia("(max-width:1904px").matches) {
		imagesScroll.scrollBy(-1150, 0)
	} else if (window.matchMedia("(max-width:1440px").matches) {
		imagesScroll.scrollBy(-1000, 0)
	} else {
		imagesScroll.scrollBy(-1565, 0)
	}
}


// LISTENERS 
//navigation 
bars.addEventListener("click", toggleNavbar)
closeNav.addEventListener("click", toggleNavbar)

//form 
btnSend.addEventListener("click", e => {
	e.preventDefault()
	checkForm([name, lastname, email])
	checkEmail(email)
	formValidation([name, lastname, email], form)
})
closeFormBtn.addEventListener("click", () => {
	clearInput([name, lastname, email])
	clearAllErrors([name, lastname, email])
	closeForm()
})
openFormBtn.addEventListener("click", showForm)

//slider
sliderbtn2.addEventListener("click", scroll2)
sliderbtn3.addEventListener("click", scroll3)
sliderbtn4.addEventListener("click", scroll4)
sliderbtn1.addEventListener("click", scorll1)

leftArrow.addEventListener("click", scrollLeft)
rightArrow.addEventListener("click", scrollRight)
