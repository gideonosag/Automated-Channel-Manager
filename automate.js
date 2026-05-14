"use strict";

let concepts = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// let len = concepts.length;
let i = 0;
let len = concepts.length;
let nextIdea;

const aiYtAutomatedManager  = videoConcept => {
  for (; i < len; i++) {
    let mostRelevantIdea = concepts[i];

    if (mostRelevantIdea) {
      nextIdea = `${mostRelevantIdea}: ${videoConcept}`;
      i++;
    } else {
      nextIdea = `Idea box is empty! Please enter a value.`
    }
    return nextIdea;
  }
}

let getNextIdea = aiYtAutomatedManager(
  "Bible Study With Me (Live): 30 minutes of silent study, then a 15-minute breakdown of a specific chapter."
);
console.log(getNextIdea);

console.log();

getNextIdea = aiYtAutomatedManager(
  "Guided Morning Prayers (Faceless): 10-minute prayer videos for busy people, with relaxing visuals."
);
console.log(getNextIdea);

console.log();

getNextIdea = aiYtAutomatedManager(
   "I tried fasting/giving up social media/reading only the Gospels for 30 days."
);
console.log(getNextIdea);

console.log();

getNextIdea = aiYtAutomatedManager(
  "Bible Study With Me (Live): 30 minutes of silent study, then a 15-minute breakdown of a specific chapter.",
);
console.log(getNextIdea);

console.log();

getNextIdea = aiYtAutomatedManager(
  "How to declutter your home/life to focus more on God.",
);
console.log(getNextIdea);

console.log();

getNextIdea = aiYtAutomatedManager(
  "Answering Tough Questions: Tackling difficult questions like (Why does God allow suffering?)"
);
console.log(getNextIdea);

console.log();

getNextIdea = aiYtAutomatedManager(
  "(Why I'm a Christian) Interviews: Talking to ordinary people about their conversion stories.");
console.log(getNextIdea);

  console.log();


getNextIdea = aiYtAutomatedManager(
  "End Times Prophecy Update: Analyzing world events in the light of biblical prophecy.");
console.log(getNextIdea);

console.log();

getNextIdea = aiYtAutomatedManager(
  "Christian Perspective on Politics 2026: Navigating faith in a polarized political climate.");
console.log(getNextIdea);

console.log();

getNextIdea = aiYtAutomatedManager(
  "Christian Book Reviews/Recommendations: Reviewing theology books, fiction, or devotionals.");
console.log(getNextIdea);

console.log();

getNextIdea = aiYtAutomatedManager(
  "Worship Music Playlists: Curating playlists for studying, driving, or relaxing.");
console.log(getNextIdea);

console.log();

getNextIdea = aiYtAutomatedManager(
  "Reviewing Christian Movies: Giving an honest review of the latest faith-based films.");
console.log(getNextIdea);



