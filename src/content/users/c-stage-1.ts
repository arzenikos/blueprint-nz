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
                    subheading: '-',
                    body: [
                        `p`,
                        `p`,
                        {
                            items: [
                                'item'
                            ]
                        },
                    ],
                    link: '#',
                },
            },
            footnote: `Redirecting you back home in a moment…`,
            breadcrumbs: { link: "/stage1/navigating-your-options", current: true }
        },
    },
}