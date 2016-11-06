A small experiment to generate the badges for speakers at Codemotion. To generate the list of badges, run the following:

```
python -m SimpleHTTPServer 8000
```

Tne open http://localhost:8000 with either Firefox or Explorer. Printing with background images seems to be extremely brittle cross-browser; with Chrome it will not work at all, Firefox may pixelate the image, Explorer with PDF995 works just fine.

Remember to set the page size according to your print CSS (A5 portrait would be the usual). 