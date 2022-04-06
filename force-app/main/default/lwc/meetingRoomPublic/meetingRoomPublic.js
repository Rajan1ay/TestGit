import { LightningElement, api } from 'lwc';

export default class MeetingRoomPublic extends LightningElement {

    @api meetingRoomInfo;// {roomName:'A-01', roomCapacity:'12'}
    //we cant change public value in child componenet which we are passing from parent componenet
    // we can only initalise at the time of call the chcomponenet 
    // in this example meetingRoomParent is parent componenet which passing the public property
    // value to the meetingRoomPublic component.
    // any changes in parent componenet(meetingRoomParent) public value effect in child.
    // lets take example of public boolean

    @api showRoomInfo = false;
    
    tileClickedHandler(){
        //Created our custom event
        const tileClicked = new CustomEvent('tileclick', {detail:this.meetingRoomInfo});
        // now Fire the event through this.dipatchEvent
        this.dispatchEvent(tileClicked);
    }
    
}