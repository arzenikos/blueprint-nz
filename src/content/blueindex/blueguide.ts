import { resourceContent } from '../home.ts'

// const nodeTitleGetter = (title:string, user: string) => {
//   return resourceContent.contentByCategory[user].title || `Stage 0 – Stay Ahead, Stay Informed`;
// };

export const blueguideData = {
  key: `Start Here`,
  text: `Start Here`,
  info: `
    <br><br>
  `,
  children: [
    {
      key: `Stage Zero`,
      text: "Stage 0 – Stay Ahead, Stay Informed",
      info: `
      `,
      children: [
        {
          key: `Starters, Prevention, Testing`,
          text: `What You Need to Know Early`,
          info: `
          <strong></strong>
          + Intro to prostate basics, risks, symptoms,  <br>
          + What prostate cancer is (and isn\’t),  <br>
          + Why screening matter,  <br>
          + What the PSA test actually tells you <br>
          `
        },
        {
          key: `Nutrition & Healthy Lifestyle Tips`,
          text: `Small Choices, Big Impact`,
          info: `
          <strong></strong>
          + Nutrition tips to support prostate health<br>
          + Building healthy sleep & fitness habits<br>
          + How lifestyle influences your risk<br>
          `
        },
        {
          key: `Testing`,
          text: `Should I Get Screened?`,
          info: `
          <strong></strong>
          + PSA test info, who screening is for, etc.<br>
          + What “watchful waiting” means<br>
          + Next steps & questions to ask. How to track changes without stress<br>
          `
        },        
      ]
    },
    {
      key: `Stage One`,
      text: "Stage 1 – You Caught It Early. That’s Power",
      info: `
      `,
      children: [
        {
          key: `Diagnosis`,
          text: `Understanding Your Diagnosis`,
          info: `
          + What Stage 1 means, in plain terms.<br>
          + First-line treatment options explained.",<br>
          + What staying on active surveillance looks like<br>
          `
        },
        {
          key: `Diet & Fitness`,
          text: `Strength Starts with Care`,
          info: `
          + Eating to support recovery.<br>
          + Sleep hygiene during stress.<br>
          + Safe movement & light fitness<br>
          `
        },        
        {
          key: `Treatment Plan`,
          text: `Navigating Your Options`,
          info: `
          + Treatment paths: surgery, radiation, hormone therapy.<br>
          + What to expect during and after.<br>
          + Working with your medical team.<br>
          `
        },        
      ]
    },
    {
      key: `Stage Two`,
      text: "Stage 2 – You’re Not in This Alone",
      info: `
      `,
      children: [
        {
          key: `Mental Health`,
          text: `Managing the Mental Load`,
          info: `
          + How to cope with “what if” thoughts.<br>
          + Support networks and simple tools.<br>
          + When and how to ask for help.<br>
          `
        },
        {
          key: `Emotional Support`,
          text: `Staying Emotionally Steady`,
          info: `
          + Intro to prostate basics, risks, symptoms,  <br>
          + Mental health check-ins.<br>
          + Talking to family, friends, or a counselor.<br>
          + Guided tools to reduce overwhelm.<br>
          `
        },        
        {
          key: `Signs & Warnings`,
          text: `Your Body, Your Needs`,
          info: `
          + Managing side effects through food & rest.<br>
          + Handling fatigue & disrupted sleep.<br>
          + Keeping active within your limits.<br>
          `
        },        
      ]
    },
    {
      key: `Stage Three`,
      text: "Stage 3 – It’s a Lot. We’ll Walk It With You",
      info: `
      `,
      children: [
        {
          key: `Mid-stage Care Plan `,
          text: `What to Expect Now`,
          info: `
          + Stage 3 treatment landscape.<br>
          + Coordinating care across teams.<br>
          + Understanding more complex symptoms.<br>
          `
        },
        {
          key: `Self-Care`,
          text: `Caring for a Tired Body`,
          info: `
          + Gentle nutrition and hydration tips.<br>
          + Fatigue, sleep disruption, and what helps.<br>
          + Movement when you can — or resting when you need.<br>
          `
        },        
        {
          key: `Mid-stage support`,
          text: `Finding Your Ground`,
          info: `
          + Naming difficult emotions.<br>
          + Support groups that feel real.<br>
          + Keeping some control in the chaos<br>
          `
        },        
      ]
    },           
    {
      key: `Stage Four`,
      text: "Stage 4 – Comfort. Dignity. You.",
      info: `
      `,
      children: [
        {
          key: `The Care Plan`,
          text: `The Care That Fits You`,
          info: `
          + Treatment vs. comfort decisions.<br>
          + What palliative support actually means.<br>
          + Being heard by your team<br>
          `
        },
        {
          key: `Relief & Rest`,
          text: `Support for the Day-to-Day`,
          info: `
          + Eating what feels right.<br>
          + Sleep, pain relief, and symptom tools.<br>
          + Movement, touch, or stillness — what works for you.<br>
          `
        },        
        {
          key: `Legacy & Life`,
          text: `Honouring Your Life`,
          info: `
          + Intro to prostate basics, risks, symptoms,  <br>
          + Processing what matters to you." <br>
          + Creative legacy & joy in small things. " <br>
          + Support for family & chosen whānau <br>
          `
        },        
      ]
    },
    {
      key: `Caregiving`,
      text: "Caregiver – You’re Helping. Don’t Forget You Matter Too.",
      info: `
      `,
      children: [
        {
          key: `The Basics`,
          text: `The Basics You Need`,
          info: `
          + Intro to prostate basics, risks, symptoms,  <br>
          + What’s happening in your loved one’s body.<br>
          + How to assist with treatment & symptoms.<br>
          + Clear answers to tough questions.<br>
          `
        },
        {
          key: `Self- Care`,
          text: `You’re Part of This — But You’re Still You`,
          info: `
          + Managing burnout, sleep loss, and food fatigue."<br>
          + Fitness or rest — what your body asks for."<br>
          + Emotional weight & how to put it down sometimes.<br>
          `
        },        
        {
          key: `Support Guide`,
          text: `Real Support for Real People`,
          info: `
          + Who to call, where to go<br>
          + Practical guides, appointment planners<br>
          + Honest voices from other caregivers<br>
          `
        },        
      ]
    },
    {
      key: `Research`,
      text: "Researcher – Explore. Understand. Advance.",
      info: `
      `,
      children: [
        {
          key: `Statistics`,
          text: `Structured Understanding`,
          info: `
          + Disease progression: staging, grading, biomarkers."<br>
          + Diagnostic pathways: PSA, biopsy, imaging."<br>
          + Cross-system comparisons (NZ, AUS, US, EU)."<br>
          + Population data & cohort breakdowns<br>
          `
        },
        {
          key: `Research Updates`,
          text: `Trials, Treatment & Innovation`,
          info: `
          + Ongoing trials & novel therapies (NZ/international)<br>
          + Treatment outcomes by demographic & stage.<br>
          + Health equity & access gaps.<br>
          + NZ-specific research themes (rural, Māori, Pacific populations)<br>
          `
        },        
        {
          key: `Community & Grants`,
          text: `Tools, Grants & Collaboration`,
          info: `
          + Active and upcoming grant opportunities (HRC, MBIE, etc.)<br>
          + Submission guidelines & funding timelines.<br>
          + Participant recruitment tools. Data-sharing agreements & ethics resources.<br>
          + Researcher contact networks & collaboration portals
<br>
          `
        },        
      ]
    },         
  ]
};


/*
    { 
      key: ``, text: ``,
      info: 
      ``
    },

    <strong>
    </strong>
*/