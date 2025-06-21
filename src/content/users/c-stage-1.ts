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
                    link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPoycQYcP9ZIAKNGNHkIWK-tJsgWLZArKwxA&s',
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
                    alt:"https://my.clevelandclinic.org/-/scassets/images/org/health/articles/kegel-exercises-for-men",
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
                        { 
                            detail:"Common medications include LHRH agonists (like leuprolide) or anti-androgens (like bicalutamide)",
                            image:"/assets/s1/bicalutamide.jpg",
                            alt:"https://c8.alamy.com/comp/2RTW9PX/bicalutamide-molecule-it-is-nonsteroidal-anti-androgen-for-prostate-cancer-skeletal-chemical-formula-paper-packaging-for-drugs-vector-illustration-2RTW9PX.jpg"
                        },
                        { 
                            detail:"Chemotherapy may be used if the cancer has spread beyond the prostate.",
                            image:"/assets/s2/chemotherapy-for-prostate-cancer-hero.jpg",
                            alt:"https://www.hopkinsmedicine.org/-/media/images/health/1_-conditions/prostate-cancer_-disease/chemotherapy-for-prostate-cancer-hero.jpg?h=500&iar=0&mh=500&mw=1300&w=1297&hash=412A8799886690732E6AD576CCB74586"
                        },
                        { 
                            detail:"Medications are often used alongside surgery or radiation as part of a broader treatment strategy.",
                            image:"/assets/s1/meds",
                            alt:"https://media.istockphoto.com/id/1480595414/photo/senior-man-taking-a-pill-in-a-bathroom.jpg?s=612x612&w=0&k=20&c=f-GkLanZnekDFGoNcjUp3VizcdWS138mJOfEnlzpV7c="
                        },
                        { 
                            detail:"Side effects can include fatigue, hot flushes, mood changes, and sexual dysfunction — these are managed as part of the care plan.",
                            image:"/assets/s1/side-effects.JPG",
                            alt:"https://www.shutterstock.com/image-photo/contemplative-man-leaning-on-large-600nw-2461917699.jpg"
                        },
                        { 
                            detail:"Care planning includes regular checkups, PSA monitoring, mental health support, and managing quality of life.",
                            image:"/assets/s2/checkup.jpg",
                            alt:"https://media.istockphoto.com/id/1473559507/photo/doctor-in-surgery-with-male-patient-using-digital-tablet.jpg?s=612x612&w=0&k=20&c=uUmS26ApuGpYB9ee4Zd7QhQEhSrU-1ySRHRKl2pylVQ="
                        },

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