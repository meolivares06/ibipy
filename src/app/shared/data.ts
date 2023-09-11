export type OptionMenu = {
  label: string;
  leaf: boolean;
  linkId?: string;
  route?: string;
  fragmentParent?: string;
};
export const MENU_OPTIONS: Array<OptionMenu & { childs?: OptionMenu[] }> = [
  {
    label: 'Home',
    leaf: true,
    route: 'landing'
  },
  {
    label: 'Conheça-Nos',
    leaf: false,
    childs: [
      {
        label: 'Quem somos',
        leaf: true,
        fragmentParent: 'landing',
        linkId: 'about-us',
      },
      /* {
        label: 'Nossa Historia',
        leaf: true,
        fragmentParent: 'landing',
        linkId: 'page-history',
      }, */
      {
        label: 'Declaração de fé',
        leaf: true,
        fragmentParent: 'landing',
        linkId: 'page-fe',
      },
    ],
  },
  // {
  //   label: 'Contato',
  //   leaf: true,
  // },
  // {
  //   label: 'Oferta',
  //   leaf: true,
  // },
  // {
  //   label: 'Ao vivo',
  //   leaf: true,
  // },
];

export interface Song {
  title: string;
  author: string;
  youtubeLink: string;
  letter: string;
  created?: string;
  id?: string;
}
