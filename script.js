const easy = document.getElementById("easy-1");
const hard = document.getElementById("hard-1");


let mode = 'easy';

function easyClick() {
    console.log("easyClick");
    easy.style.color = "#2b0dd4";
    hard.style.color = "#411c5c";
    easy.style.color = "#2b0dd4";
    hard.style.color = "#411c5c";
}

function hardClick() {
    hard.style.color = "#2b0dd4";
    easy.style.color = "#411c5c";
    hard1.style.color = "#2b0dd4";
    easy1.style.color = "#411c5c";

}

const mainpage1 = document.getElementById("mainpage-java");
 function ruClick() {
     mainpage1.style.display = "none";
     mainpage2.style.display = "flex"
 }

const mainpage2 = document.getElementById("mainpage-ru-java");
function engClick() {
    mainpage2.style.display = "none";
    mainpage1.style.display = "flex";
}

const easy1 = document.getElementById("easy-2");
const hard1 = document.getElementById("hard-2");

function easy1Click() {
    console.log("easyClick");
    easy1.style.color = "#2b0dd4";
    hard1.style.color = "#411c5c";
    easy.style.color = "#2b0dd4";
    hard.style.color = "#411c5c";
}

function hard1Click() {
    hard1.style.color = "#2b0dd4";
    easy1.style.color = "#411c5c";
    hard.style.color = "#2b0dd4";
    easy.style.color = "#411c5c";
}


const playfield = document.getElementById("play-field-java");
function newgClick(){
    playfield.style.display = "flex";
    mainpage1.style.display = "none";
}

function newruClick(){
    playfield.style.display = "flex";
    mainpage2.style.display = "none";
}

const hint = document.getElementById("hint-java");
const actionsIconsJava1 = document.getElementById("actions-icons-java1");
const actionsIconsJava2 = document.getElementById("actions-icons-java2");
const actionsIconsJava3 = document.getElementById("actions-icons-java3");
const actionsIconsJava4 = document.getElementById("actions-icons-java4");
const actionsIconsJava5 = document.getElementById("actions-icons-java5");
const actionsIconsJava6 = document.getElementById("actions-icons-java6");
const actionsIconsJava7 = document.getElementById("actions-icons-java7");

const moneyInfo = document.getElementById("money-info");
function moneyClick() {
    if (actionsIconsJava1.style.display === "none"){
    hint.style.display = "flex";
    moneyInfo.style.display = "flex";
    dissatisfactionInfo.style.display = "none";
    corruptionInfo.style.display = "none";
    healthInfo.style.display = "none";
    militaryInfo.style.display = "none";
    influenceInfo.style.display = "none";
    incomeInfo.style.display = "none";
    cancelHint.style.display = "flex";
    actionsIconsJava1.style.display = "flex";

        actionsIconsJava2.style.display = "none";
        actionsIconsJava3.style.display = "none";
        actionsIconsJava4.style.display = "none";
        actionsIconsJava5.style.display = "none";
        actionsIconsJava6.style.display = "none";
        actionsIconsJava7.style.display = "none";}
    else{
        actionsIconsJava1.style.display = "none";

    }
}

const incomeInfo = document.getElementById("income-info");
function incomeClick() {
    if (actionsIconsJava2.style.display === "none"){
    hint.style.display = "flex";
    moneyInfo.style.display = "none";
    dissatisfactionInfo.style.display = "none";
    corruptionInfo.style.display = "none";
    healthInfo.style.display = "none";
    militaryInfo.style.display = "none";
    influenceInfo.style.display = "none";
    incomeInfo.style.display = "flex";
    cancelHint.style.display = "flex";

        actionsIconsJava1.style.display = "none";
        actionsIconsJava2.style.display = "flex";
        actionsIconsJava3.style.display = "none";
        actionsIconsJava4.style.display = "none";
        actionsIconsJava5.style.display = "none";
        actionsIconsJava6.style.display = "none";
        actionsIconsJava7.style.display = "none";}
    else {
        actionsIconsJava2.style.display = "none";
    }
}

const influenceInfo = document.getElementById("influence-info");
function influenceClick() {
    if (actionsIconsJava3.style.display === "none"){
    hint.style.display = "flex";
    moneyInfo.style.display = "none";
    dissatisfactionInfo.style.display = "none";
    corruptionInfo.style.display = "none";
    healthInfo.style.display = "none";
    militaryInfo.style.display = "none";
    influenceInfo.style.display = "flex";
    incomeInfo.style.display = "none";
    cancelHint.style.display = "flex";

        actionsIconsJava1.style.display = "none";
        actionsIconsJava2.style.display = "none";
        actionsIconsJava3.style.display = "flex";
        actionsIconsJava4.style.display = "none";
        actionsIconsJava5.style.display = "none";
        actionsIconsJava6.style.display = "none";
        actionsIconsJava7.style.display = "none";}
else {
        actionsIconsJava3.style.display = "none";
    }
}

