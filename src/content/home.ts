export const heroContent = {
    title: "Every Journey Deserves the Right Guide",
    description: "Navigate prostate cancer with guidance curated for patients, caregivers, and researchers alike.",

    description1: "From diagnosis to discovery, we’re here with resources for every role and every stage.",

    description2: "Get the facts right on Prostate Cancer.",

    exploreButton: "Explore BluePrint",
    exploreLink: "/bluenode",
    carouselImages: [
      {
        src: "/assets/images/placeholder-image-1.jpg",
        alt: "Hero image 1"
      },
      {
        src: "/assets/images/placeholder-image-2.jpg",
        alt: "Hero image 2"
      },
      {
        src: "/assets/images/placeholder-image-3.jpg",
        alt: "Hero image 3"
      }
    ],
};

export const userContent = {
    title: "A Path Just for You",
    description: " Understanding where you stand is the first step to healing and helping. Let’s begin your journey with care that’s made for you.",
    users: [
        { icon: "0", label: "stage-0", type: "Patient"},
        { icon: "1", label: "stage-1", type: "Patient"},
        { icon: "2", label: "stage-2", type: "Patient"},
        { icon: "3", label: "stage-3", type: "Patient"},              
        { icon: "4", label: "stage-4", type: "Patient"},         
    ],
    other: [
        { icon: "caregiver", label: "caregiver", type:  "Caregiver" },
        { icon: "researcher", label: "researcher", type:  "Researcher" },
    ],
};

