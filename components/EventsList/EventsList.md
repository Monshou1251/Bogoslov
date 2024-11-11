# EventsList

```
<EventsList :data="events" @toggleBookmark="onBookmarkToggle"/>
```

## data example

```
{
    dt: '2024-09-13',
    items: [
        {
             uuid: '1',
             hasBookmark: false,
             time: '12:00',
             img: '/mstile-150x150.png',
             category: 'Конференция',
             location: 'Москва',
             title: 'Научная конференция «Антии литургические ткани»',
             subtitle: 'Читает Жуковский Марк Сергеевич',
             org: 'Церковно-общественный совет при ПатрМосковском и всея Руси по развитию русцерковного пения',
        },
     ]
}
```