const militaryInfo = document.getElementById("military-strength-info");
function militaryStrengthClick() {
    if (actionsIconsJava4.style.display === "none"){
    hint.style.display = "flex";
    moneyInfo.style.display = "none";
    dissatisfactionInfo.style.display = "none";
    corruptionInfo.style.display = "none";
    healthInfo.style.display = "none";
    militaryInfo.style.display = "flex";
    influenceInfo.style.display = "none";
    incomeInfo.style.display = "none";
    cancelHint.style.display = "flex";

        actionsIconsJava1.style.display = "none";
        actionsIconsJava2.style.display = "none";
        actionsIconsJava3.style.display = "none";
        actionsIconsJava4.style.display = "flex";
        actionsIconsJava5.style.display = "none";
        actionsIconsJava6.style.display = "none";
        actionsIconsJava7.style.display = "none";}
else {
        actionsIconsJava4.style.display = "none";
    }
}

const healthInfo = document.getElementById("health-info");
function healthClick() {
    if (actionsIconsJava5.style.display === "none"){
    hint.style.display = "flex";
    moneyInfo.style.display = "none";
    dissatisfactionInfo.style.display = "none";
    corruptionInfo.style.display = "none";
    healthInfo.style.display = "flex";
    militaryInfo.style.display = "none";
    influenceInfo.style.display = "none";
    incomeInfo.style.display = "none";
    cancelHint.style.display = "flex";

        actionsIconsJava1.style.display = "none";
        actionsIconsJava2.style.display = "none";
        actionsIconsJava3.style.display = "none";
        actionsIconsJava4.style.display = "none";
        actionsIconsJava5.style.display = "flex";
        actionsIconsJava6.style.display = "none";
        actionsIconsJava7.style.display = "none";}
else {
        actionsIconsJava5.style.display = "none";
    }
}

const corruptionInfo = document.getElementById("corruption-info");
function corruptionClick() {
    if (actionsIconsJava6.style.display === "none"){
    hint.style.display = "flex";
    moneyInfo.style.display = "none";
    dissatisfactionInfo.style.display = "none";
    corruptionInfo.style.display = "flex";
    healthInfo.style.display = "none";
    militaryInfo.style.display = "none";
    influenceInfo.style.display = "none";
    incomeInfo.style.display = "none";
    cancelHint.style.display = "flex";

        actionsIconsJava1.style.display = "none";
        actionsIconsJava2.style.display = "none";
        actionsIconsJava3.style.display = "none";
        actionsIconsJava4.style.display = "none";
        actionsIconsJava5.style.display = "none";
        actionsIconsJava6.style.display = "flex";
        actionsIconsJava7.style.display = "none";}
else {
        actionsIconsJava6.style.display = "none";
    }
}

const dissatisfactionInfo = document.getElementById("dissatisfaction-info");
function dissatisfactionClick() {
    if (actionsIconsJava7.style.display === "none"){
    hint.style.display = "flex";
    moneyInfo.style.display = "none";
    dissatisfactionInfo.style.display = "flex";
    healthInfo.style.display = "none";
    militaryInfo.style.display = "none";
    influenceInfo.style.display = "none";
    incomeInfo.style.display = "none";
    corruptionInfo.style.display = "none";
    cancelHint.style.display = "flex";

        actionsIconsJava1.style.display = "none";
        actionsIconsJava2.style.display = "none";
        actionsIconsJava3.style.display = "none";
        actionsIconsJava4.style.display = "none";
        actionsIconsJava5.style.display = "none";
        actionsIconsJava6.style.display = "none";
        actionsIconsJava7.style.display = "flex";}
else {
        actionsIconsJava7.style.display = "none";
    }
}

const cancelHint = document.getElementById("cancel-hint");
function cancelhintClick(){
    cancelHint.style.display = "none";
    hint.style.display = "none";
}



const padvisers1 = document.getElementById("places-advisers1");
const padvisers2 = document.getElementById("places-advisers2");
const padvisers3 = document.getElementById("places-advisers3");
const padvisers4 = document.getElementById("places-advisers4");
const padvisers5 = document.getElementById("places-advisers5");
function buttonAdvisersClick(){
    if ((padvisers1.style.display === "none") && (perehod.style.color === "red")){
        padvisers1.style.display ="flex";
        if(serdykovPrison > 0){
        padvisers2.style.display ="flex";}

    }
     else if ((padvisers1.style.display === "none") && (perehod.style.color === "blue"))
    {
        padvisers1.style.display ="flex";
        if(serdykovPrison > 0){
            padvisers2.style.display ="flex";}
        padvisers3.style.display = "flex";
    }
    else if ((padvisers1.style.display === "none") && (perehod.style.color === "black")){
        padvisers1.style.display ="flex";
        if(serdykovPrison > 0){
            padvisers2.style.display ="flex";}
        padvisers4.style.display = "flex";
    }
    else if ((padvisers1.style.display === "none") && (perehod.style.color === "white")){
        padvisers1.style.display ="flex";
        if(serdykovPrison > 0){
            padvisers2.style.display ="flex";}
        padvisers5.style.display = "flex";
    }
    else {
        padvisers1.style.display = "none";
        padvisers2.style.display = "none";
        padvisers3.style.display = "none";
        padvisers4.style.display = "none";
        padvisers5.style.display = "none";
    }


}

