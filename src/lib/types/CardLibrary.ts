export const resourceCardConfig = {
    icon: {
        name: ['chevron-right','chevron-right','chevron-right'],//'chevron-right',
        class: 'card-icon', // optional utility class
        textColor: 'var(--color-palette-five)',
        bgColor: 'var(--color-palette-one)',
    },
    textClass: {
        setVariant: 'card-rsc-item',
        heading: 'card-heading', // optional utility class
        content: 'card-content', // optional utility class
    },
    color: {
        heading: 'var(--color-palette-one)',
        cardBg: 'bg-[var(--color-palette-four)]',
    },
    extraConfig: {
        hoverFx: true,
        layout: 'px-5 py-8'
    },
};

export const blueCardConfig = {
    icon: {
        name: ['bluebeacon','bluenode','bluestats'],
        class: 'card-icon', // optional utility class
        textColor: 'var(--color-palette-five)',
        bgColor: 'background: var(--color-palette-one)',
    },
    textClass: {
        setVariant: 'card-blue-item',
        heading: 'card-blue-heading', // optional utility class
        content: 'card-blue-content px-10', // optional utility class
    },
    color: {
        heading: 'var(--color-palette-three)',
        cardBg: 'bg-[var(--color-palette-four)] hover:bg-[var(--color-palette-five)]',
    },
    extraConfig: {
        hoverFx: false,
        layout:'px-10 h-60 rounded-lg w-120 md:w-full shadow-md flex items-center justify-center',
    },
};