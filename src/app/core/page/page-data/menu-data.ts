import { Menu } from '../page-models/menu.model';

export const MENUDATA: Menu[] = [
    {
        label: $localize`Projekt`,
        linkTo: '/project',
        subMenu: [
            { label: $localize`Übersicht`, linkTo: 'overview' },
            { label: $localize`Mitarbeitende`, linkTo: 'team' },
            { label: $localize`Editorial Board`, linkTo: 'board' },
            { label: $localize`Kooperationen`, linkTo: 'cooperations' },
            { label: $localize`News-Archiv`, linkTo: 'news-archive' },
        ],
    },
    {
        label: 'Anton Webern',
        linkTo: '/webern',
        subMenu: [
            { label: $localize`Übersicht`, linkTo: 'overview' },
            { label: $localize`Chronologie`, linkTo: 'chronology' },
            { label: $localize`Briefe`, linkTo: 'letters' },
            { label: $localize`Personen`, linkTo: 'persons' },
            { label: $localize`Bibliografie`, linkTo: 'bibliography' },
        ],
    },
    {
        label: $localize`Werke`,
        linkTo: '/works',
        subMenu: [
            { label: $localize`Übersicht`, linkTo: 'overview' },
            { label: $localize`Opuszahl`, linkTo: 'opus' },
            { label: $localize`Moldenhauer-Nr.`, linkTo: 'moldenhauer' },
        ],
    },
    {
        label: $localize`Edition`,
        linkTo: '/edition',
        subMenu: [
            { label: $localize`Übersicht`, linkTo: 'overview' },
            { label: $localize`Gliederung`, linkTo: 'outline' },
            { label: $localize`Print-Edition`, linkTo: 'print' },
            { label: $localize`Online-Edition`, linkTo: 'online' },
        ],
    },
    {
        label: $localize`Forschung`,
        linkTo: '/research',
        subMenu: [
            { label: $localize`Übersicht`, linkTo: 'overview' },
            { label: $localize`Webern-Studien`, linkTo: 'studies' },
            { label: $localize`Anton Webern Vorträge`, linkTo: 'lectures' },
            { label: $localize`Tagungen`, linkTo: 'conferences' },
            { label: $localize`Publikationen`, linkTo: 'publications' },
            { label: $localize`Weitere Aktivitäten`, linkTo: 'activities' },
            { label: $localize`Archive`, linkTo: 'archives' },
        ],
    },
];