const medvedevpr = document.getElementById("medvedev-prison");
const medvedevfoto = document.getElementById("medvedev-foto");
function medvedevCancelClick() {
    medvedevpr.style.display ="flex";
    medvedevfoto.style.display = "none";
}

const searchevidence1 = document.getElementById("search-evidence1");
const buttongoprison1 = document.getElementById("button-go-prison1");
function medvedevButtonPrisonYesClick(){
    searchevidence1.style.display ="flex";
    medvedevpr.style.display ="none";
    medvedevfoto.style.display = "flex";
    buttongoprison1.style.display ="none";

    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }
}

function medvedevButtonPrisonClick() {
    medvedevpr.style.display ="none";
    medvedevfoto.style.display = "flex";
}

const serdukovpr = document.getElementById("serdukov-prison");
const serdukovfoto = document.getElementById("serdukov-foto");

function serdukovCancelClick() {
    serdukovfoto.style.display = "none";
    serdukovpr.style.display ="flex";
}

const searchevidenceElem = document.getElementById("search-evidence2");
const buttongoprison2 = document.getElementById("button-go-prison2");

const sedykovPrisonElem = document.getElementById("sedykov-prison");
let serdykovPrison = 3;
function addToSerdykovPrison(a){
    serdykovPrison = serdykovPrison + a;
    sedykovPrisonElem.innerText = serdykovPrison;
}

if(serdykovPrison < 1){
    padvisers2.style.display = "none";
}

const medvedevPrisonElem = document.getElementById("medvedev-prison-turn");
let medvedevPrison = 9;
function addToMedvedevPrison(a){
    medvedevPrison = medvedevPrison + a;
    medvedevPrisonElem.innerText = medvedevPrison;
}

const glefPrisonElem = document.getElementById("glef-prison-turn");
let glefPrison = 9;
function addToGlefPrison(a){
    glefPrison = glefPrison + a;
    glefPrisonElem.innerText = glefPrison;
}

const mantyrovPrisonElem = document.getElementById("mantyrov-prison-turn");
let mantyrovPrison = 9;
function addToMantyrovPrison(a){
    mantyrovPrison = mantyrovPrison + a;
    mantyrovPrisonElem.innerText = mantyrovPrison;
}

const kolokolcevPrisonElem = document.getElementById("kolokolcev-prison-turn");
let kolokolcevPrison = 9;
function addToKolokolcevPrison(a){
    kolokolcevPrison = kolokolcevPrison + a;
    kolokolcevPrisonElem.innerText = kolokolcevPrison;
}


const serdykovnorm = document.getElementById("serdykov-norm");
const serdykovvolmodym = document.getElementById("serdykov-volmodym");

function serdukovButtonPrisonYesClick(){
    searchevidenceElem.style.display ="flex";
    serdukovpr.style.display ="none";
    serdukovfoto.style.display = "flex";
    buttongoprison2.style.display ="none";
    addToMilitary(-1);
    addToInfluence(-1);

    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }
}

function serdukovButtonPrisonClick() {
    serdukovpr.style.display ="none";
    serdukovfoto.style.display = "flex";
}

const glefpr = document.getElementById("glef-prison");
const gleffoto = document.getElementById("glef-foto");
function glefCancelClick() {
    glefpr.style.display ="flex";
    gleffoto.style.display = "none";
}

const searchevidence3 = document.getElementById("search-evidence3");
const buttongoprison3 = document.getElementById("button-go-prison3");

function glefButtonPrisonYesClick(){
    searchevidence3.style.display ="flex";
    glefpr.style.display ="none";
    gleffoto.style.display = "flex";
    buttongoprison3.style.display ="none";

    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }
}

function glefButtonPrisonClick() {
    glefpr.style.display ="none";
    gleffoto.style.display = "flex";
}



const mantyrovpr = document.getElementById("mantyrov-prison");
const mantyrovfoto = document.getElementById("mantyrov-foto");
function mantyrovCancelClick() {
    mantyrovpr.style.display ="flex";
    mantyrovfoto.style.display = "none";
}

const searchevidence4 = document.getElementById("search-evidence4");
const buttongoprison4 = document.getElementById("button-go-prison4");
function mantyrovButtonPrisonYesClick(){
    searchevidence4.style.display ="flex";
    mantyrovpr.style.display ="none";
    mantyrovfoto.style.display = "flex";
    buttongoprison4.style.display ="none";

    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }
}

function mantyrovButtonPrisonClick() {
    mantyrovpr.style.display ="none";
    mantyrovfoto.style.display = "flex";
}


const kolokolcevpr = document.getElementById("kolokolcev-prison");
const kolokolcevfoto = document.getElementById("kolokolcev-foto");
function kolokolcevCancelClick() {
    kolokolcevpr.style.display ="flex";
    kolokolcevfoto.style.display = "none";
}

