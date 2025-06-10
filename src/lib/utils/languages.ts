export interface Language {
  code: string;
  name: string;
  flag: string;
}

export const languages: Language[] = [
  {
    code: 'en',
    name: 'English',
    flag: '🇬🇧'
  },
  {
    code: 'es',
    name: 'Español',
    flag: '🇪🇸'
  },
  {
    code: 'fr',
    name: 'Français',
    flag: '🇫🇷'
  },
  {
    code: 'de',
    name: 'Deutsch',
    flag: '🇩🇪'
  }
];

export const getLanguageName = (code: string): string => {
  const language = languages.find(lang => lang.code === code);
  return language ? language.name : code;
};

export const getLanguageFlag = (code: string): string => {
  const language = languages.find(lang => lang.code === code);
  return language ? language.flag : '';
};
