let current_question = document.querySelector('.current-question');
let track_img = document.querySelector('.track-img');
let question_txt = document.querySelector('.question-txt');
let Prev_Button = document.querySelector('.prev-button');
let Next_Button = document.querySelector('.next-button');
let Repeat_btn = document.querySelector('.repeat-button');
let curr_audio = document.createElement('audio');
let btn_0=document.getElementById('button0');
let btn_1=document.getElementById('button1');
let btn_2=document.getElementById('button2');
let btn_3=document.getElementById('button3');


 let curr_index = 0;
   
let btn;
let selected_ans = 0;

const test_questions = [
{
    
name : 'Question #1',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_1.mp3', 
quest_txt :  'A leaky exhaust system should be repaired because it:',

possible_ans : [

'A. Wastes gas and oil',

'B. Causes the engine to run hot',

'C. Can allow dangerous carbon monoxide to enter the car'
],
     

correct_ans : 2,
    
}, 

{
    
name : 'Question #2',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_2.mp3', 
quest_txt : 'You near an intersection with a stop sign and crosswalk lines but no stop line. Where must you stop?',

possible_ans : [

'A. At the second parallel crosswalk line',

'B. On the other side of the crosswalk lines',

'C. Before entering the crosswalk'
],
     

correct_ans : 2,
    
}, 

{
    
name : 'Question #3',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_3.mp3', 
quest_txt : ' What should you do at the first sign of rain or snow?',

possible_ans : [

'A. Reduce your speed',

'B. Drive closely to the left side of your lane',

'C. Turn off your headlights',

'D. All of the above',
],
     

correct_ans : 0,
    
}, 

{
    
name : 'Question #4',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_4.mp3', 
quest_txt : "When you hear the sound of a bell and see flashing red lights at a railroad crossing, you should:",

possible_ans : [

'A. Proceed, unless a gate has been lowered',

'B. Stop before the tracks',

'C. Slow down and cross the tracks carefully'
],
     

correct_ans : 1,
    
}, 

{
    
name : 'Question #5',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_5.mp3', 
quest_txt : 'When is passing another vehicle on the right allowed?',

possible_ans : [

'A. When the vehicle you are passing is about to stop',

'B. When two or more lanes of traffic is moving in the same direction',

'C. When there is a paved shoulder'

],
     

correct_ans : 1,
    
}, 

{
    
name : 'Question #6',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_6.mp3', 
quest_txt : "When driving in foggy conditions, high beams will:",

possible_ans : [

'A. Create glare that makes it more difficult to see',

'B. Improve your visibility',

'C. Improve your ability to see ahead',

'D. All of the above'

],
     

correct_ans : 0,
    
}, 

{
    
name : 'Question #7',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_7.mp3', 
quest_txt : "You approach a school bus on your side of a divided highway. Yellow lights are flashing. In this situation, you must:",

possible_ans : [

'A. Stop and not pass until the lights are no longer flashing',

'B. Proceed as quickly as possible',

'C. Slow down and watch out for children'

],
     

correct_ans : 2,
    
}, 


{
    
name : 'Question #8',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_8.mp3', 
quest_txt : "A driver is turning at an intersection without a traffic light, and a pedestrian is crossing. Who must yield?:",

possible_ans : [

'A. The driver',

'B. Whoever entered the intersection last',

'C. Whoever is slower'

],
     
correct_ans : 0,
    
}, 


{
    
name : 'Question #9',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_9.mp3', 
quest_txt : "What is an easy way of checking tread depth on your tires?",

possible_ans : [

'A. Looking for a number listed on your door jam',

'B. Using a tire pressure gauge',

"C. Using Lincoln's head on a penny"

],
     
correct_ans : 2,
    
}, 

{
    
name : 'Question #10',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_10.mp3', 
quest_txt : "When a traffic signal is showing a flashing yellow light, you must:",

possible_ans : [
 
'A. Proceed as normal, crossing traffic must always stop',

'B. Slow down and be especially alert',

'C. Stop and proceed when you can do so safely'

],
     
correct_ans : 1,
    
}, 

{
    
name : 'Question #11',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_11.mp3', 
quest_txt : "A shared center lane for turning can be used:",

possible_ans : [
 
'A. For passing slower vehicles',

'B. By traffic from both directions',

'C. For both left and right turns'

],
     
correct_ans : 1,
    
}, 

{
    
name : 'Question #12',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_12.mp3', 
quest_txt : " In addition to any local fines, you will be assessed a $200 state fee when:",

possible_ans : [
 
'A. Driving 85 mph and over anywhere in Georgia',

'B. Accumulating four or more driver points in any 12-month period',

'C. Using any wireless device while driving'

],
     
correct_ans : 0,
    
}, 

{
    
name : 'Question #13',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_13.mp3', 
quest_txt : "If it feels like your tires have lost traction with the surface of the road you should:",

possible_ans : [
 
'A. Ease your foot off the gas pedal',

'B. Keep speed and go straight',

'C. Brake and turn off the road'
],
     
correct_ans : 0,
    
}, 

{
    
name : 'Question #14',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_14.mp3', 
quest_txt : "To obtain a Class D license at the age of 16, you must have completed 40 hours of supervised road driving of which at least six hours must be:",

possible_ans : [
 
'A. Winter driving',

'B. Highway driving',

'C. Nighttime driving'
],
     
correct_ans : 2,
    
}, 

{
name : 'Question #15',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_15.mp3', 
quest_txt : "Defensive drivers should always:",

possible_ans : [
 
'A. Follow other vehicles closely',

'B. Keep the radio turned off',

'C. Know what is happening around their vehicle'

],
     
correct_ans : 2,
    
}, 

{
name : 'Question #16',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_16.mp3', 
quest_txt : "What is true about tractor-trailers and large trucks?",


possible_ans : [
 
'A. They have longer stopping distances than most cars',

'B. They need less room to maneuver',

'C. They have smaller blind spots than most cars',

],
     
correct_ans : 0,
    
}, 

{
name : 'Question #17',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_17.mp3', 
quest_txt : "Always signal to other drivers when you:",


possible_ans : [
 
'A. Plan to turn left or right',

'B. Need to make a sudden stop.',

'C. Pull away from the curb',

'D. All of the above'
],
     
correct_ans : 3,
    
}, 

{
name : 'Question #18',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_18.mp3', 
quest_txt : " Parking your car, other than momentarily, in front of a driveway is:",


possible_ans : [
 
'A. Never allowed',

'B. Allowed, if the driveway is private',

'C. Allowed, if the driveway is not frequently used'

],
     
correct_ans : 0,
    
}, 

{
name : 'Question #19',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_19.mp3', 
quest_txt : "You should never make a U-turn:",


possible_ans : [
 
'A. On a two-way road',

'B. In front of a police station',

'C. Before a curve where you cannot be seen for a great distance'

],
     
correct_ans : 2,
 
},   


{
name : 'Question #20',
img : 'Road_signs/atl_image.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_20.mp3', 
quest_txt : "When taking a prescription drug, who is responsible for deciding if you can drive or not?",


possible_ans : [
 
'A. You',

'B. Your physician',

'C. Your pharmacist'
],
     
correct_ans : 0,
 
},   

{
name : 'Question #21',
img : 'Road_Skills_images/image21.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_21.mp3', 
quest_txt : "When approaching a stopped school bus with flashing red lights traveling on your side of an undivided highway with four or more lanes, you must:",


possible_ans : [
 
'A. Slow down and proceed with caution',

'B. Stop',

'C. Pass as quickly as possible'

],
     
correct_ans : 1,
 
},   

{
name : 'Question #22',
img : 'Road_Skills_images/image22.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_22.mp3', 
quest_txt : "When driving down a steep hill, it against the law to:",


possible_ans : [
 
'A. Use the left lane',

'B. Use a low gear',

'C. Coast in neutral'
],
     
correct_ans : 2,
 
},  


{
name : 'Question #23',
img : 'Road_Skills_images/image23.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_23.mp3', 
quest_txt : "Shifting to a lower gear when going down a steep hill:",


possible_ans : [
 
'A. Helps control speed and protect your brakes from damage',

'B. Can cause your brakes to overheat',

'C. Often cause you to lose control of your vehicle'

],
     
correct_ans : 0,
 
}, 

{
name : 'Question #24',
img : 'Road_Skills_images/image24.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_24.mp3', 
quest_txt : "At an intersection where there are no signs or signals, a driver should always yield the right-of-way to:",

possible_ans : [
 
'A. The vehicle approaching from the left',

'B. The vehicle that is bigger',

'C. The vehicle that reaches the intersection first'

],
     
correct_ans : 2,
 
}, 

{
name : 'Question #25',
img : 'Road_Skills_images/image25.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_25.mp3', 
quest_txt : "Georgia's basic speed rule means that you:",

possible_ans : [
 
'A. May never drive at a speed that endangers you or anyone else',

'B. Must always drive at a speed less than the posted speed limit',

'C. Can drive 5 mph faster than posted speed limit, if conditions allow'

],
     
correct_ans : 0,
 
}, 

{
name : 'Question #26',
img : 'Road_Skills_images/image26.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_26.mp3', 
quest_txt : "You should never attempt to overtake a bicyclist:",

possible_ans : [
 
'A. Just before making a right turn',

'B. On a one-way street',

'C. On a divided highway'
],
     
correct_ans : 0,
 
}, 

{
name : 'Question #27',
img : 'Road_Skills_images/image27.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_27.mp3', 
quest_txt : "When driving on a slippery surface such as snow or ice, you should:",

possible_ans : [
 
'A. Use your parking lights so you do not blind other drivers',

'B. Allow less space than usual between you and the car in front of you',

'C. Use low gears to keep traction, especially on hills'

],
     
correct_ans : 2,
 
}, 

{
name : 'Question #28',
img : 'Road_Skills_images/image28.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_28.mp3', 
quest_txt : "If red lights are flashing at a railroad crossing you must:",

possible_ans : [
 
'A. Always stop and remain stopped until the lights stop flashing',

"B. Reduce speed, look both ways, and drive carefully across tracks",

'C. Proceed through the crossing as quickly as possible.'

],
     
correct_ans : 0,
 
}, 

{
name : 'Question #29',
img : 'Road_Skills_images/image29.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_29.mp3', 
quest_txt : "If you are found unfit to drive due to drug addiction, it will result in:",

possible_ans : [
 
'A. Denial of a driving privilege',

'B. Revocation of your driving privilege',

'C. Suspension of your driving privilege'

],
     
correct_ans : 1,
 
},


{
name : 'Question #30',
img : 'Road_Skills_images/image30.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_30.mp3', 
quest_txt : "If you are driving behind a motorcycle and want to pass, you must:",

possible_ans : [

'A. Stay in the same lane with the motorcycle',

'B. Move into the left lane before and during the pass',

'C. Blow your horn and encourage the motorcyclist to use the shoulder'

],
     
correct_ans : 1,
 
},

{
name : 'Question #31',
img : 'Road_Skills_images/image31.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_31.mp3', 
quest_txt : "When changing lanes, it is important to:",

possible_ans : [

'A. Slow down',

'B. Look over your shoulder to make sure the lane is clear',

'C. Check the inside rearview mirror'

],
     
correct_ans : 1,
 
},

{
name : 'Question #32',
img : 'Road_Skills_images/image32.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_32.mp3', 
quest_txt : "Where is it illegal to park and leave a vehicle other than momentarily?",

possible_ans : [

'A. In front of a private driveway',

'B. On a hill',

'C. 20 feet from a fire hydrant'

],
     
correct_ans : 0,
 
},

{
name : 'Question #33',
img : 'Road_Skills_images/image33.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_33.mp3', 
quest_txt : "To back up on an expressway or a limited-access highway:",

possible_ans : [

'A. Is always illegal',

'B. Is permitted, if you do not interfere with other traffic',

'C. Is permitted, if there is a paved shoulder'

],
     
correct_ans : 0,
 
},

{
name : 'Question #34',
img : 'Road_Skills_images/image34.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_34.mp3', 
quest_txt : " By law, you must use your headlights when you cannot see clearly for at least:",

possible_ans : [

'A. 1,000 feet',

'B. 800 feet',

'C. 500 feet'
],
     
correct_ans : 2,
 
},

{
name : 'Question #35',
img : 'Road_Skills_images/image35.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_35.mp3', 
quest_txt : "It can be dangerous to leave a motor running in a garage because of:",

possible_ans : [

'A. Carbon monoxide gases',

'B. Battery exhaustion',

'C. Brake failure'
],
     
correct_ans : 0,
 
},

{
name : 'Question #36',
img : 'Road_Skills_images/image36.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_36.mp3', 
quest_txt : "When approaching a stopped emergency vehicle with activated lights on a multi-lane roadway, you must:",

possible_ans : [

'A. Move over to next lane, if safely possible',

'B. Avoid looking in the direction of the emergency vehicle',

'C. Stay in your lane and keep your speed'
],
     
correct_ans : 0,
 
},

{
name : 'Question #37',
img : 'Road_Skills_images/image37.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_37.mp3', 
quest_txt : "Which is one factor that greatly affects your stopping distance?",

possible_ans : [

'A. Weather conditions',

'B. Type of safety belts',

'C. Posted speed limit'
],
     
correct_ans : 0,
 
},

{
name : 'Question #38',
img : 'Road_Skills_images/image38.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_38.mp3', 
quest_txt : "Should a deer or other animals run out in front of your car, you should:",

possible_ans : [

'A. Brake and slow down as much as possible',

'B. Swerve to the left to avoid the deer',

'C. Swerve to the right to avoid the deer'

],
     
correct_ans : 0,
 
},

{
name : 'Question #39',
img : 'Road_Skills_images/image39.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_39.mp3', 
quest_txt : "In which situation are you allowed to pass a school bus?",

possible_ans : [

'A. If red lights are flashing, but the bus is on the other side of an undivided road',

'B. If a traffic officer signals you to proceed',

'C. If red lights are flashing, but no children are present'

],
     
correct_ans : 1,
 
},

{
name : 'Question #40',
img : 'Road_Skills_images/image40.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_40.mp3', 
quest_txt : "You approach a HAWK signal with steady red lights. A pedestrian has crossed the street and is no longer in your path. What should you do?",

possible_ans : [

'A. Stop and remain stopped until the light turns green',

'B. Slow down and proceed with caution',

'C. Stop and remain stopped until the lights begin flashing red',

],
     
correct_ans : 1,
 
},

{
name : 'Question #41',
img : 'Road_Skills_images/image41.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_41.mp3', 
quest_txt : "Parallel parking - When backing into a space large enough for your car and toward the curb, you should quickly turn your steering wheel all the way to the left:",

possible_ans : [

'A. When your back bumper is 18 feet from the car behind you',

'B. When your front door passes the rear bumper of the car ahead',

'C. When your front bumper is two feet behind the rear bumper of the car ahead'

],
     
correct_ans : 1,
 
},


{
name : 'Question #42',
img : 'Road_Skills_images/image42.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_42.mp3', 
quest_txt : "A condition known as highway hypnosis is often brought on by:",

possible_ans : [

'A. Reduced activity',

'B. Lack of variety',

'C. Steady sounds of wind, engine, and tire hum',

'D. All of the above'
],
     
correct_ans : 3,
 
},

{
name : 'Question #43',
img : 'Road_Skills_images/image43.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_43.mp3', 
quest_txt : "Unless there is an emergency it is illegal to use a cell phone for text messaging while driving:",

possible_ans : [

'A. False',

'B. True'

],
     
correct_ans : 1,
 
},

{
name : 'Question #44',
img : 'Road_Skills_images/image44.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_44.mp3', 
quest_txt : "Which of the following is not considered safe driving on an expressway?",

possible_ans : [

'A. Using left-hand lane when driving slower than other traffic',

'B. Staying in the middle of your lane',

'C. Keeping pace with other traffic'

],
     
correct_ans : 0,
 
},


{
name : 'Question #45',
img : 'Road_Skills_images/image45.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_45.mp3', 
quest_txt : "When sharing the road with a motorcyclist it is illegal and extremely hazardous to:",

possible_ans : [

'A. Overtake a motorcycle on the left side',

'B. Move into the same lane alongside a motorcycle',

'C. Drive faster than 40 mph'

],
     
correct_ans : 1,
 
},


{
name : 'Question #46',
img : 'Road_Skills_images/image46.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_46.mp3', 
quest_txt : "Speeding in a work zone might result in:",

possible_ans : [

'A. A fine up to $200',

'B. A fine between $100 and $2,000',

'C. A fine up to $500'

],
     
correct_ans : 1,
 
},


{
name : 'Question #47',
img : 'Road_Skills_images/image47.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_47.mp3', 
quest_txt : "How can you control speed and protect your brakes when going down a steep hill?",

possible_ans : [

'A. By shifting to a lower gear',

'B. By coasting in neutral',

'C. By turning off the ignition'
],
     
correct_ans : 0,
 
},

{
name : 'Question #48',
img : 'Road_Skills_images/image48.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_48.mp3', 
quest_txt : "A HAWK signal is showing steady red lights. What signal will follow next?",

possible_ans : [

'A. A deactivated (dark) signal',

'B. Double flashing red signals',

'C. A solid green light'
],
     
correct_ans : 1,
 
},

{
name : 'Question #49',
img : 'Road_Skills_images/image49.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_49.mp3', 
quest_txt : "Unless otherwise posted, the general maximum speed limit on an urban interstate is:",

possible_ans : [

'A. 70 mph',

'B. 65 mph',

'C. 55 mph'
],
     
correct_ans : 1,
 
},

{
name : 'Question #50',
img : 'Road_Skills_images/image50.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_50.mp3', 
quest_txt : "Grooming while driving:",

possible_ans : [

'A. Is an example of distracted driving',

'B. Is safe if you always keep one hand on the steering wheel',

'C. Is an example of reckless driving'
],
     
correct_ans : 0,
 
},

{
name : 'Question #51',
img : 'Road_Skills_images/image51.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_51.mp3', 
quest_txt : "Unmarked crosswalks are crosswalks not marked by painted lines. They exist:",

possible_ans : [

'A. Everywhere a pedestrian crosses the street',

'B. At intersections',

'C. In school zones'
],
     
correct_ans : 1,
 
},

{
name : 'Question #52',
img : 'Road_Skills_images/image52.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_52.mp3', 
quest_txt : "If you change your name, you must obtain a new license within:",

possible_ans : [

'A. 14 days',

'B. 60 days',

'C. 30 days'
],
     
correct_ans : 1,
 
},

{
name : 'Question #53',
img : 'Road_Skills_images/image53.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_53.mp3', 
quest_txt : "Do not enter a railroad crossing, unless:",

possible_ans : [

'A. You have a green light',

'B. You can drive completely through without stopping',

'C. The crossing is marked with only a crossbuck sign'

],
     
correct_ans : 1,

}, 

{
name : 'Question #54',
img : 'Road_Skills_images/image54.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_54.mp3', 
quest_txt : "What is the safest thing to do if there is a heavy fog on the road?",

possible_ans : [

'A. Slow down and turn on hazard lights',

'B. Pull over into a parking area and stop driving',

'C. Drive slowly with parking lights on'
],
     
correct_ans : 1,

}, 

{
name : 'Question #55',
img : 'Road_Skills_images/image55.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_55.mp3', 
quest_txt : "What do the light gray areas in the picture mark?",

possible_ans : [

'A. Central vision',

'B. Vehicle maneuver angle',

'C. Blind spot'

],
     
correct_ans : 2,

}, 

{
name : 'Question #56',
img : 'Road_Skills_images/image56.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_56.mp3', 
quest_txt : " Following too closely behind another vehicle:",

possible_ans : [

'A. Improves fuel economy',

'B. Helps traffic flow smoothly',

'C. Can cause a rear-end collision'

],
     
correct_ans : 2,

}, 

{
name : 'Question #57',
img : 'Road_Skills_images/image57.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_57.mp3', 
quest_txt : "If your brakes get wet, you can dry them if you:",

possible_ans : [

"A. Turn on your car's heater",

'B. Press hard on the brake pedal',

'C. Go slowly while gently applying the brakes'

],
     
correct_ans : 2,

},

{
name : 'Question #58',
img : 'Road_Skills_images/image58.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_58.mp3', 
quest_txt : "When taking drugs that are likely to affect your driving, you should:",

possible_ans : [

'A. Not drive',

'B. Only drive for short distances',

'C. Never drive faster than 30 mph'
],
     
correct_ans : 0,

}, 

{
name : 'Question #59',
img : 'Road_Skills_images/image59.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_59.mp3', 
quest_txt : "Parking is never allowed:",

possible_ans : [

'A. In an intersection',

'B. In front of a rural mailbox',

'C. On a hill'
],
     
correct_ans : 0,

}, 

{
name : 'Question #60',
img : 'Road_Skills_images/image60.jpg',
audioQuest : 'Road-Skills-Audio/skills_question_60.mp3', 
quest_txt : "If you are in a roundabout when an emergency vehicle with flashing lights approaches from behind, you should:",

possible_ans : [

'A. Move to the right in the roundabout and stop',

'B. Proceed through the roundabout before stopping',

'C. Proceed through the roundabout and continue driving'

],
     
correct_ans : 1,

}
]; 





