(function(){
  var newscript = document.createElement('script');
     newscript.type = 'text/javascript';
     newscript.async = true;
     newscript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js';
  (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(newscript);
})();
var divs = document.querySelectorAll('#mw-content-text > div');
console.log('Number of people: ', divs.length);
var people = [];
for (var i = 0; i < divs.length; i++) {
    var person = {};
    var personElement = $(divs[i]);
    person.image = 'https://wiki.asteasolutions.net' + personElement.find('img').attr('src');
    person.name = personElement.find('div:nth-child(2) > div:nth-child(1)')[0].innerHTML;
    person.email =  personElement.find('div:nth-child(2) > table > tbody > tr:nth-child(3) > td:nth-child(2)')[0].innerHTML;
    person.phone = personElement.find('div:nth-child(2) > table > tbody > tr:nth-child(5) > td:nth-child(2)')[0].innerHTML;
    person.title = personElement.find('div:nth-child(2) > table > tbody > tr:nth-child(1) h5')[0].innerHTML;
    people.push(person);
};

JSON.stringify(people, null, 4);
