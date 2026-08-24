import resources from '../data/resources.json';

type ResourceCard = {
  heading: string;
  content: string[];
  cardStatus: string;
};

type ResourceCategory = {
  parentLink: string;
  title: string;
  data: ResourceCard[];
};

const contentByCategory = Object.fromEntries(
  Object.entries(resources.contentByCategory).map(([key, category]) => [
    key,
    {
      parentLink: category.parentLink,
      title: category.title,
      data: category.data.map((item) => ({
        heading: item.heading,
        content: item.content,
        cardStatus: item.cardStatus,
      })),
    } satisfies ResourceCategory,
  ])
) as Record<string, ResourceCategory>;

export const resourceContent = {
  sectionTitle: resources.contentByCategory['stage-0'].title,
  sectionSubtitle: resources.sectionSubtitle,
  ctaButton: resources.ctaButton,
  contentByCategory,
};
