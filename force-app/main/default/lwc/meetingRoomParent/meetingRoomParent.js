import { LightningElement, track } from 'lwc';

export default class MeetingRoomParent extends LightningElement {

    @track selectedMeetingRoom;
    meetinRoomInformation = [
        {roomName:'A-01', roomCapacity:'12'},
        {roomName:'A-02', roomCapacity:'16'},
        {roomName:'A-03', roomCapacity:'12'},
        {roomName:'B-01', roomCapacity:'5'},
        {roomName:'B-02', roomCapacity:'8'},
        {roomName:'B-03', roomCapacity:'10'},
        {roomName:'C-01', roomCapacity:'20'},
        {roomName:'C-02', roomCapacity:'21'}
    ];

    onTileSelectedHandler(event){
        const meetingRoomInfo = event.detail;
        this.selectedMeetingRoom = meetingRoomInfo.roomName;
    }
    constructor(){

        super();
        this.template.addEventListener('tileclick',this.onTileSelectedHandler.bind(this));
    }
}