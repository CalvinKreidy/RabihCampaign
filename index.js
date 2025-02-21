let BoxMenu = document.getElementById('BoxMenu');
let BurgerBar = document.getElementById('BurgerBar');
let DivBoxMenu1 = document.getElementById('DivBoxMenu1');
let DivBoxMenu2 = document.getElementById('DivBoxMenu2');
let DivBoxMenu3 = document.getElementById('DivBoxMenu3');
let DivBoxMenu4 = document.getElementById('DivBoxMenu4');
let DivBoxMenu5 = document.getElementById('DivBoxMenu5');
let body = document.getElementById("body");
let MoreLessCancerAwareness = document.getElementById('MoreLessCancerAwareness');
let TextDisplayCancer = document.getElementById('TextDisplayCancer');
let MoreCancerAwareness = document.getElementById('MoreCancerAwareness');
let AddDeduct1 = document.getElementById('AddDeduct1');
let DivStepsUncleHealth = document.getElementById("DivStepsUncleHealth");
let DivAddDeductActualProblem = document.getElementById('DivAddDeductActualProblem');
let DivAddDeductActualSolution = document.getElementById('DivAddDeductActualSolution');
let GeneralProgress = document.getElementById("GeneralProgress");
let DivAddDeductG = document.getElementsByClassName("DivAddDeductG")[0];
let TitleSectionCancerAwareness = document.getElementById('TitleSectionCancerAwareness');

GeneralProgress.style.overflowX = "hidden";
DivStepsUncleHealth.style.overflowX = "hidden";

DivAddDeductActualProblem.addEventListener('click', ()=>{
    let TextAddDeductActualProblem = document.getElementById('TextAddDeductActualProblem');
    let ElementActualProblem2 = document.getElementById('ElementActualProblem2');
    let AddDeductActualProblem = document.getElementById('AddDeductActualProblem');
    let InformationBoxActualProblem = document.getElementById("InformationBoxActualProblem");
    let Show = TextAddDeductActualProblem.innerHTML.includes("Pokaż więcej");
    if(Show == true) {
        TextAddDeductActualProblem.innerHTML = "Pokaż mniej";
        ElementActualProblem2.style.display = "grid";
        AddDeductActualProblem.src = "./Assets/minus.png";
        InformationBoxActualProblem.style.gridTemplateRows = "25px 50px 1px 125px 190px 55px";

    }
    else {
        TextAddDeductActualProblem.innerHTML = "Pokaż więcej";
        ElementActualProblem2.style.display = "none";
        AddDeductActualProblem.src = "./Assets/add.png";
        InformationBoxActualProblem.style.gridTemplateRows = "25px 50px 1px 125px 55px";
        
    }
})

MoreLessCancerAwareness.addEventListener('click', ()=>{
    let Show = MoreCancerAwareness.innerHTML.includes("Pokaż więcej");
    if (Show == true) {
        MoreCancerAwareness.innerHTML = "Pokaż mniej";
        TextDisplayCancer.style.display = "block";
        AddDeduct1.src = "./Assets/minus.png";
    }
    else {
        MoreCancerAwareness.innerHTML = "Pokaż więcej";
        TextDisplayCancer.style.display = "none";
        AddDeduct1.src = "./Assets/add.png";
        TitleSectionCancerAwareness.scrollIntoView();
    }
})

body.style.overflowX = "hidden";

BurgerBar.addEventListener('click', () => {
    let x = BurgerBar.src.includes("burger-bar.png");
    if (x == true) {
        BurgerBar.src = "./Assets/close.png";
        BoxMenu.style.display = "grid";
        BoxMenu.style.gridTemplateColumns = "87% 10%";
        BoxMenu.style.gridTemplateRows = "20% 20% 20% 20% 20%";
        BoxMenu.style.width = "92%";
        BoxMenu.style.height = "280px";
        BoxMenu.style.borderRadius = "8px";
        DivBoxMenu1.style.display = "block";
        DivBoxMenu2.style.display = "block";
        DivBoxMenu3.style.display = "block";
        DivBoxMenu4.style.display = "block";
        DivBoxMenu5.style.display = "block";
    }
    if (x == false) {
        BurgerBar.src = "./Assets/burger-bar.png";
        BoxMenu.style.display = "flex";
        BoxMenu.style.justifyContent = 'center';
        BoxMenu.style.alignItems = 'center';
        BoxMenu.style.width = "55px";
        BoxMenu.style.height = "55px";
        BoxMenu.style.borderRadius = "50%";
        DivBoxMenu1.style.display = "none";
        DivBoxMenu2.style.display = "none";
        DivBoxMenu3.style.display = "none";
        DivBoxMenu4.style.display = "none";
        DivBoxMenu5.style.display = "none";
    }
});

window.addEventListener('scroll', () => {
        BurgerBar.src = "./Assets/burger-bar.png";
        DivBoxMenu1.style.display = "none";
        DivBoxMenu2.style.display = "none";
        DivBoxMenu3.style.display = "none";
        DivBoxMenu4.style.display = "none";
        DivBoxMenu5.style.display = "none";
        BoxMenu.style.width = "55px";
        BoxMenu.style.height = "55px";
        BoxMenu.style.borderRadius = "50%";
        BoxMenu.style.display = "flex";
        BoxMenu.style.justifyContent = 'center';
        BoxMenu.style.alignItems = 'center';
        
})

