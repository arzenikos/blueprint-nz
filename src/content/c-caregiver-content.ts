import { resourceContent } from './home'

export const content = {
    "caregiver": {
        heading1:{
            stageNum: `caregiver`,
            headingNum: `1`,
            title: resourceContent.contentByCategory["caregiver"].data['0'].heading,
            label: `Empty Page`,
            description: resourceContent.contentByCategory["caregiver"].data['0'].content,
            main: {
                x:{
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
            breadcrumbs: { link: "/caregiving/the-basics-you-need", current: true }
        },
        heading2:{
            stageNum: `caregiving`,
            headingNum: `2`,
            title: resourceContent.contentByCategory["caregiver"].data['1'].heading,
            label: `Empty Page`,
            description: resourceContent.contentByCategory["caregiver"].data['1'].content,
            main: {
                x:{
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
            breadcrumbs: { link: "/caregiving/youre-part-of-this-but-youre-still-you", current: true }
        },
        heading3:{
            stageNum: `caregiving`,
            headingNum: `3`,
            title: resourceContent.contentByCategory["caregiver"].data['2'].heading,
            label: `Empty Page`,
            description: resourceContent.contentByCategory["caregiver"].data['2'].content,
            main: {
                x:{
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
            breadcrumbs: { link: "/caregiving/real-support-for-real-people", current: true }
        },
    },    
};