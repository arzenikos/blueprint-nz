export const bluenodeData = {
  key: `Prostate Cancer`,
  text: `What is Prostate Cancer?`,
  info: 
  `Prostate cancer is one of the four most common cancers globally, responsible for about 8% of all cancer cases and deaths as of 2012.
  <br><br>
  It places a significant economic burden on healthcare systems, with lifetime medical costs per U.S. patient estimated at over $110,000, and nationwide costs for men aged 65+ diagnosed in 2008 reaching $12.4 billion.
  <br><br>
  The disease often leads to serious health decline, progressing from localized cancer to metastases and eventual death, with each stage marked by worsening symptoms and increased treatment demands.`,
  children: [
    {
      key: `Detection`,
      text: `Early-Stage Prostate Cancer`,
      info:
      `<strong>Early-stage</strong>: Often curable through surgery or radiation.
      <br><br>
      -10–20% of men are diagnosed with metastatic disease intially
      <br><br>
      -20–30% with localized cancer eventually develop metastases`,
      children: [
        {
          key: `mCRPC`, text: `mCRPC`,
          info: 
          `<strong>Metastatic castration-resistant prostate cancer (mCRPC)</strong>
          <br>defined by tumor growth despite low testosterone levels—is the primary cause of death from prostate cancer.
          <br>Historically, men with mCRPC had a median survival of under 2 years.`
        },
        { 
          key: `MRI`, text: `MRI Scan`,
          info: 
          `An MRI can help spot abnormalities.`
        }
      ],
      links: [
        { text: `Learn More`, url: `https://example.com/prostate-cancer` },
      ]
    },
    {
      key: `mCRPC`,
      text: `mCRPC`,
      info:
      `<strong>Metastatic castration-resistant prostate cancer</strong><br>
      <ul>
        <li>-Defined by tumor growth despite low testosterone</li>
        <li>-Primary cause of prostate cancer deaths</li>
        <li>-Historically median survival under 2 years</li>
      </ul>

`,
      children: [
        { key: `Surgery`, text: `Surgery`, info: `Surgical removal of the prostate.` },
        { key: `Radiation`, text: `Radiation`, info: `Uses radiation to kill cancer cells.` }
      ],
      links: [
        { text: `Learn More`, url: `https://example.com/prostate-cancer` },
      ]
    }
  ],
  links: [
    { text: `Learn More`, url: `https://example.com/prostate-cancer` },
    { text: `Contact Us`, url: `https://example.com/contact` }
  ]
};