const searchevidence5 = document.getElementById("search-evidence5");
const buttongoprison5 = document.getElementById("button-go-prison5");

function kolokolcevButtonPrisonYesClick(){
    searchevidence5.style.display ="flex";
    kolokolcevpr.style.display ="none";
    kolokolcevfoto.style.display = "flex";
    buttongoprison5.style.display ="none";

    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }
}

function kolokolcevButtonPrisonClick() {
    kolokolcevpr.style.display ="none";
    kolokolcevfoto.style.display = "flex";
}
var turnOver = 1;
const eventOne = document.getElementById("event1-java");
const eventTwo = document.getElementById("event2-java");
const eventThree = document.getElementById("event3-java");
const eventFour = document.getElementById("event4-java");
const eventFive = document.getElementById("event5-java");
const eventSix = document.getElementById("event6-java");
const eventSeven = document.getElementById("event7-java");
const eventEight = document.getElementById("event8-java");
const eventNine = document.getElementById("event9-java");

const faFrog = document.getElementById("fa-frog");
const faRainbox = document.getElementById("fa-rainbow");
const faDove = document.getElementById("fa-dove");
const faSeedling = document.getElementById("fa-seedling");

const faSun = document.getElementById("fa-sun");
const faUmbrellaBeach = document.getElementById("fa-umbrella-beach");
const faSwimmer = document.getElementById("fa-swimmer");
const faSwimmigPool = document.getElementById("fa-swimming-pool");

const faCloudSunRain = document.getElementById("fa-cloud-sun-rain");
const faCanadianMapleLeaf = document.getElementById("fa-canadian-maple-leaf");
const faGraduationCap = document.getElementById("fa-graduation-cap");
const faUmbrella = document.getElementById("fa-umbrella");

function turnOverClick() {
    addToMoney1();

    spacekarta.style.display = "none";
    berkytkarta.style.display = "none";
    IL76md90Akarta.style.display = "none";

    if (action === 0){
    addToAction(1);}

    cancelAction.style.display = "none";

    if (serdykovPrison < 2){
        padvisers2.style.display ="none";
    }

    addToInfluence(2);
    if(kolokolcevfoto.style.display === "flex"){
        addToMilitary(2)
    }

    if(serdykovnorm.style.display !== "none"){
        addToMilitary(2);
    }

    if(serdykovvolmodym.style.display === "flex"){
        addToInfluence(-2);
    }

    if(searchevidenceElem.style.display === "flex"){
    addToSerdykovPrison(-1);
    }

    textEventOneOne.style.display ="none";
    textEventTwoOne.style.display ="none";
    textEventThreeOne.style.display ="none";

    textEventOneTwo.style.display ="none";
    textEventTwoTwo.style.display ="none";
    textEventThreeTwo.style.display ="none";

    textEventOneThree.style.display ="none";
    textEventTwoThree.style.display ="none";
    textEventThreeThree.style.display ="none";

    textEventOneFour.style.display ="none";
    textEventTwoFour.style.display ="none";

    textEventOneFive.style.display ="none";
    textEventTwoFive.style.display ="none";

    textEventOneSix.style.display ="none";
    textEventTwoSix.style.display ="none";

    textEventOneSeven.style.display ="none";
    textEventTwoSeven.style.display ="none";
    textEventThreeSeven.style.display ="none";

    textEventOneEight.style.display ="none";
    textEventTwoEight.style.display ="none";
    textEventThreeEight.style.display ="none";

    textEventOneNine.style.display ="none";
    textEventTwoNine.style.display ="none";

    turn.style.display ="none";

     turnOver += 1;
    karta.style.display ="none";
    if (turnOver === 2){
        addToDissatisfaction(10);
        allFonEvents.style.display ="flex";
        eventTwo.style.display ="flex";
        eventOne.style.display ="none";
        answerEvent1.style.display ="none";

    }
    if (turnOver === 3){
        allFonEvents.style.display ="flex";
        eventThree.style.display ="flex";
        eventTwo.style.display ="none";
        answerEvent1.style.display ="none";
    }

    if (turnOver === 4){
        addToHealth(-10);
        allFonEvents.style.display ="flex";
        eventFour.style.display ="flex";
        eventThree.style.display ="none";
        answerEvent1.style.display ="none";
    }

    if (turnOver === 5){
        allFonEvents.style.display ="flex";
        eventFive.style.display ="flex";
        eventFour.style.display ="none";
        answerEvent1.style.display ="none";
    }

    if (turnOver === 6){
        allFonEvents.style.display ="flex";
        eventSix.style.display ="flex";
        eventFive.style.display ="none";
        answerEvent1.style.display ="none";

        faSun.style.display ="flex";
        faUmbrellaBeach.style.display ="flex";
        faSwimmer.style.display ="flex";
        faSwimmigPool.style.display ="flex";

        faFrog.style.display ="none";
        faRainbox.style.display ="none";
        faDove.style.display ="none";
        faSeedling.style.display ="none";
    }

    if (turnOver === 7){
        addToDissatisfaction(10);
        allFonEvents.style.display ="flex";
        eventSeven.style.display ="flex";
        eventSix.style.display ="none";
        answerEvent1.style.display ="none";
    }

    if (turnOver === 8){
        allFonEvents.style.display ="flex";
        eventEight.style.display ="flex";
        eventSeven.style.display ="none";
        answerEvent1.style.display ="none";
    }

    if (turnOver === 9){
        allFonEvents.style.display ="flex";
        eventNine.style.display ="flex";
        eventEight.style.display ="none";
        answerEvent1.style.display ="none";

        faSun.style.display ="none";
        faUmbrellaBeach.style.display ="none";
        faSwimmer.style.display ="none";
        faSwimmigPool.style.display ="none";

        faCloudSunRain.style.display ="flex";
        faCanadianMapleLeaf.style.display ="flex";
        faGraduationCap.style.display ="flex";
        faUmbrella.style.display ="flex";

       if(berkyt.style.display === "flex"){
           addToTurnBerkyt(-1);}
        if(IL76md90A.style.display === "flex"){
            addToIL76md90ATurn(-1);}
        if(space.style.display === "flex") {
        addToSpaceTurn(-1);}
    }
    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }


    if (turnOver === 10){
        playfield.style.display = "none";
        win.style.display = "flex";
    }
}

