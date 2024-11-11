# EventsCalendar

```
  <EventsCalendar :items="calendar" @bookmarkToggle="onBookmarkToggle"/>

```
## data example
```
calendar: [
    {
        month: '08',
        items: [
            {
                dt: '2024-08-13',

                items: [
                    {
                        uuid: '1',
                        hasBookmark: false,
                        time: '12:00',
                        img: '/apple-touch-icon.png',
                        category: 'Конференция',
                        location: 'Москва',
                        title: 'Научная конференция «Антиминсы и литургичткани»',
                        org: 'Церковно-общественный совет при Патриархе Москои всея Руси по развитию русского церковного пения',
                    },
                    {
                        uuid: '2',
                        hasBookmark: true,
                        time: '16:00',
                        img: '/apple-touch-icon.png',
                        category: 'Открытая лекция',
                        location: 'Москва',
                        title: 'Открытая лекция «Византийская икона»',
                        subtitle: 'Читает Жуковский Марк Сергеевич',
                        org: 'ОЦАД',
                    },
                ]
            },
             {
                dt: '2024-08-15',

                items: [
                    {
                        uuid: '1',
                        hasBookmark: false,
                        time: '12:00',
                        img: '/apple-touch-icon.png',
                        category: 'Конференция',
                        location: 'Москва',
                        title: 'Научная конференция «Антиминсы и литургичткани»',
                         org: 'Церковно-общественный совет при Патриархе Москои всея Руси по развитию русского церковного пения',
                     },
                     {
                        uuid: '2',
                        hasBookmark: true,
                        time: '16:00',
                        img: '/apple-touch-icon.png',
                        category: 'Открытая лекция',
                        location: 'Москва',
                        title: 'Открытая лекция «Византийская икона»',
                        subtitle: 'Читает Жуковский Марк Сергеевич',
                        org: 'ОЦАД',
                    },
                ]
            },
        ]
    }
],

```