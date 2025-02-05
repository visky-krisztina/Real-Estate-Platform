// Script to show and hide login modal
document.addEventListener("DOMContentLoaded", function () {
	const loginBtn = document.querySelector(".login-text"); // Login button
	const modal = document.getElementById("loginModal"); // Modal container
	const closeModal = document.querySelector(".close"); // Close button

	// Hide modal on page load
	modal.style.display = "none";

	loginBtn.addEventListener("click", function () {
		modal.style.display = "flex"; // Show modal
		modal.setAttribute("aria-hidden", "false");
	});

	closeModal.addEventListener("click", function () {
		modal.style.display = "none";
		modal.setAttribute("aria-hidden", "true");
	});

	// Hide modal when clicking outside of modal content
	window.addEventListener("click", function (event) {
		if (event.target === modal) {
			modal.style.display = "none";
			modal.setAttribute("aria-hidden", "true");
		}
	});
});

// Script to show the next 4 cards
document.getElementById("loadMore").addEventListener("click", function () {
	const hiddenCards = document.querySelectorAll(".property-card.hidden");
	const buttonText = document.getElementById("helper-p-loadMore");
	const svgIcon = document.getElementById("viewMoreSvg");
	const arrowPath = document.getElementById("arrow-path");

	if (hiddenCards.length > 0) {
		for (let i = 0; i < 4 && i < hiddenCards.length; i++) {
			hiddenCards[i].classList.remove("hidden");
		}

		buttonText.textContent = "View Less";

		// Change the SVG path to the "View Less" icon (upward arrow)
		arrowPath.setAttribute("d", "M15 12.5L10 7.5L5 12.5");
	} else {
		// If there are no hidden cards left, hide the last 4 cards
		const allCards = document.querySelectorAll(".property-card");
		for (let i = allCards.length - 1; i >= 4; i--) {
			allCards[i].classList.add("hidden");
		}

		buttonText.textContent = "View More";

		// Change the SVG path back to the "View More" icon (downward arrow)
		arrowPath.setAttribute("d", "M5 7.5L10 12.5L15 7.5");
	}
});

// Script to show the answers for the FAQ
document.querySelectorAll(".faq-question").forEach((button) => {
	button.addEventListener("click", () => {
		const accordion = button.closest(".accordion");
		const answer = accordion.querySelector(".faq-answer");
		const isExpanded = button.getAttribute("aria-expanded") === "true";

		button.setAttribute("aria-expanded", !isExpanded);
		answer.classList.toggle("show", !isExpanded);

		const arrow = button.querySelector(".arrow");
		if (arrow) {
			arrow.style.transform = isExpanded ? "rotate(0)" : "rotate(180deg)";
		}
	});
});
