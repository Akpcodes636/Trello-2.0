"use strict";

function switchButton(buttonId) {
  const buttons = document.querySelectorAll('.nav-button');
  buttons.forEach(button => {
    button.classList.remove('active');
  });
  document.getElementById(buttonId).classList.add('active');

  // Hide all feature cards
  const featureCards = document.querySelectorAll('[id^="feature-card-"]');
  featureCards.forEach(card => {
    card.classList.add('hidden');
  });

  // Show the corresponding feature card
  const selectedCardIndex = Number(buttonId.replace('btn-', '')) - 1; // Subtract 1 to adjust to zero-based index
  const selectedCardId = `feature-card-${selectedCardIndex}`;
  const selectedCard = document.getElementById(selectedCardId);
  if (selectedCard) {
    selectedCard.classList.remove('hidden');

    // Smooth scroll to the selected feature card
    selectedCard.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  } else {
    console.error(`Could not find corresponding feature card with ID '${selectedCardId}'`);
  }
}


// Button Mobile
function switchButtonMobile(buttonIds) {
  const buttons = document.querySelectorAll('.nav-btn');

  buttons.forEach(button => {
    button.classList.remove('activeEl');
  });

  document.getElementById(buttonIds).classList.add('activeEl');

  // Hide all feature cards
  const featureCards = document.querySelectorAll('[id^="feature-card-"]');
  featureCards.forEach(card => {
    card.classList.add('hidden');
  });

  // Show the corresponding feature card
  const selectedCardIndex = Number(buttonIds.replace('btns-', '')) - 1; // Subtract 1 to adjust to zero-based index
  const selectedCardId = `feature-card-${selectedCardIndex}`;
  const selectedCard = document.getElementById(selectedCardId);
  if (selectedCard) {
    selectedCard.classList.remove('hidden');
    // Smooth scroll to the selected feature card
    selectedCard.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  } else {
    console.error(`Could not find corresponding feature card with ID '${selectedCardId}'`);
  }
}


