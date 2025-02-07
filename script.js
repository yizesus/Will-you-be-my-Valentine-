const messages = [
    "Em chắc chưaaa?",
    "Suy nghĩ kĩ chưaaa??",
    "Có phải zậy khum vậyyyy?",
    "làm ơn đi mà mia oiii",
    "Suy nghĩ kĩ điiii!",
    "Em nói khum là anh buồn óo...",
    "là anh sẽ rất buồn óo...",
    "là anh sẽ rất rất rất buồn óo...",
    "anh sẽ khum hỏi nữaaaa đó...",
    "Đùa thuii, nói có iii ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}