const {EventEmitter}=require('events');
const A=new EventEmitter();
A.on('greet', (name)=>{
    console.log(`Welcome to AIML_A : ${name}`);
});
A.on('exit', ()=>{
    console.log('ThankYou for visiting AIML_A.');
});
A.emit('greet', 'Rajkumar Rana');
A.emit('exit');
class Attendance extends EventEmitter{
    mark(){
        console.log('Attendance has been marked');
        this.emit('mark', 'Rajkumar Rana');
    }
}
const attendance=new Attendance();
attendance.on('mark', (name)=>{
    console.log(`All Attendance marked : ${name}`);
});
console.log('Start of the Attendance');
attendance.mark();
console.log("Attendence Started");
setTimeout(()=>{
    console.log('End of the Attendance');
}, 2000);
setImmediate(()=>{
    console.log('Attendance has been marked');
});
process.nextTick(()=>{
    console.log('Attendance not marked');
});
console.log('Attendance not Completed');