const win = document.getElementById("win");
const textEventOneOne = document.getElementById("text-event-one-one");
const textEventTwoOne = document.getElementById("text-event-two-one");
const textEventThreeOne = document.getElementById("text-event-three-one");
const answerEvent1 = document.getElementById("answer-event1");
const perehod = document.getElementById("perehod");
const turn = document.getElementById("turn");
function eventOneOne(){
    eventOne.style.display ="none";
    textEventOneOne.style.display ="flex";
    answerEvent1.style.display ="flex";
    allFonEvents.style.display ="none";
     perehod.style.color = "blue";
serdukovfoto.style.display ="flex";
    turn.style.display ="flex";

    addToCorruption(45);
    addToIncome(40);
    addIncomeBlack();

     if(padvisers1.style.display === "flex"){
         padvisers3.style.display = "flex";
     }

    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }

    addToCheckPutin(10);
}
function eventOneTwo(){
    eventOne.style.display ="none";
    textEventTwoOne.style.display ="flex";
    answerEvent1.style.display ="flex";
    allFonEvents.style.display ="none";
    perehod.style.color = "black";
    serdukovfoto.style.display ="flex";
    turn.style.display ="flex";

    addToCorruption(35);
    addToIncome(20);
    addIncomeBlack();

    if(padvisers1.style.display === "flex"){
        padvisers4.style.display = "flex";
    }

    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }

    addToCheckPutin(10);
}


function eventOneThree(){
    eventOne.style.display ="none";
    textEventThreeOne.style.display ="flex";
    answerEvent1.style.display ="flex";
    allFonEvents.style.display ="none";
    perehod.style.color = "white";
    addToCorruption(40);
    kolokolcevfoto.style.display = "flex";
    serdukovfoto.style.display ="flex";
    turn.style.display ="flex";
    addIncomeBlack();

    if(padvisers1.style.display === "flex"){
        padvisers5.style.display = "flex";
    }

    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }

    addToCheckPutin(10);
}


const textEventOneTwo = document.getElementById("text-event-one-two");
const textEventTwoTwo = document.getElementById("text-event-two-two");
const textEventThreeTwo = document.getElementById("text-event-three-two");
function eventTwoOne(){
    eventTwo.style.display ="none";
    textEventOneTwo.style.display ="flex";
    answerEvent1.style.display ="flex";
    allFonEvents.style.display ="none";
    turn.style.display ="flex";

    addToInfluence(5);
    addToDissatisfaction(10);

    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }
}

function eventTwoTwo(){
    eventTwo.style.display ="none";
    textEventTwoTwo.style.display ="flex";
    answerEvent1.style.display ="flex";
    allFonEvents.style.display ="none";
    turn.style.display ="flex";

    addToMilitary(-5);

    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }

    addToCheckPutin(10);
}

function eventTwoThree(){
    eventTwo.style.display ="none";
    textEventThreeTwo.style.display ="flex";
    answerEvent1.style.display ="flex";
    allFonEvents.style.display ="none";
    turn.style.display ="flex";

    addToMoney(-200);
    addToMilitary(-5);
    addToDissatisfaction(-5);

    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }
}

const textEventOneThree = document.getElementById("text-event-one-three");
const textEventTwoThree = document.getElementById("text-event-two-three");
const textEventThreeThree = document.getElementById("text-event-three-three");
function eventThreeOne(){
    eventThree.style.display ="none";
    textEventOneThree.style.display ="flex";
    answerEvent1.style.display ="flex";
    allFonEvents.style.display ="none";
    turn.style.display ="flex";

    serdykovnorm.style.display ="none";
    serdykovvolmodym.style.display ="flex";

    addToInfluence(-5);

    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }
}

