import { resourceContent } from '../home'

export const content = {
    "stage-1": {
        // understanding-your-diagnosis
        heading1: {
            stageNum: `1`,
            headingNum: `1`,
            title: resourceContent.contentByCategory["stage-1"].data['0'].heading,
            label: `Understanding Your Diagnosis`,
            description: resourceContent.contentByCategory["stage-1"].data['0'].content,
            main: {
                Gleason: {
                    subheading: 'What’s a Gleason Score?',
                    body: 
                        `It’s a number doctors use to show how aggressive prostate cancer is. Lower scores mean slower-growing cancer; higher scores mean it may spread faster.`,
                    image:"/assets/s1/The-importance-of-the-Gleason-Score.png",
                    link: '#',
                },
            },
            footnote: `Redirecting you back home in a moment…`,
            breadcrumbs: { link: "/stage1/understanding-your-diagnosis", current: true }
        },
        // strength-starts-with-care
        heading2: {
            stageNum: `1`,
            headingNum: `2`,
            title: resourceContent.contentByCategory["stage-1"].data['1'].heading,
            label: `Strength Starts with Care`,
            description: resourceContent.contentByCategory["stage-1"].data['1'].content,
            main: {
                KegelIntro: {
                    subheading: 'Kegel Exercise',
                    description:`Kegel exercises are a simple, no-equipment way to boost bladder control and support prostate recovery—just a few squeezes a day can make a big difference.`,
                    kegelImage:"/assets/s1/s1h2-kegel-steps.jpg",
                    thumbnail: '/assets/s1/s1h2-kegel-vid-thumbnail.JPG',
                    link: 'https://youtu.be/XWpRg0mgsTI',
                },
            },
            footnote: `Redirecting you back home in a moment…`,
            breadcrumbs: { link: "/stage1/strength-starts-with-care", current: true }
        },
        // navigating-your-options
        heading3: {
            stageNum: `1`,
            headingNum: `3`,
            title: resourceContent.contentByCategory["stage-1"].data['2'].heading,
            label: `Empty Page`,
            description: resourceContent.contentByCategory["stage-1"].data['2'].content,
            main: {
                x: {
                subheading: "Managing treatment with meds and a solid care plan",
                body: [
                    `Treating prostate cancer often involves a combination of medications and a personalized care plan tailored to the stage and aggressiveness of the cancer.`,
                    `Doctors may use hormone therapy (also known as androgen deprivation therapy) to slow cancer growth by reducing testosterone levels.`,
                    {
                    items: [
                        "Common medications include LHRH agonists (like leuprolide) or anti-androgens (like bicalutamide).",
                        "Chemotherapy may be used if the cancer has spread beyond the prostate.",
                        "Medications are often used alongside surgery or radiation as part of a broader treatment strategy.",
                        "Side effects can include fatigue, hot flushes, mood changes, and sexual dysfunction — these are managed as part of the care plan.",
                        "Care planning includes regular checkups, PSA monitoring, mental health support, and managing quality of life."
                    ]
                    }
                ],
                link: "https://www.cancercouncil.com.au/prostate-cancer/treatment/"
                }
            },
            footnote: `Redirecting you back home in a moment…`,
            breadcrumbs: { link: "/stage1/navigating-your-options", current: true }
        },
    },
}