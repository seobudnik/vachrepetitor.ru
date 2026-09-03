document.getElementById("year").textContent = String(new Date().getFullYear());

const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = (form.querySelector('[name="name"]')?.value || "").trim();
    const contact = (form.querySelector('[name="contact"]')?.value || "").trim();
    const format = (form.querySelector('[name="format"]')?.value || "").trim();
    const message = (form.querySelector('[name="message"]')?.value || "").trim();
    const text = [
      "Здравствуйте! Хочу записаться на пробный урок.",
      `Имя: ${name}`,
      `Контакт: ${contact}`,
      `Формат: ${format}`,
      message ? `Комментарий: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(
      `https://wa.me/79163482705?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener",
    );
  });
}
