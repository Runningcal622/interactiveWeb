

var words = ['Bonjour','Hola','Привет',
'Au Revoir','Adiós','До свидания'];

var spanish = ["Hola","Adiós"];
var french = ["Bonjour", "Au Revoir"];
var russian = ['Привет','До свидания'];
var curWord='';

function isRussian()
{
  var ele = document.getElementById("test");
  var int = russian.indexOf(curWord);
  if (int!=-1)
  {
    window.alert("Correct");
    int = words.indexOf(curWord);
    words.splice(int,1);
    randomWord();

  }
  else {
    window.alert("Wrong");
  }
}
function isFrench()
{
  var ele = document.getElementById("test");
  var int = french.indexOf(curWord);
  if (int!=-1)
  {
    int = words.indexOf(curWord);
    window.alert("Correct");
    words.splice(int,1);
    randomWord();
  }
  else {
    window.alert("Wrong");
  }
}
function isSpanish()
{
  var ele = document.getElementById("test");
  var int = spanish.indexOf(curWord);
  if (int!=-1)
  {
    window.alert("Correct");
    int = words.indexOf(curWord);
    words.splice(int,1);
    randomWord();
  }
  else {
    window.alert("Wrong");
  }

}

function randomWord()
{
  if (words.length>0)
  {
  var e = document.getElementById("test");
  var index = Math.trunc(Math.random() * words.length);
  curWord=words[index];
  var word = curWord;
  e.innerText = word;
}
else {
  var e = document.getElementById("test");
  e.innerText = "no more words to test";

}
}

function toEnglish(str)
{
  var eng = document.getElementById("greeting");
  eng.innerText = str;
}

function toEnglish2(str)
{
  var eng = document.getElementById("goodbye");
  eng.innerText = str;
}

function removePB()
{
  var init = 'translate';
  var change = 'translate';
  for (var i=1;i<9;i++)
  {
    change=init+i;
    var ele = document.getElementById(change);
    ele.parentNode.removeChild(ele);
  }

  var elementids = ['translatehead', 'greeting','goodbye'];
  for (var m=0; m<3;m++)
  {

  var ment = document.getElementById(elementids[m]);
  ment.parentNode.removeChild(ment);
  }

  var init = 'hid';
  var change = 'hid';
  for (var index=1;index<4;index++)
  {
    change=init+index;
    var hiddenButton = document.getElementById(change);
    hiddenButton.hidden=false;
  }
  var hiddenP = document.getElementById("test");
  hiddenP.hidden=false;

}
