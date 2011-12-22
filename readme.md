Alphabet Picker
=============

Version 0.1.0
-----------

### Introduction

__Alphabet Picker__ is a _jQuery_ plug-in which launches a simple alphabet picker, which when clicked sends the user to a particular page, passing the letter as a parameter.

### How to use it

1. Add the files (`jquery.alphabetpicker.js` and `alphabetpicker.css`) to your project, along with _jQuery_.
2. Create the element that will trigger the picker.
3. Add the following _jQuery_ to your page, to be executed on load:

    $('.azp-trigger').alphabetPicker({
        destination     : 'demo.html'
    });

...where `.azp-trigger` is a selector for the elements you would like to trigger the picker, and `demo.html` is whatever page you want the buttons to lead to.

A demo is available in demo.html.

### Additional settings

Additional settings can be used to customise the picker, and should be added as a parameter after the destinaion option:

+ `hash` toggles the sending of the letter as a hash rather than a parameter. __N.B.__ this will only append the letter to the URL, and will not change the page. The _hashchange_ plugin is recommended if you want to access the hashchange event (default `false`).
+ `parameter` allows you to change the name by which the letter is sent to the destination page (default `'letter'`).
+ `uppercase` allows you to make the letters uppercase when displayed. They will still be sent to the destination page as lowercase. (default `false`).

An example of these in practice:

    $('.azp-trigger').onScreenKeyboard({
        'destination'   : 'list.html',
        'parameter'     : 'alpha',
        'uppercase'     : true
    });

`jquery.alphabetpicker.js` contains the HTML for the picker at the top (although it is compressed). As long as class names remain the same, this can be changed however much you like. Keep in mind that the character passed to the destination page is taken directly from the contents of the `li` element for the pressed key.
    
`alphabetpicker.css` can also be edited to customise the picker's design. The first section, "Alphabet Picker Structure" should be mostly left alone. The second section contains definitions for colour and picker position.

### Where does it work?

Tested in:

+ Firefox 9

### Author and Acknowledgements

+ Written by [Chris Cook](http://chris-cook.co.uk)