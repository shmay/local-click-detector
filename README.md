An element for listening for local/outside clicks on a parent element.

place the element *immediately* below the element you'd like to detect local clicks with:

```
<my-element>
  <local-click-detector></local-click-detector>
<my-element>
```

upon clicking, my-element will have a 'clickedLocally' variable assigned to it ... which will be true if the click was within the my-element and false if outside of it

i'll probably transform this into a mixin eventually

Demo: [http://shmay.github.io/local-click-detector/](http://shmay.github.io/local-click-detector/)

To run locally:

* clone the repo in an empty directory (see next bullet for reasons) & cd into it
* run `bower install` (will install all packages in the parent directory!)
* ` cd ..` then `python -m SimpleHTTPServer` and navigate to http://localhost:8000/local-click-detector/demo.html

[1]: https://www.polymer-project.org/
