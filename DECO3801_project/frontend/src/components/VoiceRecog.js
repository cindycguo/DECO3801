import * as React from 'react';
import * as Annyang from 'annyang';

export default function VoiceRecog() {
    if (annyang) {
       // Let's define a command.
       var anything = function(anything) {
            alert(anything);
        };
        var commands = {
            '*anything': anything
        };
       // This should be true
       console.log(annyang.isListening())
       // Add our commands to annyang
       annyang.addCommands(commands);
       // Start listening.
       annyang.start();
       annyang.addCallback('soundstart', function() {
         console.log('sound detected');
       });
     }
}