# _Pig Latin translator_

#### _Translates english words or phrases to Pig Latin, Jan.23.2020_

#### By _**Dusty McCord Josh Hellman**_

## Description

_This app will take in words from a user and return the words in Pig Latin_

## Setup/Installation Requirements

* _find the green 'Clone or Download' button and copy the link_
* _open terminal and type cd /Desktop on a mac/linux on a windows type cd Desktop_
* _in terminal type 'git clone {link to repository} ' note : remove {} from your command_
* _navigate to the new folder that was created on your desk_
* _select index.html_
* _right click and select open with_
* _select your browser_
* _enjoy a Pig Latin translate with your whole family_

## Specs

Behavior | Input |  Output
-----------|-------|----
The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels. | 1 | 1
The program adds "ay" to single-letter words beginning with a vowel. | i | iay
The program checks if a single letter word is a vowel. | i | iay
The program will add "way" to the end of a multiletter word that begins with a vowel. | about | aboutWay
The program takes words beginning with one or more consonants and moves all of the first consecutive consonants to the end, and add "ay". | john | ohnJay
The program will take the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first! | squeal | ealSquay
For words beginning with "y", treat "y" as a consonant. | Yolo | oloYay

## Known Bugs

_NA_

## Support and contact details

_Use at your own risk_

## Technologies Used

_HTML, CSS, Jquery, Javascript, Bootstrap_

### License

*MIT*

Copyright (c) 2020**_Josh Hellman and Dusty McCord and the whole Epicodus class_**