DivAddDeductActualSolution.addEventListener('click', ()=>{
    let TextAddDeductActualSolution = document.getElementById('TextAddDeductActualSolution');
    let ElementActualSolution2 = document.getElementById('ElementActualSolution2');
    let ElementActualSolution3 = document.getElementById('ElementActualSolution3');
    let AddDeductActualSolution = document.getElementById('AddDeductActualSolution');
    let InformationBoxActualSolution = document.getElementById("InformationBoxActualSolution");
    let Show = TextAddDeductActualSolution.innerHTML.includes("Pokaż więcej");
    if(Show == true) {
        TextAddDeductActualSolution.innerHTML = "Pokaż mniej";
        ElementActualSolution2.style.display = "grid";
        ElementActualSolution3.style.display = "grid";
        AddDeductActualSolution.src = "./Assets/minus.png";
        InformationBoxActualSolution.style.gridTemplateRows = "25px 50px 1px 270px 125px 275px 55px";
    }
    else {
        TextAddDeductActualSolution.innerHTML = "Pokaż więcej";
        ElementActualSolution2.style.display = "none";
        ElementActualSolution3.style.display = "none";
        AddDeductActualSolution.src = "./Assets/add.png";
        InformationBoxActualSolution.style.gridTemplateRows = "25px 50px 1px 270px 55px";
    }
})

DivAddDeductG.addEventListener('click', ()=>{
    let TextAddDeductG = document.getElementsByClassName('TextAddDeductG')[0];
    let ImageAddDeductG = document.getElementsByClassName("ImageAddDeductG")[0];
    let DeductAdd1 = document.getElementById("DeductAdd1");
    let DeductAdd2 = document.getElementById("DeductAdd2");
    let DeductAdd3 = document.getElementById("DeductAdd3");
    let DeductAdd4 = document.getElementById("DeductAdd4");
    let Show = TextAddDeductG.innerHTML.includes("Pokaż więcej");
    
    if(Show == true) {
        TextAddDeductG.innerHTML = "Pokaż mniej";
        ImageAddDeductG.src = "./Assets/minus.png";
        DeductAdd1.style.display = "flex";
        DeductAdd2.style.display = "flex";
        DeductAdd3.style.display = "flex";
        DeductAdd4.style.display = "flex";

        
    }
    else {
        TextAddDeductG.innerHTML = "Pokaż więcej";
        ImageAddDeductG.src = "./Assets/add.png";
        DeductAdd1.style.display = "none";
        DeductAdd2.style.display = "none";
        DeductAdd3.style.display = "none";
        DeductAdd4.style.display = "none";
    }
})

let TextBoxMenu3 = document.getElementById('TextBoxMenu3');
let DivUncleHealth = document.getElementById('DivUncleHealth');
let TextBoxMenu4 = document.getElementById('TextBoxMenu4');
let DivSectionFundAllocation = document.getElementById('DivSectionFundAllocation');
let FixedToFix2 = document.getElementById('FixedToFix2');
let DivContactMe = document.getElementById('DivContactMe');
let TextKontactOrganizator = document.getElementById('TextKontactOrganizator');

TextBoxMenu3.addEventListener('click', ()=>{
    DivUncleHealth.scrollIntoView({behavior: "smooth", block: "start"
    })
})

TextBoxMenu4.addEventListener('click', ()=>{
    DivSectionFundAllocation.scrollIntoView({behavior: "smooth", block: "start"
    })
})
FixedToFix2.addEventListener('click', ()=>{
    DivContactMe.scrollIntoView({behavior: "smooth", block: "start"
    })
})

TextKontactOrganizator.addEventListener('click', ()=>{
    DivContactMe.scrollIntoView({behavior: "smooth", block: "start"
    })
})

setInterval(()=>{if (window.scrollY > 300) {
        let DivUpwards = document.getElementById('DivUpwards');
        DivUpwards.style.display = "flex";
        DivUpwards.addEventListener('click', ()=>{
            body.scrollIntoView({behavior:"smooth"})
        })
    }
    else {
        DivUpwards.style.display = "none";
    }
}, 100)


let POP = document.getElementById('POP');
let TEXTPOP = document.getElementById('TEXTPOP');
let IMAGEPOP = document.getElementById('IMAGEPOP');
let x = 1;

POP.style.display = 'none';
setInterval(() => {
    if (window.scrollY > 600) {
        if (x == 1) {
            POP.style.display = "grid";
            setTimeout(() => {
                POP.classList.add('FirstR'); 
                TEXTPOP.classList.add('SecondR');
                IMAGEPOP.classList.add('ThirdR');
                x = 0;
            }, 5);
        }}
}, 1);

IMAGEPOP.addEventListener('click', ()=>{
    POP.style.display = 'none';
})

let RabihImage1 = document.getElementById("RabihImage1");
let VideoYT = document.getElementById('VideoYT');

body.addEventListener('scroll', ()=>{ 
    RabihImage1.style.display = 'none';
    VideoYT.style.display = 'block';
})
   
