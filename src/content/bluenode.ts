// Referenced by: pages/bluenode/index.astro
export const bluenodeData = {
  nodes: [
    {
      id: "root",
      label: "Prostate Cancer",
      description: "Prostate cancer is one of the most common types of cancer in men. The prostate is a small walnut-shaped gland that produces seminal fluid.",
      children: ["diagnosis", "treatment", "prevention", "support"]
    },
    {
      id: "diagnosis",
      label: "Diagnosis",
      description: "Early detection of prostate cancer increases treatment options. Screening methods include PSA tests, digital rectal exams, and biopsies.",
      children: ["screening", "symptoms", "stages"]
    },
    {
      id: "treatment",
      label: "Treatment Options",
      description: "Treatment options vary based on cancer stage, age, and overall health. Options include surgery, radiation therapy, hormone therapy, and more.",
      children: ["surgery", "radiation", "hormone"]
    },
    {
      id: "prevention",
      label: "Prevention",
      description: "While some risk factors can't be changed, lifestyle modifications may help reduce prostate cancer risk.",
      children: ["diet", "exercise", "screening"]
    },
    {
      id: "support",
      label: "Support Resources",
      description: "Support groups, counseling services, and educational resources are available for patients and families.",
      children: ["groups", "financial", "education"]
    },
    {
      id: "screening",
      label: "Screening Tests",
      description: "Regular screening can help detect prostate cancer early. Talk to your doctor about which tests are right for you.",
      children: []
    },
    {
      id: "symptoms",
      label: "Common Symptoms",
      description: "Early prostate cancer often has no symptoms. Advanced cases may cause urinary problems, erectile dysfunction, and other symptoms.",
      children: []
    },
    {
      id: "stages",
      label: "Cancer Stages",
      description: "Prostate cancer stages range from I to IV, with higher numbers indicating more advanced cancer that has spread beyond the prostate.",
      children: []
    },
    {
      id: "surgery",
      label: "Surgical Options",
      description: "Surgical procedures include radical prostatectomy, which removes the entire prostate gland and some surrounding tissue.",
      children: []
    },
    {
      id: "radiation",
      label: "Radiation Therapy",
      description: "Radiation therapy uses high-energy rays to kill cancer cells. It can be delivered externally or via implants placed in the prostate.",
      children: []
    },
    {
      id: "hormone",
      label: "Hormone Therapy",
      description: "Hormone therapy aims to reduce levels of male hormones (androgens) to stop them from stimulating prostate cancer growth.",
      children: []
    },
    {
      id: "diet",
      label: "Dietary Factors",
      description: "A diet rich in fruits, vegetables, and whole grains may help reduce prostate cancer risk. Limiting red meat and high-fat dairy products is also recommended.",
      children: []
    },
    {
      id: "exercise",
      label: "Physical Activity",
      description: "Regular exercise may help reduce prostate cancer risk and improve outcomes for those diagnosed with the disease.",
      children: []
    },
    {
      id: "groups",
      label: "Support Groups",
      description: "Connecting with others facing similar challenges can provide emotional support and practical advice.",
      children: []
    },
    {
      id: "financial",
      label: "Financial Assistance",
      description: "Various programs offer financial support for cancer treatment, medications, and related expenses.",
      children: []
    },
    {
      id: "education",
      label: "Educational Resources",
      description: "Knowledge is power. Learn more about prostate cancer through reliable resources and educational materials.",
      children: []
    }
  ]
};
