* URGENTE: TRANSLATIONS / i18n support

* `Mark` class constructor overloading by including centuries in string format. E.g., 

```
new Mark(-500)    // 500 BC
new Mark(500)     // 500 AD
new Mark('15th century')
```

should any of these other variations also be accepted?
```
new Mark('18th c.')
new Mark('8th century')
new Mark('C12th')
```