loadQuestion(curr_index);
curr_audio.play();

function loadQuestion(curr_index) {
curr_audio.currentTime = 0;
curr_audio.src = test_questions[curr_index].audioQuest;
curr_audio.load;
current_question.textContent = test_questions[curr_index].name;  
track_img.style.backgroundImage = "url(" + test_questions[curr_index].img + ")";
question_txt.textContent = test_questions[curr_index].quest_txt; 
addButtons(curr_index);
};

function nextQuestion() {
removeButtons(curr_index);
if (curr_index < test_questions.length-1){ 
curr_index += 1;
}else{ curr_index = 0;
 };
 loadQuestion(curr_index);
playQuestion();
};


function prevQuestion() {
removeButtons(curr_index);

    if (curr_index > 0) {
curr_index -= 1;
}else {
curr_index = test_questions.length-1;
};
    
loadQuestion(curr_index);
playQuestion();
};

function Repeat() {
i = curr_index;
loadQuestion(i);
playQuestion();
};



function playQuestion() {
curr_audio.play();
};



function addButtons(curr_index){
    for (let j=0;j<4; ++j){
        str=document.getElementById("button"+j);
        str.style.display="none";
    };
 var possible_index = test_questions[curr_index].possible_ans.length;
    let btn_width = 0;
    for (let j=0;j < possible_index; j++) {
        if (btn_width < test_questions[curr_index].possible_ans[j].length){
            btn_width = test_questions[curr_index].possible_ans[j].length;
        };
    };
    
    let final_width = btn_width*8;
    let MAX_WIDTH= 204;
    if (final_width >> MAX_WIDTH) {
        final_width = MAX_WIDTH;
    };
   
    let  str_width = final_width + "px";
   
    
 for (let i=0;i < possible_index; i++) {
 btn = document.getElementById("button"+i);
     btn.style.width = str_width;
   btn.innerHTML = test_questions[curr_index].possible_ans[i];
     btn.style.display = "block";
   }
  }; 
   
 function removeButtons(current_index) {
 var possible_index = test_questions[curr_index].possible_ans.length;
 for (let i=0; i<possible_index; i++) {
 btn = document.getElementById("button"+i);    
 btn.style.display = "none";
 }
 
}; 
   
   
function checkEvent() {
btn.addEventListener("click",checkAnswer);
   
}; 

function checkAnswer(num) {
    
    
if (num  == test_questions[curr_index].correct_ans) {
  curr_audio.src = 'Text-Speech-Audios/Correct_answer.mp3';
  curr_audio.load;
    curr_audio.play();
 
  } else {
  curr_audio.src = 'Text-Speech-Audios/Wrong_answer.mp3';
  curr_audio.load;
      curr_audio.play();
    
  };
  
};


  