function eventThreeTwo(){
    eventThree.style.display ="none";
    textEventTwoThree.style.display ="flex";
    answerEvent1.style.display ="flex";
    allFonEvents.style.display ="none";
    turn.style.display ="flex";

    addToInfluence(5);
    addToDissatisfaction(5);

    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }
}

function eventThreeThree(){
    eventThree.style.display ="none";
    textEventThreeThree.style.display ="flex";
    answerEvent1.style.display ="flex";
    allFonEvents.style.display ="none";
    turn.style.display ="flex";
    gameOverCont.style.display = "flex";

    addToMoney(-100);
    addToInfluence(10);
    addToDissatisfaction(5);

    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }

    addToCheckPutin(10);
}

const textEventOneFour = document.getElementById("text-event-one-four");
const textEventTwoFour = document.getElementById("text-event-two-four");
function eventFourOne(){
    eventFour.style.display ="none";
    textEventOneFour.style.display ="flex";
    answerEvent1.style.display ="flex";
    allFonEvents.style.display ="none";
    turn.style.display ="flex";

    addToInfluence(5);
    addToDissatisfaction(10);
    addToMilitary(-5);

    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }

    addToCheckPutin(10);
}

function eventFourTwo(){
    eventFour.style.display ="none";
    textEventTwoFour.style.display ="flex";
    answerEvent1.style.display ="flex";
    allFonEvents.style.display ="none";
    turn.style.display ="flex";

    serdykovnorm.style.display ="none";
    serdykovvolmodym.style.display ="flex";

    addToInfluence(-5);

    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }
}

const textEventOneFive = document.getElementById("text-event-one-five");
const textEventTwoFive = document.getElementById("text-event-two-five");
function eventFiveOne(){
    eventFive.style.display ="none";
    textEventOneFive.style.display ="flex";
    answerEvent1.style.display ="flex";
    allFonEvents.style.display ="none";
    turn.style.display ="flex";

    addToInfluence(+5);

    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }

    addToCheckPutin(10);
}

function eventFiveTwo(){
    eventFive.style.display ="none";
    textEventTwoFive.style.display ="flex";
    answerEvent1.style.display ="flex";
    allFonEvents.style.display ="none";
    turn.style.display ="flex";

    serdykovnorm.style.display ="none";
    serdykovvolmodym.style.display ="flex";

    addToInfluence(-5);

    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }
}

const textEventOneSix = document.getElementById("text-event-one-six");
const textEventTwoSix = document.getElementById("text-event-two-six");
function eventSixOne(){
    eventSix.style.display ="none";
    textEventOneSix.style.display ="flex";
    answerEvent1.style.display ="flex";
    allFonEvents.style.display ="none";
    turn.style.display ="flex";

    addToInfluence(5);
    addToDissatisfaction(5);

    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }

    addToCheckPutin(10);
}

function eventSixTwo(){
    eventSix.style.display ="none";
    textEventTwoSix.style.display ="flex";
    answerEvent1.style.display ="flex";
    allFonEvents.style.display ="none";
    turn.style.display ="flex";

    serdykovnorm.style.display ="none";
    serdykovvolmodym.style.display ="flex";

    addToInfluence(-5);

    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }
}

const textEventOneSeven = document.getElementById("text-event-one-seven");
const textEventTwoSeven = document.getElementById("text-event-two-seven");
const textEventThreeSeven = document.getElementById("text-event-three-seven");
function eventSevenOne(){
    eventSeven.style.display ="none";
    textEventOneSeven.style.display ="flex";
    answerEvent1.style.display ="flex";
    allFonEvents.style.display ="none";
    turn.style.display ="flex";

    addToInfluence(5);
    addToDissatisfaction(5);

    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }
}

function eventSevenTwo(){
    eventSeven.style.display ="none";
    textEventTwoSeven.style.display ="flex";
    answerEvent1.style.display ="flex";
    allFonEvents.style.display ="none";
    turn.style.display ="flex";

    serdykovnorm.style.display ="none";
    serdykovvolmodym.style.display ="flex";

    addToInfluence(-5);

    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }

    addToCheckPutin(10);
}

function eventSevenThree(){
    eventSeven.style.display ="none";
    textEventThreeSeven.style.display ="flex";
    answerEvent1.style.display ="flex";
    allFonEvents.style.display ="none";
    turn.style.display ="flex";

    serdykovnorm.style.display ="none";
    serdykovvolmodym.style.display ="flex";

    addToMoney(-200);
    addToInfluence(-5);
    addToDissatisfaction(5);

    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }
}

const textEventOneEight = document.getElementById("text-event-one-eight");
const textEventTwoEight= document.getElementById("text-event-two-eight");
const textEventThreeEight = document.getElementById("text-event-three-eight");
const textEventFourEight = document.getElementById("text-event-four-eight");

const factory = document.getElementById("factory");
const berkyt = document.getElementById("berkyt");
const space = document.getElementById("space");
const IL76md90A = document.getElementById("IL-76md-90A");

