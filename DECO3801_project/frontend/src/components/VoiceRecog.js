import * as React from 'react';
import * as Annyang from 'annyang';

export default function VoiceRecog() {
    if (annyang) {
        // Send notification
        var hello = function(hello) {
            alert('Question!');
        };

        // Create note
        var createNote = function(createNote) {
            alert('Sampling or Media Production?');
        };

        var sampling = function(createNote) {
            alert('sampling note');
        };

        var mediaProduction = function(createNote) {
            alert('media production note');
        };

        // Send Question
        var askQuestion = function(anything) {
            alert(anything);
        }

        // Mute
        var mute = function(mute) {
            alert(mute);
        }

        // Hide
        var hide = function(hide) {
            alert(hide);
        }

        // Mute and hide
        var muteHide = function(muteHide) {
            alert(muteHide);
        }

        var anything = function(anything) {
            alert(anything);
        };

        var commands = {
            'hello': hello,
            'hey': hello,
            'hi': hello,
            'excuse me': hello,
            'sorry': hello,
            'create note': createNote,
            'sampling': sampling,
            'media production': mediaProduction,
            'mute': mute,
            'hide': hide,
            'stop sharing': muteHide,
            'mute and hide': muteHide,
            'hide and mute': muteHide,
            'write note *anything': anything,
            'ask question *anything': anything
        };
        // This should be true
        console.log(annyang.isListening())
        // Add our commands to annyang
        annyang.addCommands(commands);
        // Start listening.
        annyang.start();
    }
}