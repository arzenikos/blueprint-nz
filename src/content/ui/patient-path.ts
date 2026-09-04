export type TopicCard = {
  label: string;
  href: string;
  iconLabel: string;
};

export type TopicGroup = {
  title: string;
  cards: TopicCard[];
};

export type PathSection = {
  id: string;
  title: string;
  groups: TopicGroup[];
};

export const patientSections: PathSection[] = [
  {
    id: 'general',
    title: 'Prostate cancer basics, tests, recurrence, & support',
    groups: [
      {
        title: 'Risk, testing & prevention',
        cards: [
          { label: 'What you need to know early', href: '/stage-0/what-you-need-to-know-early', iconLabel: 'Placeholder: early knowledge icon' },
          { label: 'Should I get screened?', href: '/stage-0/should-i-get-screened', iconLabel: 'Placeholder: screening icon' },
          { label: 'Small choices, big impact', href: '/stage-0/small-choices-big-impact', iconLabel: 'Placeholder: lifestyle icon' },
          { label: 'Sexual health', href: '/empty', iconLabel: 'Placeholder: sexual health icon' },
        ],
      },
      {
        title: 'Managing recurrent prostate cancer',
        cards: [
          { label: 'Understanding recurrence', href: '/empty', iconLabel: 'Placeholder: recurrence icon' },
          { label: 'Monitoring and next steps', href: '/empty', iconLabel: 'Placeholder: monitoring icon' },
          { label: 'Talking with your care team', href: '/empty', iconLabel: 'Placeholder: care team icon' },
        ],
      },
      {
        title: 'Living well & support',
        cards: [
          { label: 'Community & support networks', href: '/empty', iconLabel: 'Placeholder: community icon' },
          { label: 'Emotional wellbeing', href: '/empty', iconLabel: 'Placeholder: wellbeing icon' },
          { label: 'Daily health habits', href: '/empty', iconLabel: 'Placeholder: daily habits icon' },
          { label: 'Support for whānau', href: '/caregiver', iconLabel: 'Placeholder: whānau icon' },
        ],
      },
    ],
  },
  {
    id: 'stage-1',
    title: 'Stage 1: Early-stage and localised options',
    groups: [
      {
        title: '',
        cards: [
          { label: 'Understanding your diagnosis', href: '/stage-1/understanding-your-diagnosis', iconLabel: 'Placeholder: diagnosis icon' },
          { label: 'Navigating your options', href: '/stage-1/navigating-your-options', iconLabel: 'Placeholder: options icon' },
          { label: "Making every doctor's visit count", href: '/stage-1/doctor-time-making-every-visit-count', iconLabel: 'Placeholder: appointment icon' },
          { label: 'Community & support networks', href: '/empty', iconLabel: 'Placeholder: community icon' },
          { label: 'Health & Well-being', href: '/empty', iconLabel: 'Placeholder: wellbeing icon' },
        ],
      },
    ],
  },
  {
    id: 'stage-2',
    title: 'Stage 2: Intermediate-risk prostate cancer',
    groups: [
      {
        title: 'Navigating your options',
        cards: [
          { label: 'Treatment paths', href: '/stage-1/navigating-your-options', iconLabel: 'Placeholder: treatment paths icon' },
          { label: 'Working with your medical team', href: '/stage-1/doctor-time-making-every-visit-count', iconLabel: 'Placeholder: medical team icon' },
          { label: 'What to expect', href: '/stage-2/staying-grounded-through-it-all', iconLabel: 'Placeholder: expectations icon' },
        ],
      },
      {
        title: 'Staying emotionally steady',
        cards: [
          { label: 'Mental health check-ins', href: '/stage-2/staying-grounded-through-it-all', iconLabel: 'Placeholder: mental health icon' },
          { label: 'Talking to family', href: '/caregiver', iconLabel: 'Placeholder: family conversation icon' },
          { label: 'Community & support', href: '/empty', iconLabel: 'Placeholder: support icon' },
          { label: 'Tools to reduce overwhelm', href: '/stage-2/staying-grounded-through-it-all', iconLabel: 'Placeholder: tools icon' },
        ],
      },
      {
        title: "Your body's needs",
        cards: [
          { label: 'Managing side effects', href: '/stage-2/your-body-your-needs', iconLabel: 'Placeholder: side effects icon' },
          { label: 'Handling fatigue', href: '/stage-2/body-care-that-builds-you-up', iconLabel: 'Placeholder: fatigue icon' },
          { label: 'Keeping active', href: '/stage-2/body-care-that-builds-you-up', iconLabel: 'Placeholder: activity icon' },
        ],
      },
    ],
  },
  {
    id: 'stage-3',
    title: 'Stage 3: Locally advanced prostate cancer',
    groups: [
      {
        title: '',
        cards: [
          { label: 'What to expect now', href: '/stage-3/what-to-expect-now', iconLabel: 'Placeholder: stage 3 overview icon' },
          { label: 'Caring for a tired body', href: '/stage-3/caring-for-a-tired-body', iconLabel: 'Placeholder: tired body icon' },
          { label: 'Finding your ground', href: '/stage-3/finding-your-ground', iconLabel: 'Placeholder: grounding icon' },
        ],
      },
    ],
  },
  {
    id: 'stage-4',
    title: 'Stage 4: Living well with advanced prostate cancer',
    groups: [
      {
        title: '',
        cards: [
          { label: 'The care that fits you', href: '/stage-4/the-care-that-fits-you', iconLabel: 'Placeholder: care plan icon' },
          { label: 'Support for the day-to-day', href: '/stage-4/support-for-the-day-to-day', iconLabel: 'Placeholder: daily support icon' },
          { label: 'Honouring your life', href: '/stage-4/honouring-your-life', iconLabel: 'Placeholder: legacy icon' },
        ],
      },
    ],
  },
];

export const whanauCards: TopicCard[] = [
  { label: 'Understanding your support role', href: '/caregiver/the-basics-you-need', iconLabel: 'Placeholder: dancing figures icon' },
  { label: 'Supporting daily life & well-being', href: '/caregiver/youre-part-of-this-but-youre-still-you', iconLabel: 'Placeholder: dancing figures icon' },
  { label: 'Emotional support & communication', href: '/caregiver/real-support-for-real-people', iconLabel: 'Placeholder: dancing figures icon' },
  { label: 'Navigating treatment & healthcare together', href: '/caregiver/the-basics-you-need', iconLabel: 'Placeholder: dancing figures icon' },
];

export const researchFeed = {
  title: 'Research Title',
  date: '5 July 2026',
  author: 'Iqhwa Redstone',
  affiliation: 'University of Canterbury',
  description: 'Short description',
  tags: ['Exercise', 'Diet', 'Medications'],
  href: '/researcher/trials-treatment-innovation',
};
