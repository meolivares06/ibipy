import { Component } from '@angular/core';

type OptionMenu = { label: string; leaf: boolean };

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
        },
        {
          label: 'Nossa Historia',
          leaf: true,
        },
        {
          label: 'Declaração de fé',
          leaf: true,
        },
      ],
    },
    {
      label: 'Contato',
      leaf: true,
    },
    {
      label: 'Oferta',
      leaf: true,
    },
    {
      label: 'Ao vivo',
      leaf: true,
    },
  ];
}
