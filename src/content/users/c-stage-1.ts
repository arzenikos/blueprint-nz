import { resourceContent } from '../home'

export const content = {
    "stage-1": {
        // understanding-your-diagnosis
        heading1: {
            stageNum: `1`,
            headingNum: `1`,
            title: resourceContent.contentByCategory["stage-1"].data['0'].heading,
            label: `Empty Page`,
            description: resourceContent.contentByCategory["stage-1"].data['0'].content,
            main: {
                x: {
                    subheading: '',
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
            breadcrumbs: { link: "/stage1/understanding-your-diagnosis", current: true }
        },
        // strength-starts-with-care
        heading2: {
            stageNum: `1`,
            headingNum: `2`,
            title: resourceContent.contentByCategory["stage-1"].data['1'].heading,
            label: `Empty Page`,
            description: resourceContent.contentByCategory["stage-1"].data['1'].content,
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