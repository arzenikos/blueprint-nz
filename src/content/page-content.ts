import { resourceContent } from './home'

// const title = resourceContent.contentByCategory["stage-0"].data.heading
// const description = resourceContent.contentByCategory["stage-0"].data.heading

export const content = {
    "stage-0": {
        heading1:{
            stageNum: `0`,
            headingNum: `1`,
            title: resourceContent.contentByCategory["stage-0"].data['0'].heading,
            label: `Empty Page`,
            description: resourceContent.contentByCategory["stage-0"].data['0'].content,
            main: {
                overview:{
                    subheading: 'Prostate Cancer Overview, Risks, & Symptoms & How to prevent it',
                    body: [
                        `Early prostate cancer rarely causes symptoms. Even people diagnosed with advanced prostate cancer may have no symptoms.`,
                        `Difficulty passing urine is not always a symptom of prostate cancer, but you should see your doctor if you are worried or if the following symptoms are ongoing:`,
                        {
                            items: [
                            'Frequent or sudden need to urinate',
                            'Blood in the urine or semen',
                            'A slow flow of urine',
                            'Needing to get up at night to pass urine',
                            'Feeling like your bladder is not empty after passing urine',
                            'Unexplained weight loss',
                            'Pain in bones (e.g. the neck, back, hips, or pelvis)'
                            ]
                        },
                    ],
                    link: 'https://www.cancercouncil.com.au/prostate-cancer/symptoms/',
                },
                whatItIs: {
                    subheading: 'What Prostate Cancer Is (and Isn’t) & How to prevent it',
                    main: [
                    `Prostate cancer starts in the prostate gland, which is part of the male reproductive system.`,
                    `It differs from other prostate conditions like benign prostatic hyperplasia (BPH) or prostatitis, which are not cancer.`,
                    {
                        type: 'list',
                        items: [
                        'Prostate cancer can be slow-growing or aggressive.',
                        'Not all prostate problems are cancer.',
                        'Only a biopsy can confirm prostate cancer.'
                        ]
                    }
                    ]
                },

                screeningMatters: {
                    subheading: 'Why Screening Matters',
                    main: [
                    `Screening helps detect prostate cancer before symptoms appear.`,
                    `Early detection increases the chance of successful treatment.`,
                    {
                        type: 'list',
                        items: [
                        'Some cancers grow slowly and may never cause problems.',
                        'Others may grow quickly and spread.',
                        'Regular screening can help identify which type it is.'
                        ]
                    }
                    ]
                },

                psaTest: {
                    subheading: 'What the PSA Test Actually Tells You',
                    main: [
                    `The PSA (Prostate-Specific Antigen) test measures the level of PSA in the blood.`,
                    `Higher levels may indicate prostate cancer, but can also result from other conditions.`,
                    {
                        type: 'list',
                        items: [
                        'PSA can be elevated due to infection, BPH, or recent ejaculation.',
                        'A high PSA doesn’t always mean cancer.',
                        'A normal PSA doesn’t rule it out completely.',
                        'It’s a tool—not a diagnosis on its own.'
                        ]
                    }
                    ]
                },
            },
            footnote: `Redirecting you back home in a moment…`,
            breadcrumbs: { link: "/stage0/what-you-need-to-know-early", current: true }
        },
        heading2:{
            stageNum: `0`,
            headingNum: `2`,
            title: resourceContent.contentByCategory["stage-0"].data['1'].heading,
            label: `Empty Page`,
            description: resourceContent.contentByCategory["stage-0"].data['1'].content,
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
            breadcrumbs: { link: "/stage0/heading2", current: true }
        },
        heading3:{
            stageNum: `0`,
            headingNum: 3,
            title: resourceContent.contentByCategory["stage-0"].data['2'].heading,
            label: `Empty Page`,
            description: resourceContent.contentByCategory["stage-0"].data['2'].content,
            main: {
                PSATest:{
                    subheading: 'What is the PSA test?',
                    body: [
                        `Prostate-specic antigen, or PSA, is a protein produced by cells of the prostate gland. The PSA test measures the level of PSA in a man’s blood.`,
                        `The blood level of PSA can be elevated for a number of reasons. The most important is prostate cancer but in addition a number of benign (non-cancerous) causes can raise the PSA. This includes a urinary tract infection, in ammation of the prostate or an enlarged prostate.`,
                    ],
                    link: 'https://otagourology.co.nz/what-we-treat/psa-testing-and-screening/',
                },
                PSARecom:{
                    subheading: 'Is the PSA test recommended for prostate cancer screening?',
                    body: [
                        ` PSA screening is where a blood PSA is obtained from a man who has no evidence of prostate cancer.  This allows us to calculate the riskof having the disease.`,
                        ` Recent evidence recommends PSA screening but there is widespread agreement that any man who is considering getting tested should rst be informed in detail about the potential harms and bene ts`
                    ],
                    link: '#',
                },
                PSAResult:{
                    subheading: ' What is a normal PSA test result?',
                    body: [
                         `There is no specific normal or abnormal level of PSA but there is a strong correlation between raised PSA and prostate cancer. We usually use a cut o level depending on your age. At Otago Urology we feel that the levels given below allow us to have a good safety margin to detect prosate cancer and not to over investigate a patient with a low risk.`,
                        // {
                        //     items: [
                        //     'item'
                        //     ]
                        // },
                    ],
                    link: '#',
                },
                PSALimitations: {
                    subheading: 'What are some of the limitations and potential harms of the PSA test for prostate cancer screening?',
                    body: [
                        `Finding a small tumor may not reduce a man’s chance of dying from prostate cancer. Some tumors found through PSA testing grow so slowly that they are unlikely to ever threaten a man’s life. Any treatment would be overdoing it and expose the patient to significant risks from complications of surgery or radiotherapy.`,
                        `A false-positive test result occurs when a man’s PSA level is elevated but no cancer is actually present. This may create anxiety for a man and his family and lead to additional medical procedures, such as a prostate biopsy, that can be harmful. Possible side effects of biopsies include serious infections, pain, and bleeding.`,
                        `A false-negative test result occurs when a man’s PSA level is low even though he actually has prostate cancer. This may give a false sense of assurance to the man, his family, and his doctor, potentially delaying necessary treatment.`,
                    ],
                    link: '#',
                },       
                PSAMonitoring: {
                    subheading: 'How is the PSA test used in men who have been treated for prostate cancer?',
                    body: [
                        `The PSA test is used to monitor patients with a history of prostate cancer to detect recurrence. If a man’s PSA level begins to rise after treatment, it may be the first sign that the cancer has returned.`,
                        `Any detectable PSA in a man who has had his prostate removed for cancer is considered abnormal and must be followed up immediately.`,
                    ],
                    link: 'https://otagourology.co.nz/what-we-treat/psa-testing-and-screening/',
                },                         
            },
            footnote: `Redirecting you back home in a moment…`,
            breadcrumbs: { link: "/stage0/heading3", current: true }
        },        
    },
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
    "stage-2": {
        heading1:{
            stageNum: `2`,
            headingNum: `1`,
            title: resourceContent.contentByCategory["stage-2"].data['0'].heading,
            label: `Empty Page`,
            description: resourceContent.contentByCategory["stage-2"].data['0'].content,
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
            breadcrumbs: { link: "/stage2/heading1", current: true }
        },
        heading2:{
            stageNum: `2`,
            headingNum: `2`,
            title: resourceContent.contentByCategory["stage-2"].data['1'].heading,
            label: `Empty Page`,
            description: resourceContent.contentByCategory["stage-2"].data['1'].content,
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
            breadcrumbs: { link: "/stage2/heading2", current: true }
        },
        heading3:{
            stageNum: `2`,
            headingNum: `3`,
            title: resourceContent.contentByCategory["stage-2"].data['2'].heading,
            label: `Empty Page`,
            description: resourceContent.contentByCategory["stage-2"].data['2'].content,
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
            breadcrumbs: { link: "/stage2/heading3", current: true }
        },
    },
    "stage-3": {
        heading1:{
            stageNum: `3`,
            headingNum: `1`,
            title: resourceContent.contentByCategory["stage-3"].data['0'].heading,
            label: `Empty Page`,
            description: resourceContent.contentByCategory["stage-3"].data['0'].content,
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
            breadcrumbs: { link: "/stage3/heading1", current: true }
        },
        heading2:{
            stageNum: `3`,
            headingNum: `2`,
            title: resourceContent.contentByCategory["stage-3"].data['1'].heading,
            label: `Empty Page`,
            description: resourceContent.contentByCategory["stage-3"].data['1'].content,
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
            breadcrumbs: { link: "/stage3/heading2", current: true }
        },
        heading3:{
            stageNum: `3`,
            headingNum: `3`,
            title: resourceContent.contentByCategory["stage-3"].data['2'].heading,
            label: `Empty Page`,
            description: resourceContent.contentByCategory["stage-3"].data['2'].content,
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
            breadcrumbs: { link: "/stage3/heading3", current: true }
        },
    },
    "stage-4": {
        heading1:{
            stageNum: `4`,
            headingNum: `1`,
            title: resourceContent.contentByCategory["stage-4"].data['0'].heading,
            label: `Empty Page`,
            description: resourceContent.contentByCategory["stage-4"].data['0'].content,
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
            breadcrumbs: { link: "/stage4/heading1", current: true }
        },
        heading2:{
            stageNum: `4`,
            headingNum: `2`,
            title: resourceContent.contentByCategory["stage-4"].data['1'].heading,
            label: `Empty Page`,
            description: resourceContent.contentByCategory["stage-4"].data['1'].content,
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
            breadcrumbs: { link: "/stage4/heading2", current: true }
        },
        heading3:{
            stageNum: `4`,
            headingNum: `3`,
            title: resourceContent.contentByCategory["stage-4"].data['2'].heading,
            label: `Empty Page`,
            description: resourceContent.contentByCategory["stage-4"].data['2'].content,
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
            breadcrumbs: { link: "/stage4/heading3", current: true }
        },
        
    },
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
    "researcher": {
        heading1:{
            stageNum: `research`,
            headingNum: `1`,
            title: resourceContent.contentByCategory["researcher"].data['0'].heading,
            label: `Empty Page`,
            description: resourceContent.contentByCategory["researcher"].data['0'].content,
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
            breadcrumbs: { link: "/research/heading1", current: true }
        },
        heading2:{
            stageNum: `research`,
            headingNum: `2`,
            title: resourceContent.contentByCategory["researcher"].data['1'].heading,
            label: `Empty Page`,
            description: resourceContent.contentByCategory["researcher"].data['1'].content,
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
            breadcrumbs: { link: "/research/heading2", current: true }
        },
        heading3:{
            stageNum: `research`,
            headingNum: `3`,
            title: resourceContent.contentByCategory["researcher"].data['2'].heading,
            label: `Empty Page`,
            description: resourceContent.contentByCategory["researcher"].data['2'].content,
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
            breadcrumbs: { link: "/research/heading3", current: true }
        },
        
    },
}