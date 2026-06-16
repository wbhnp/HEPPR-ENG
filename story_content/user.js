window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  const button = object('5w1VxWN30bu');
var player = GetPlayer();
var name = player.GetVar("UserName");

fetch("https://script.google.com/macros/s/AKfycbwj7Q1MmHp53484xbgtIXYYbb5Rm4N94xp8T5h7_ticJx-sI4YWvzUf7Mw7hclgB2Fb/exec", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: name })
});
}

window.Script2 = function()
{
  const restart1 = object('6cMC1vufi8x');
var player = GetPlayer();
var userName = player.GetVar("UserName");

var answers = [
  { name: userName, slide: "WHAT_ADDITIONAL_INFORMATION_DO_YOU_NEED_TO_ACT", field: "What_additional_information_do_you_need_to_act", answer: player.GetVar("WHAT_ADDITIONAL_INFORMATION_DO_YOU_NEED_TO_ACT_What_additional_information_do_you_need_to_act") }
];

fetch("https://script.google.com/macros/s/AKfycbwj7Q1MmHp53484xbgtIXYYbb5Rm4N94xp8T5h7_ticJx-sI4YWvzUf7Mw7hclgB2Fb/exec", {
  method: "POST",
  mode: "no-cors",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ answers: answers })
});

}

window.Script3 = function()
{
  const restart1 = object('5g9gLz1SFyV');
var player = GetPlayer();
var userName = player.GetVar("UserName");

var answers = [
  { name: userName, slide: "WHAT_ARE_YOUR_NEXT_STEPS", field: "What_do_you_need_to_do", answer: player.GetVar("WHAT_ARE_YOUR_NEXT_STEPS_What_do_you_need_to_do") },
  { name: userName, slide: "WHAT_ARE_YOUR_NEXT_STEPS", field: "Who_will_do_it", answer: player.GetVar("WHAT_ARE_YOUR_NEXT_STEPS_Who_will_do_it") },
  { name: userName, slide: "WHAT_ARE_YOUR_NEXT_STEPS", field: "What_resources_are_needed", answer: player.GetVar("WHAT_ARE_YOUR_NEXT_STEPS_What_resources_are_needed") }
];

fetch("https://script.google.com/macros/s/AKfycbwj7Q1MmHp53484xbgtIXYYbb5Rm4N94xp8T5h7_ticJx-sI4YWvzUf7Mw7hclgB2Fb/exec", {
  method: "POST",
  mode: "no-cors",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ answers: answers })
});

}

window.Script4 = function()
{
  const restart1 = object('5zARIXDha6l');
var player = GetPlayer();
var userName = player.GetVar("UserName");

var answers = [
  { name: userName, slide: "WHAT_ARE_YOUR_NEXT_STEPS", field: "What_do_you_need_to_do_", answer: player.GetVar("WHAT_ARE_YOUR_NEXT_STEPS_What_do_you_need_to_do_") },
  { name: userName, slide: "WHAT_ARE_YOUR_NEXT_STEPS", field: "Who_will_do_it_", answer: player.GetVar("WHAT_ARE_YOUR_NEXT_STEPS_Who_will_do_it_") },
  { name: userName, slide: "WHAT_ARE_YOUR_NEXT_STEPS", field: "What_resources_are_needed_", answer: player.GetVar("WHAT_ARE_YOUR_NEXT_STEPS_What_resources_are_needed_") }
];

fetch("https://script.google.com/macros/s/AKfycbwj7Q1MmHp53484xbgtIXYYbb5Rm4N94xp8T5h7_ticJx-sI4YWvzUf7Mw7hclgB2Fb/exec", {
  method: "POST",
  mode: "no-cors",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ answers: answers })
});

}

window.Script5 = function()
{
  const restart1 = object('5nXg8JDi0bs');
var player = GetPlayer();
var userName = player.GetVar("UserName");

var answers = [
  { name: userName, slide: "WHAT_STANDS_OUT_IN_THE_CURRENT_SITUATION", field: "Detail_1", answer: player.GetVar("WHAT_STANDS_OUT_IN_THE_CURRENT_SITUATION_Detail_1") },
  { name: userName, slide: "WHAT_STANDS_OUT_IN_THE_CURRENT_SITUATION", field: "Detail_2", answer: player.GetVar("WHAT_STANDS_OUT_IN_THE_CURRENT_SITUATION_Detail_2") }
];

fetch("https://script.google.com/macros/s/AKfycbwj7Q1MmHp53484xbgtIXYYbb5Rm4N94xp8T5h7_ticJx-sI4YWvzUf7Mw7hclgB2Fb/exec", {
  method: "POST",
  mode: "no-cors",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ answers: answers })
});

}

};
