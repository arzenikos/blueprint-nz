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
            breadcrumbs: { link: "/caregiving/heading1", current: true }
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
            breadcrumbs: { link: "/caregiving/heading2", current: true }
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
            breadcrumbs: { link: "/caregiving/heading3", current: true }
        },
    },    
};