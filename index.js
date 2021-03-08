// Decoding the message
const { hash } = window.location;

const message = atob(hash.replace("#", ""));

if (message) {
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#message-show").classList.remove("hide");
  document.querySelector("h1").innerHTML = message;
}

// Handle Form Submission
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#link-form").classList.remove("hide");
  const input = document.querySelector("#message-input");
  // Encoding the entered string
  const encrypted = btoa(input.value);
  // Add the encoded value to the second link input
  const linkInput = document.querySelector("#link-input");
  linkInput.value = `${window.location}#${encrypted}`;
  linkInput.select();
});
