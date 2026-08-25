import {
    logoSizes,
    heroSizes,
    cardImageSizes,
    avatarSizes,
    thumbnailSizes,
    iconSizes,
    backgroundSizes,
    gallerySizes,
  } from '../images/';
  
  export const imageGroups = {
    logo: logoSizes,
    hero: heroSizes,
    card: cardImageSizes,
    avatar: avatarSizes,
    thumbnail: thumbnailSizes,
    icon: iconSizes,
    background: backgroundSizes,
    gallery: gallerySizes,
  } as const;
  
  export function getImageSize<
    Group extends keyof typeof imageGroups,
    Variant extends keyof (typeof imageGroups)[Group]
  >(group: Group, variant: Variant) {
    return imageGroups[group][variant];
  }
  