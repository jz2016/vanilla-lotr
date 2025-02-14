console.log("Linked.");

// Dramatis Personae
const hobbits = [
  `Frodo Baggins`,
  `Samwise "Sam" Gamgee`,
  `Meriadoc "Merry" Brandybuck`,
  `Peregrin "Pippin" Took`
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  'The-Shire', 
  'Rivendell', 
  'Mordor'
];


// ============
// Chapter 1
// ============

function makeMiddleEarth () { 
  console.log("1: makeMiddleEarth");

  // 1. create a section tag with an id of middle-earth
  const middleEarthSection = document.createElement("section");
  middleEarthSection.id = "middle-earth";
  // 2. use a for loop to iterate over the lands array that does the following:
  for(let i = 0; i < lands.length; i++){
    const article = document.createElement("article");
    article.id = lands[i];
    const h1 = document.createElement("h1");
    h1.innerText = lands[i];
    article.appendChild(h1);
    middleEarthSection.appendChild(article);
  }
  document.body.appendChild(middleEarthSection);
  //   2a. creates an article tag (there should be one for each land when the loop is done)

  //   2b. gives each land article an `id` tag of the corresponding land name

  //   2c. includes an h1 with the name of the land inside each land article

  //   2d. appends each land to the middle-earth section

  // 3. append the section to the body of the DOM.

}




// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
  console.log("2: makeHobbits");

  // display an `unordered list` of hobbits in the shire
  const hobbitList = document.createElement("ul");
  for(let i = 0; i < hobbits.length; i++){
    const li = document.createElement("li");
    li.setAttribute("class", "hobbit");
    li.innerHTML = hobbits[i];
    hobbitList.appendChild(li);
  }
  document.querySelector("#The-Shire").appendChild(hobbitList);
  // give each hobbit a class of `hobbit`

  // hint: create a 'ul' outside the loop into which to append the 'li's

  // hint: get 'The-Shire' by using its id

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".


// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() { 
  console.log("3: keepItSecretKeepItSafe");

  // create a div with an id of `'the-ring'`
  const theRing = document.createElement("div");
  theRing.id = "the-ring";
  // give the div a class of `'magic-imbued-jewelry'`
  theRing.setAttribute("class", "magic-imbued-jewelry");
  // add the ring as a child of `Frodo`
  document.querySelector("li:first-child").appendChild(theRing);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".


// ============
// Chapter 4
// ============

