import * as React from 'react';
import * as Annyang from 'annyang';

export default function VoiceRecog() {
    if (annyang) {
        var hello = function(hello) {
            alert('Hi! I can hear you.');
        };

        var createNote = function(createNote) {
            alert('Sampling or Media Production?');
        };

        var sampling = function(createNote) {
            alert('sampling note');
        };

        var mediaProduction = function(createNote) {
            alert('media production note');
        };

        var anything = function(anything) {
            alert(anything);
        };

        var commands = {
            'hello': hello,
            'create note': createNote,
            'sampling': sampling,
            'media production': mediaProduction,
            'write note *anything': anything
        };
        // This should be true
        console.log(annyang.isListening())
        // Add our commands to annyang
        annyang.addCommands(commands);
        // Start listening.
        annyang.start();
    }
}