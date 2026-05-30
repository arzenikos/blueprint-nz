import { text } from "stream/consumers";

export const bluenodeData = {
  key: "Prostate Cancer",
  text: "What is Prostate Cancer?",
  info: "Prostate cancer is a disease where cells grow uncontrollably...",
  children: [
    {
      key: "Detection",
      text: "Early Detection",
      info: "Detecting prostate cancer early improves outcomes.",
      children: [
        { key: "PSA", text: "PSA Test", info: "A PSA blood test checks antigen levels." },
        { key: "MRI", text: "MRI Scan", info: "An MRI can help spot abnormalities." }
      ],
      links: [
        { text: "Learn More", url: "https://example.com/prostate-cancer" },
      ]
    },
    {
      key: "Treatment",
      text: "Treatment Options",
      info: "Common treatments include surgery and radiation.",
      children: [
        { key: "Surgery", text: "Surgery", info: "Surgical removal of the prostate." },
        { key: "Radiation", text: "Radiation", info: "Uses radiation to kill cancer cells." }
      ],
      links: [
        { text: "Learn More", url: "https://example.com/prostate-cancer" },
      ]
    }
  ],
  links: [
    { text: "Learn More", url: "https://example.com/prostate-cancer" },
    { text: "Contact Us", url: "https://example.com/contact" }
  ]
};
