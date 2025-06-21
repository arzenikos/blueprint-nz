import { resourceContent } from './home'

export const content = {
    "stage-1": {
        heading1:{
            stageNum: `1`,
            headingNum: `1`,
            title: resourceContent.contentByCategory["stage-1"].data['0'].heading,
            label: `Empty Page`,
            description: resourceContent.contentByCategory["stage-1"].data['0'].content,
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
            breadcrumbs: { link: "/stage1/heading1", current: true }
        },
        heading2:{
            stageNum: `1`,
            headingNum: `2`,
            title: resourceContent.contentByCategory["stage-1"].data['1'].heading,
            label: `Empty Page`,
            description: resourceContent.contentByCategory["stage-1"].data['1'].content,
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
            breadcrumbs: { link: "/stage1/heading2", current: true }
        },
        heading3:{
            stageNum: `1`,
            headingNum: `3`,
            title: resourceContent.contentByCategory["stage-1"].data['2'].heading,
            label: `Empty Page`,
            description: resourceContent.contentByCategory["stage-1"].data['2'].content,
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
            breadcrumbs: { link: "/stage1/heading3", current: true }
        },
    }, 
}