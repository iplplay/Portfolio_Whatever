document.addEventListener("DOMContentLoaded", () => {
  const titleElement = document.getElementById("typing-title");
  const subElement = document.getElementById("typing-sub");
  const cursorTitle = document.getElementById("cursor-title");
  const cursorSub = document.getElementById("cursor-sub");

  const texts = [
    {
      title: "머시깽이",
      sub: "진취를 위해 무엇이든지 하겠다는 우리의 포부입니다.",
    },
    { title: "Whatever", sub: "We do whatever we can do." },
  ];

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingTarget = "title";

  function type() {
    const current = texts[textIndex];
    const fullText = typingTarget === "title" ? current.title : current.sub;
    const element = typingTarget === "title" ? titleElement : subElement;
    const cursorActive = typingTarget === "title" ? cursorTitle : cursorSub;
    const cursorInactive = typingTarget === "title" ? cursorSub : cursorTitle;

    cursorActive.style.visibility = "visible";
    cursorInactive.style.visibility = "hidden";

    const displayedText = fullText.substring(0, charIndex);
    element.textContent = displayedText;

    if (!isDeleting && charIndex < fullText.length) {
      charIndex++;
      setTimeout(type, 120);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(type, 60);
    } else {
      if (!isDeleting) {
        if (typingTarget === "title") {
          typingTarget = "sub";
          charIndex = 0;
          setTimeout(type, 500);
        } else {
          isDeleting = true;
          setTimeout(type, 1500);
        }
      } else {
        if (typingTarget === "sub" && charIndex === 0) {
          typingTarget = "title";
          charIndex = texts[textIndex].title.length;
          setTimeout(type, 200);
        } else if (typingTarget === "title" && charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
          typingTarget = "title";
          setTimeout(type, 500);
        } else {
          setTimeout(type, 60);
        }
      }
    }
  }

  type();
});
