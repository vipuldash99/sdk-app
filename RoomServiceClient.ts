import { RoomServiceClient, Room, ParticipantInfo ,ParticipantPermission } from 'livekit-server-sdk';
const livekitHost = 'http://localhost:7880';//livekit server host
const svc = new RoomServiceClient(livekitHost, 'devkey', 'secret');
var part: string;
let permission= JSON.parse('{"canPublish": "true"}')

// list rooms
svc.listRooms().then((rooms: Room[]) => {
  console.log('existing rooms', rooms);
});
let meta=``

//create a new room
const opts = {
  name: 'test-room',
  // timeout in seconds
  emptyTimeout: 10 * 60,
  maxParticipants: 20,
};
svc.createRoom(opts).then((room: Room) => {
  console.log('room created', room);
});


//ListAllParticipants
svc.listParticipants('test-room').then((participants: ParticipantInfo[] ) => {
  console.log('participants list',participants,);
  
});

//GetParticiapantMetadata
svc.getParticipant('test-room','user1').then((participant: ParticipantInfo) => {
  console.log('participant meta',participant);
  part+=participant
});

//Remove Participant
svc.removeParticipant('test-room','user1').then(() => {
  console.log('participant removed');
});

//delete a room
svc.deleteRoom('test-room').then(() => 
  console.log('room deleted')

);

//Update Particiapant
svc.updateParticipant('test-room','user1',meta,ParticipantPermission.fromJSON(permission)).then(() => {
    console.log('participant updated');

})
// svc.mutePublishedTrack('test-room','user1','PA_F4DcJ3qbc2yu',true).then(() => {
//   console.log('muted');
// });



