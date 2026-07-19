document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".flip-card");

    const completedCards = new Set();

    const lessonComplete = document.getElementById("lesson-complete");

    let openedCard = null;

    cards.forEach(card => {

        card.addEventListener("click", (e) => {

            e.stopPropagation();

            // Close previously opened card
            if (openedCard && openedCard !== card) {
                openedCard.classList.remove("flipped");
            }

            // Toggle current card
            card.classList.toggle("flipped");
            if (card.classList.contains("flipped")) {

                completedCards.add(card);

                if (completedCards.size === cards.length) {

                    lessonComplete.classList.add("show");

                }

            }

            if (card.classList.contains("flipped")) {
                openedCard = card;
            } else {
                openedCard = null;
            }

        });

        // Keyboard support
        card.addEventListener("keydown", (e) => {

            if (e.key === "Enter" || e.key === " ") {

                e.preventDefault();

                card.click();

            }

        });

    });

    // Click outside closes everything
    document.addEventListener("click", () => {

        if (openedCard) {

            openedCard.classList.remove("flipped");

            openedCard = null;

        }

    });

});