const berkytkarta = document.getElementById("berkyt-karta");
const spacekarta = document.getElementById("space-karta");
const IL76md90Akarta = document.getElementById("IL-76md-90A-karta");

function eventEightOne(){
    eventEight.style.display ="none";
    textEventOneEight.style.display ="flex";
    answerEvent1.style.display ="flex";
    allFonEvents.style.display ="none";
    factory.style.display ="flex";
    berkyt.style.display ="flex";
    turn.style.display ="flex";

    addToMoney(-300);
    addToInfluence(5);

    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }

    addToCheckPutin(10);
}

function eventEightTwo(){
    eventEight.style.display ="none";
    textEventTwoEight.style.display ="flex";
    answerEvent1.style.display ="flex";
    allFonEvents.style.display ="none";
    factory.style.display ="flex";
    IL76md90A.style.display ="flex";
    turn.style.display ="flex";

    addToMoney(-300);
    addToInfluence(5);

    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }

    addToCheckPutin(10);
}

function eventEightThree(){
    eventEight.style.display ="none";
    textEventThreeEight.style.display ="flex";
    answerEvent1.style.display ="flex";
    allFonEvents.style.display ="none";
    factory.style.display ="flex";
    space.style.display ="flex";
    turn.style.display ="flex";

    addToMoney(-300);
    addToInfluence(5);

    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }

    addToCheckPutin(10);
}

function eventEightFour(){
    eventEight.style.display ="none";
    textEventFourEight.style.display ="flex";
    answerEvent1.style.display ="flex";
    allFonEvents.style.display ="none";
    turn.style.display ="flex";

    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }
}

const textEventOneNine = document.getElementById("text-event-one-nine");
const textEventTwoNine = document.getElementById("text-event-one-nine");
function eventNineOne(){
    eventNine.style.display ="none";
    textEventOneNine.style.display ="flex";
    answerEvent1.style.display ="flex";
    allFonEvents.style.display ="none";
    turn.style.display ="flex";

    addToMoney(-100);
    addToInfluence(5);
    addToCorruption(-5);
    addIncomeBlack();

    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }

    addToCheckPutin(10);
}

function eventNineTwo(){
    eventNine.style.display ="none";
    textEventTwoNine.style.display ="flex";
    answerEvent1.style.display ="flex";
    allFonEvents.style.display ="none";
    turn.style.display ="flex";

    serdykovnorm.style.display ="none";
    serdykovvolmodym.style.display ="flex";

    addToInfluence(-5);

    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }
}

const continue1 = document.getElementById("continue-1");
const karta = document.getElementById("karta-java");
const allFonEvents = document.getElementById("all-fon-events");
function continueEventClick(){
    answerEvent1.style.display ="none";
    allFonEvents.style.display ="none";
    karta.style.display ="flex";
    turn.style.display ="flex";

    if(space.style.display === "flex"){
    spacekarta.style.display = "flex";}

    if(berkyt.style.display === "flex"){
        berkytkarta.style.display = "flex";}

    if(IL76md90A.style.display === "flex"){
        IL76md90Akarta.style.display = "flex";}
}

const moneyElem = document.getElementById("money");
let money = 700;
function addToMoney(a){
    money = money + a;
    moneyElem.innerText = money;
}

const incomeBlackElem = document.getElementById("income-black");
let incomeBlack = -110;
function addIncomeBlack(){
    incomeBlack = income * (1+(corruption * 0.01));
    incomeBlackElem.innerText = incomeBlack;
}

function addToMoney1(){
    money = money + incomeBlack;
    moneyElem.innerText = money;
}


const incomeElem = document.getElementById("income");
let income = -100;
function addToIncome(a){
    income = income + a;
    incomeElem.innerText = income;
}

const influenceElem = document.getElementById("influence");
let influence = 5;
function addToInfluence(a){
    influence = influence + a;
    influenceElem.innerText = influence;
}

const militaryElem = document.getElementById("military");
let military = 10;
function addToMilitary(a){
    military = military + a;
    militaryElem.innerText = military;
}

const healthElem = document.getElementById("health");
let health = 80;
function addToHealth(a){
    health = health + a;
    healthElem.innerText = health;
}

const corruptionElem = document.getElementById("corruption");
let corruption = 10;
function addToCorruption(a){
    corruption = corruption + a;
    corruptionElem.innerText = corruption;
}

const dissatisfactionElem = document.getElementById("dissatisfaction");
let dissatisfaction = 69;
function addToDissatisfaction(a){
    dissatisfaction = dissatisfaction + a;
    dissatisfactionElem.innerText = dissatisfaction;
}

const oneActionElem = document.getElementById("one-action");
let action = 1;
function addToAction(a){
    action = action + a;
    oneActionElem.innerText = action;
}

const debt2xElem = document.getElementById("debt-2x");
let debt2x = 3;
function addToDebt2x(a){
    debt2x = debt2x + a;
    debt2xElem.innerText = debt2x;
}

