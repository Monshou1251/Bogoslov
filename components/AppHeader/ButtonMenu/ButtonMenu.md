# ButtonMenu

```
<ButtonMenu :icon="iconParams"
            :url="icon.url"
            target="_blank"
            size="sm"
            @click="onChangeLang"
>
  Войти
</ButtonMenu>
```

## data example

```
{
  iconParams: {
    name: 'subjects',
    position: 'append'  // Default: 'prepend'
  },

  size: 'sm',           //'sm', 'md'. Default: 'md'
}
```
