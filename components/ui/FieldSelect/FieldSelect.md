# FieldSelect

```
 <FieldSelect :params="selectParams"
                :value="selectValue"
                @blur="onBlur"
                @change="onChange"
/>

```

## data example

```
selectParams: {
      staticTitle: 'Меню',            // Text near arrow. Default: current value label
      theme: 'white',                 // default: 'dark'
      menuPos: 'left',                // 'left' || 'right'
      items: [
            {
                label: 'Новости',
                id: 'news',
            },
            {
                label: 'Материалы',
                id: 'materials',
            },
            {
                label: 'Книги',
                id: 'books',
            },
            {
                label: 'Научные инструменты',
                id: 'science',
            },
            {
                label: 'О нас',
                id: 'about',
            },
        ]
},

selectValue: {
    id: 'about',
    label: 'О нас'
}

```
