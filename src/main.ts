/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

// Waiting for the API to be ready
WA.onInit().then(() => {

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

    // Init open door interaction
    doorInteract();

}).catch(e => console.error(e));


export {};

const doorInteract = () => {

    // Close door layer for techshow
    WA.room.showLayer('techshow/closedoor');
    WA.room.showLayer('techshow-override/closedoor');
    WA.room.hideLayer('techshow/opendoor');
    WA.room.hideLayer('techshow-override/opendoor');

    // Close door layer for coworking
    WA.room.showLayer('coworking/closedoor');
    WA.room.showLayer('coworking-override/closedoor');
    WA.room.hideLayer('coworking/opendoor');
    WA.room.hideLayer('coworking-override/opendoor');

    // Close door layer for auditorium
    WA.room.showLayer('auditorium/closedoor');
    WA.room.showLayer('auditorium-override/closedoor');
    WA.room.hideLayer('auditorium/opendoor');
    WA.room.hideLayer('auditorium/opendoor2');
    WA.room.hideLayer('auditorium-override/opendoor');
    WA.room.hideLayer('auditorium-override/opendoor2');

    // Close door layer for 3 meetingrooms
    WA.room.showLayer('meetingroom/1/closedoor');
    WA.room.showLayer('meetingroom-override/1/closedoor');
    WA.room.hideLayer('meetingroom/1/opendoor');
    WA.room.hideLayer('meetingroom-override/1/opendoor');
    WA.room.showLayer('meetingroom/2/closedoor');
    WA.room.showLayer('meetingroom-override/2/closedoor');
    WA.room.hideLayer('meetingroom/2/opendoor');
    WA.room.hideLayer('meetingroom-override/2/opendoor');
    WA.room.showLayer('meetingroom/3/closedoor');
    WA.room.showLayer('meetingroom-override/3/closedoor');
    WA.room.hideLayer('meetingroom/3/opendoor');
    WA.room.hideLayer('meetingroom-override/3/opendoor');


    WA.room.area.onEnter('techshow-door').subscribe(() => {
        WA.room.showLayer('techshow/opendoor');
        WA.room.showLayer('techshow-override/opendoor');

        WA.room.hideLayer('techshow/closedoor');
        WA.room.hideLayer('techshow-override/closedoor');
    });

    WA.room.area.onLeave('techshow-door').subscribe(() => {
        WA.room.showLayer('techshow/closedoor');
        WA.room.showLayer('techshow-override/closedoor');

        WA.room.hideLayer('techshow/opendoor');
        WA.room.hideLayer('techshow-override/opendoor');
    });

    WA.room.area.onEnter('coworking-door').subscribe(() => {
        WA.room.showLayer('coworking/opendoor');
        WA.room.showLayer('coworking-override/opendoor');

        WA.room.hideLayer('coworking/closedoor');
        WA.room.hideLayer('coworking-override/closedoor');
    });

    WA.room.area.onLeave('coworking-door').subscribe(() => {
        WA.room.showLayer('coworking/closedoor');
        WA.room.showLayer('coworking-override/closedoor');

        WA.room.hideLayer('coworking/opendoor');
        WA.room.hideLayer('coworking-override/opendoor');
    });

    WA.room.area.onEnter('auditorium-door').subscribe(() => {
        WA.room.showLayer('auditorium/opendoor');
        WA.room.showLayer('auditorium-override/opendoor');
        WA.room.showLayer('auditorium/opendoor2');
        WA.room.showLayer('auditorium-override/opendoor2');

        WA.room.hideLayer('auditorium/closedoor');
        WA.room.hideLayer('auditorium-override/closedoor');
    });

    WA.room.area.onLeave('auditorium-door').subscribe(() => {
        WA.room.showLayer('auditorium/closedoor');
        WA.room.showLayer('auditorium-override/closedoor');

        WA.room.hideLayer('auditorium/opendoor');
        WA.room.hideLayer('auditorium/opendoor2');
        WA.room.hideLayer('auditorium-override/opendoor');
        WA.room.hideLayer('auditorium-override/opendoor2');
    });

    WA.room.area.onEnter('meetingroom-1-door').subscribe(() => {
        WA.room.showLayer('meetingroom/1/opendoor');
        WA.room.showLayer('meetingroom-override/1/opendoor');

        WA.room.hideLayer('meetingroom/1/closedoor');
        WA.room.hideLayer('meetingroom-override/1/closedoor');
    });

    WA.room.area.onLeave('meetingroom-1-door').subscribe(() => {
        WA.room.showLayer('meetingroom/1/closedoor');
        WA.room.showLayer('meetingroom-override/1/closedoor');

        WA.room.hideLayer('meetingroom/1/opendoor');
        WA.room.hideLayer('meetingroom-override/1/opendoor');
    });

    WA.room.area.onEnter('meetingroom-2-door').subscribe(() => {
        WA.room.showLayer('meetingroom/2/opendoor');
        WA.room.showLayer('meetingroom-override/2/opendoor');

        WA.room.hideLayer('meetingroom/2/closedoor');
        WA.room.hideLayer('meetingroom-override/2/closedoor');
    });

    WA.room.area.onLeave('meetingroom-2-door').subscribe(() => {
        WA.room.showLayer('meetingroom/2/closedoor');
        WA.room.showLayer('meetingroom-override/2/closedoor');

        WA.room.hideLayer('meetingroom/2/opendoor');
        WA.room.hideLayer('meetingroom-override/2/opendoor');
    });

    WA.room.area.onEnter('meetingroom-3-door').subscribe(() => {
        WA.room.showLayer('meetingroom/3/opendoor');
        WA.room.showLayer('meetingroom-override/3/opendoor');

        WA.room.hideLayer('meetingroom/3/closedoor');
        WA.room.hideLayer('meetingroom-override/3/closedoor');
    });

    WA.room.area.onLeave('meetingroom-3-door').subscribe(() => {
        WA.room.showLayer('meetingroom/3/closedoor');
        WA.room.showLayer('meetingroom-override/3/closedoor');

        WA.room.hideLayer('meetingroom/3/opendoor');
        WA.room.hideLayer('meetingroom-override/3/opendoor');
    });
}
