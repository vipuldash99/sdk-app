import { RoomServiceClient, Room, ParticipantInfo } from 'livekit-server-sdk';
const livekitHost = 'http://localhost:7880';//livekit server host
const svc = new RoomServiceClient(livekitHost, 'devkey', 'secret');
var participant_meta
// list rooms
svc.listRooms().then((rooms: Room[]) => {
  console.log('existing rooms', rooms);
});

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
  console.log('participants list',participants);
});

//GetParticiapantMetadata
svc.getParticipant('test-room','user1').then((participant: ParticipantInfo) => {
  console.log('participant meta',participant);
  participant_meta=participant
});

//Remove Participant
svc.removeParticipant('test-room','user1').then(() => {
  console.log('participant removed');
});

//delete a room
svc.deleteRoom('test-room').then(() => {
  console.log('room deleted');

});

// svc.updateParticipant('test-room','user1')

// svc.mutePublishedTrack('test-room','user1','PA_NdD3Fb9bM5jq',true).then(() => {
//   console.log('participant muted');
// });



