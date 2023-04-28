import { Component } from '@angular/core';

type OptionMenu = { label: string; leaf: boolean; linkId?: string };

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  optionsMenu: Array<OptionMenu & { childs?: OptionMenu[] }> = [
    {
      label: 'Home',
      leaf: true,
    },
    {
      label: 'Conheça-Nos',
      leaf: false,
      childs: [
        {
          label: 'Quem somos',
          leaf: true,
          linkId: 'about-us',
        },
        {
          label: 'Nossa Historia',
          leaf: true,
          linkId: 'page-history',
        },
        {
          label: 'Declaração de fé',
          leaf: true,
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
}