function makeBaddies() { 
  console.log("4: makeBaddies");

  // display an unordered list of baddies in Mordor
  const mordorBaddies = document.createElement("ul");
  for(let i = 0; i < baddies.length; i++){
    const li = document.createElement("li");
    li.setAttribute("class", "baddy");
    li.innerHTML = baddies[i];
    mordorBaddies.appendChild(li);
  } 
  document.querySelector("#Mordor").appendChild(mordorBaddies);
  // give each of the baddies a class of "baddy"

  // remember to append them to Mordor

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..


// ============
// Chapter 5
// ============

function makeBuddies () { 
  console.log("5: makeBuddies");

  // create an `aside` tag
   const buddiesAside = document.createElement("aside");
  // put an `unordered list` of the `'buddies'` in the aside
   const fellowshipBuddies = document.createElement("ul");
   for(let i = 0; i < buddies.length; i++){
    const li = document.createElement("li");
    li.innerHTML = buddies[i];
    fellowshipBuddies.appendChild(li);
   }
   buddiesAside.appendChild(fellowshipBuddies);
  // insert your aside as a child element of `rivendell`
  document.querySelector("#Rivendell").appendChild(buddiesAside);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".


// ============
// Chapter 6
// ============

function leaveTheShire() { 
  console.log("6: leaveTheShire");
 
  document.querySelector("#Rivendell").appendChild(document.querySelector("ul"));
  // assemble the `hobbits` and move them to `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"


// ============
// Chapter 7
// ============

function beautifulStranger() { 
  console.log("7: beautifulStranger");
  const buddiesAside = document.querySelector("aside").childNodes[0].childNodes[3];
  buddiesAside.innerText = "Aragorn";

  

  // change the `'Strider'` text to `'Aragorn'`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"


// ============
// Chapter 8
// ============

function forgeTheFellowShip() { 
  console.log("8: forgeTheFellowShip");
  // create a new div called `'the-fellowship'` within `rivendell`
  const theFellowShip = document.createElement("div");
  theFellowShip.id = "the-fellowship";
  document.querySelector("#Rivendell").appendChild(theFellowShip);
  // const combinedArray = buddies.concat(hobbits);

  const combineFellowship = document.createElement("ul");
  theFellowShip.appendChild(combineFellowship)
  for(let i = 0; i < 3; i++){
    alert(document.querySelector("li").innerText + " has joined your party.");
    theFellowShip.appendChild(document.querySelector("li"));
    alert(document.querySelector(".hobbit").innerText + " has joined your party.");
    theFellowShip.appendChild(document.querySelector(".hobbit"));
    alert(document.querySelector("li").innerText + " has joined your party");
    theFellowShip.appendChild(document.querySelector("li"));
  }
 
  document.querySelector("#the-fellowship").appendChild(combineFellowship);


 

  


  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
  // after each character is added make an alert that they // have joined your party
  
  // NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() { 
  console.log("9: theBalrog");
  const nameChange = document.querySelector("#the-fellowship").childNodes[0];
  nameChange.innerHTML = "Gandalf the White";
  nameChange.style.backgroundColor = "white";
  nameChange.style.border = "thick solid gray";

   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"


// ============
// Chapter 10
// ============

function hornOfGondor() { 
  console.log("10: hornOfGondor");
  alert("The horn of Gondor has been blown!");
  const boromir = document.querySelector("#the-fellowship");
  boromir.removeChild(boromir.childNodes[6]);
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // Remove `Boromir` from the Fellowship
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"


// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() { 
  console.log("11: itsDangerousToGoAlone");
  const div = document.createElement("div");
  div.id = "mount-doom";
  document.querySelector("#Mordor").appendChild(div);
  const hobbitGroupDiv = document.createElement("ul")
  document.querySelector("#Mordor").appendChild(hobbitGroupDiv);

  for(let i = 0; i < 2; i++){
   hobbitGroupDiv.appendChild(document.querySelector(".hobbit"));
      
    
  }
 
// document.querySelector("#Mordor").appendChild(newMordorDiv);
 

  // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
  // add a div with an id of `'mount-doom'` to `Mordor` 4,5
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"


// ============
// Chapter 12
// ============

function weWantsIt() { 
  console.log("12: weWantsIt");
  const gollumDiv = document.createElement("div");
  gollumDiv.id = "gollum";
  document.querySelector("#Mordor").appendChild(gollumDiv);
  gollumDiv.appendChild(document.querySelector("#the-ring"));
  document.querySelector("#mount-doom").appendChild(gollumDiv);
  // Create a div with an id of `'gollum'` and add it to Mordor
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  // Move Gollum into Mount Doom
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() { 
  console.log("13: thereAndBackAgain");
  const gollum = document.querySelector("#gollum");
  const mountDoom = document.querySelector("#mount-doom");
  mountDoom.removeChild(gollum);


  const hobbitsInShire = document.createElement("ul");

  for(let i = 0; i < 4; i++){
    hobbitsInShire.appendChild(document.querySelector(".hobbit"));
  }
    document.querySelector("#The-Shire").appendChild(hobbitsInShire);

  // remove `Gollum` and `the Ring` from the document
  // Move all the `hobbits` back to `the shire`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================


document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth);
document.getElementById('chapter-2').addEventListener('click', makeHobbits);
document.getElementById('chapter-3').addEventListener('click', keepItSecretKeepItSafe);
document.getElementById('chapter-4').addEventListener('click', makeBaddies);
document.getElementById('chapter-5').addEventListener('click', makeBuddies);
document.getElementById('chapter-6').addEventListener('click', leaveTheShire);
document.getElementById('chapter-7').addEventListener('click', beautifulStranger);
document.getElementById('chapter-8').addEventListener('click', forgeTheFellowShip);
document.getElementById('chapter-9').addEventListener('click', theBalrog);
document.getElementById('chapter-10').addEventListener('click', hornOfGondor);
document.getElementById('chapter-11').addEventListener('click', itsDangerousToGoAlone);
document.getElementById('chapter-12').addEventListener('click', weWantsIt);
document.getElementById('chapter-13').addEventListener('click', thereAndBackAgain);
document.getElementById('all-chapters').addEventListener('click', () => {
  makeMiddleEarth();
  makeHobbits();
  keepItSecretKeepItSafe();
  makeBaddies();
  makeBuddies();
  leaveTheShire();
  beautifulStranger();
  forgeTheFellowShip();
  theBalrog();
  hornOfGondor();
  itsDangerousToGoAlone();
  weWantsIt();
  thereAndBackAgain();
});