export const resourceContent = {
    sectionTitle: "Stage 0 – Stay Ahead, Stay Informed",
    sectionSubtitle: "Prostate Cancer Resource Hub",
    ctaButton: "Learn More",
    contentByCategory: {
        "stage-0": {
            parentLink: "stage-0",
            title: "Stage 0 – Stay Ahead, Stay Informed",
            data: [
                {
                    heading: "What You Need to Know Early",
                    content: [
                        "➤ Intro to prostate basics, risks, symptoms", 
                        "➤ What prostate cancer is (and isn\’t)", 
                        "➤ Why screening matter", 
                        "➤ What the PSA test actually tells you"
                    ],
                },
                {
                    heading: "Small Choices, Big Impact",
                    content: [
                        "➤ Nutrition tips to support prostate health",
                        "➤ Building healthy sleep & fitness habits",
                        "➤ How lifestyle influences your risk"
                    ],
                },
                {
                    heading: "Should I Get Screened?",
                    content: [
                        "➤ PSA test info, who screening is for, etc.",
                        "➤ What “watchful waiting” means.",
                        "➤ Next steps & questions to ask. How to track changes without stress"
                    ],
                },
            ],
        },
        "stage-1": {
            parentLink: "stage-1",
            title: "Stage 1 – You Caught It Early. That’s Power",
            data: [
                {
                    heading: "Understanding Your Diagnosis",
                    content: [
                        "➤ What Stage 1 means, in plain terms.",
                        "➤ First-line treatment options explained.",
                        "➤ What staying on active surveillance looks like"
                    ],
                },
                {
                    heading: "Strength Starts with Care",
                    content: [
                        "➤ Eating to support recovery.",
                        "➤ Sleep hygiene during stress.",
                        "➤ Safe movement & light fitness"
                    ],
                },
                {
                    heading: "Managing the Mental Load",
                    content: [
                        "➤ How to cope with “what if” thoughts.",
                        "➤ Support networks and simple tools.",
                        "➤ When and how to ask for help."
                    ],
                }
            ],
        },
        "stage-2": {
            parentLink: "stage-2",
            title: "Stage 2 – You’re Not in This Alone",
            data: [
                {
                    heading: "Navigating Your Options",
                    content: [
                        "➤ Treatment paths: surgery, radiation, hormone therapy.",
                        "➤ What to expect during and after.",
                        "➤ Working with your medical team."
                    ],
                },
                {
                    heading: "Staying Emotionally Steady",
                    content: [
                        "➤ Mental health check-ins.",
                        "➤ Talking to family, friends, or a counselor.",
                        "➤ Guided tools to reduce overwhelm."
                    ],
                },
                {
                    heading: "Your Body, Your Needs",
                    content: [
                        "➤ Managing side effects through food & rest.",
                        "➤ Handling fatigue & disrupted sleep.",
                        "➤ Keeping active within your limits."
                    ],
                },
            ],
        },
        "stage-3": {
            parentLink: "stage-3",
            title: "Stage 3 – It’s a Lot. We’ll Walk It With You",
            data: [
                {
                    heading: "What to Expect Now",
                    content: [
                        "➤ Stage 3 treatment landscape.",
                        "➤ Coordinating care across teams.",
                        "➤ Understanding more complex symptoms."],
                },
                {
                    heading: "Caring for a Tired Body",
                    content: [
                        "➤ Gentle nutrition and hydration tips.",
                        "➤ Fatigue, sleep disruption, and what helps.",
                        "➤ Movement when you can — or resting when you need."],
                },
                {
                    heading: "Finding Your Ground",
                    content: [
                        "➤ Naming difficult emotions.",
                        "➤ Support groups that feel real.",
                        "➤ Keeping some control in the chaos"],
                }
            ],
        },
        "stage-4": {
            parentLink: "stage-4",
            title: "Stage 4 – Comfort. Dignity. You.",
            data: [
                {
                    heading: "The Care That Fits You",
                    content: [
                        "➤ Treatment vs. comfort decisions.",
                        "➤ What palliative support actually means.",
                        "➤ Being heard by your team"],
                },
                {
                    heading: "Support for the Day-to-Day",
                    content: [
                        "➤ Eating what feels right.",
                        "➤ Sleep, pain relief, and symptom tools.",
                        "➤ Movement, touch, or stillness — what works for you."],
                },
                {
                    heading: "Honouring Your Life",
                    content: [
                        "➤ Processing what matters to you.",
                        "➤ Creative legacy & joy in small things. ",
                        "➤ Support for family & chosen whānau"],
                }
            ],
        },
        "caregiver": {
            parentLink: "researcher",
            title: "Caregiver – You’re Helping. Don’t Forget You Matter Too.",
            data: [
                {
                    heading: "The Basics You Need",
                    content: [
                        "➤ What’s happening in your loved one’s body.",
                        "➤ How to assist with treatment & symptoms.",
                        "➤ Clear answers to tough questions."],
                },
                {
                    heading: "You’re Part of This — But You’re Still You",
                    content: [
                        "➤ Managing burnout, sleep loss, and food fatigue.",
                        "➤ Fitness or rest — what your body asks for.",
                        "➤ Emotional weight & how to put it down sometimes."],
                },
                {
                    heading: "Real Support for Real People",
                    content: [
                        "➤ Who to call, where to go.",
                        "➤ Practical guides, appointment planners.",
                        "➤ Honest voices from other caregivers."],
                }
            ],
        },
        "researcher": {
                parentLink: "researcher",
                title: "Researcher – Explore. Understand. Advance.",
                data: [
                {
                    heading: "Structured Understanding + Statistics",
                    content: [
                        "➤ Disease progression: staging, grading, biomarkers.",
                        "➤ Diagnostic pathways: PSA, biopsy, imaging.",
                        "➤ Cross-system comparisons (NZ, AUS, US, EU).",
                        "➤ Population data & cohort breakdowns"],
                },
                {
                    heading: "Trials, Treatment & Innovation",
                    content: [
                        "➤ Ongoing trials & novel therapies (NZ/international).",
                        "➤ Treatment outcomes by demographic & stage.",
                        "➤ Health equity & access gaps.",
                        "➤ NZ-specific research themes (rural, Māori, Pacific populations)."],
                },
                {
                    heading: "Tools, Grants & Collaboration",
                    content: [
                        "➤ Active and upcoming grant opportunities (HRC, MBIE, etc.).",
                        "➤ Submission guidelines & funding timelines.",
                        "➤ Participant recruitment tools. Data-sharing agreements & ethics resources.",
                        "➤ Researcher contact networks & collaboration portals"],
                }
            ]
        }
    }
};

export const overviewContent = {
    title: "About BluePrintNZ",
    description: "",
    mainButton: "Learn More About Us",
    link: "/about",
    carouselImages: [],
    paragraph1: "BluePrintNZ is a platform designed to showcase modern web development techniques and best practices using Astro and Netlify.",
    paragraph2: "Our mission is to provide a blueprint for building fast, accessible, and modern websites that leverage the power of Astro's multi-page application architecture and Netlify's deployment platform.",
    mediaSource: "http://player.vimeo.com/video/41406753?byline=0&amp;portrait=0",
    // mediaSource: "https://youtu.be/Jr5Lb-amQDY"
};