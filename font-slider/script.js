const slider = document.getElementById("fontSlider");
const fontValue = document.getElementById("fontValue");

const MIN_SIZE = 12;
const MAX_SIZE = 28;

slider.addEventListener("input", () => {
    let size = Number(slider.value);

    size = Math.max(MIN_SIZE, Math.min(MAX_SIZE, size));

    document.documentElement.style.setProperty(
        "--font-size",
        `${size}px`
    );

    fontValue.textContent = size;
});