const cancelAction = document.getElementById("cancel-action");
const cancel2x = document.getElementById("cancel-to-2x");
function TakeBebtClick(){
    addToMoney(200);
    addToInfluence(-15);
    addToAction(-1);
    cancelAction.style.display = "flex";

    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }

    cancel2x.style.display = "flex";
    if((debt2x = 2) || (debt2x = 1)){
        actionsIconsJava1.style.display = "none";
    }
}

function RaiseTaxClick(){
    addToIncome(15);
    addToDissatisfaction(10);
    addToAction(-1);
    cancelAction.style.display = "flex";
    addIncomeBlack();
    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }
}

function LetStealClick(){
    addToInfluence(5);
    addToCorruption(10);
    addToAction(-1);
    cancelAction.style.display = "flex";
    addIncomeBlack();
    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }
}

function ShowStrengthClick() {
    addToInfluence(5);
    addToMilitary(-10);
    addToAction(-1);
    cancelAction.style.display = "flex";
    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }
}

function IncreasedPropagandaClick(){
    addToMoney(-100);
    addToMilitary(5);
    addToAction(-1);
    cancelAction.style.display = "flex";

    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }
}

function RelaxInCountryClick(){
    addToHealth(10);
    addToAction(-1);
    cancelAction.style.display = "flex";
    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }
}

function ToLandClick(){
    addToInfluence(-5);
    addToMilitary(-5);
    addToCorruption(-10);
    addToAction(-1);
    cancelAction.style.display = "flex";
    addIncomeBlack();
    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }
}

function RepressionClick(){
    addToDissatisfaction(-10);
    addToMilitary(-5);
    addToAction(-1);
    cancelAction.style.display = "flex";
    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }
}

function LawClick(){
    addToDissatisfaction(-5);
    addToInfluence(-5);
    addToAction(-1);
    cancelAction.style.display = "flex";
    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }
}

function MeetingClick() {
    addToDissatisfaction(-50);
    addToHealth(-5);
    addToAction(-1);
    cancelAction.style.display = "flex";
    if((money < 1) || (dissatisfaction > 99) || (influence < 1) || (military < 0) || (health < 0)){
        playfield.style.display = "none";
        gameOverCont.style.display = "flex";
    }
}

const berkytTurnElem = document.getElementById("turn-factory-berkyt");
let berkytTurn = 12;
function addToTurnBerkyt(a){
    berkytTurn = berkytTurn + a;
    berkytTurnElem.innerText = berkytTurn;
}

const spaceTurnElem = document.getElementById("turn-factory-space");
let spaceTurn = 12;
function addToSpaceTurn(a){
    spaceTurn = spaceTurn + a;
    spaceTurnElem.innerText = spaceTurn;
}

const IL76md90ATurnElem = document.getElementById("turn-factory-IL-76md-90A");
let IL76md90ATurn = 12;
function addToIL76md90ATurn(a){
    IL76md90ATurn = IL76md90ATurn + a;
    IL76md90ATurnElem.innerText = IL76md90ATurn;
}

const gameOverCont = document.getElementById("game-over-cont");
const gameOverDissatisfaction = document.getElementById("game-over-dissatisfaction");
const gameOverMoney = document.getElementById("game-over-money");
const gameOverStatys = document.getElementById("game-over-statys");

function gameOverContClick(){
    if(dissatisfaction > 99){
        gameOverCont.style.display = "none";
    gameOverDissatisfaction.style.display = "flex";
    }

    if(money < 0){
        gameOverCont.style.display = "none";
        gameOverMoney.style.display = "flex";
    }

    if(influence< 0){
        gameOverCont.style.display = "none";
        gameOverStatys.style.display = "flex";
    }

    if(military < 1){
        gameOverCont.style.display = "none";
        gameOverStatys.style.display = "flex";
    }
}

const gameDeath = document.getElementById("game-death");
function prayClick(){
    gameOverDissatisfaction.style.display = "none";
    gameOverMoney.style.display = "none";
    gameOverStatys.style.display = "none";
    gameDeath.style.display = "flex";
}

const death = document.getElementById("death");
function drinkPoisonClick() {
    gameOverDissatisfaction.style.display = "none";
    gameOverMoney.style.display = "none";
    gameOverStatys.style.display = "none";
    death.style.display = "flex";
}

function drinkPoisonTwoClick(){
    death.style.display = "flex";
    gameOverDissatisfaction.style.display = "none";
    gameOverMoney.style.display = "none";
    gameOverStatys.style.display = "none";
}

const gameDeathFinish = document.getElementById("game-death-finish");
function prayTwoClick() {
    gameDeathFinish.style.display = "flex";
    gameDeath.style.display = "none";
}

function GameOverClick() {
    death.style.display = "flex";
    gameDeathFinish.style.display = "none";
}

const checkPutinElem = document.getElementById("check-putin");
let checkPutin = 12;
function addToCheckPutin(a){
    checkPutin = checkPutin + a;
    checkPutinElem.innerText = checkPutin;
}
