const svg_main_file1=document.getElementById("svg-circ-1");
const svg_main_file2=document.getElementById("svg-circ-2");
const svg_main_file3=document.getElementById("svg-circ-3");
const svg_main_file4=document.getElementById("svg-circ-4");
const svg_main_file5=document.getElementById("svg-circ-5");
const svg_main_file6=document.getElementById("svg-circ-6");
const svg_main_file7=document.getElementById("svg-circ-7");
const svg_main_file8=document.getElementById("svg-circ-8");
const div_about=document.querySelector(".about");
const button_pokaz_projekty=document.getElementById("id-pokaz-projekty");
const foreign_button_pokaz=document.getElementById("button-pokaz-projekty");
const svg_line1=document.getElementById("svg-line1");
const svg_line2=document.getElementById("svg-line2");
const svg_line3=document.getElementById("svg-line3");
const svg_line4=document.getElementById("svg-line4");
const svg_line5=document.getElementById("svg-line5");
const div_projects=document.getElementById("projects");
const div_pokaz_projekty_all=document.querySelector(".pokaz-projekty-all");
const div_ico_arrow1=document.getElementById("id-left-arrow");
const div_ico_arrow2=document.getElementById("id-right-arrow");
const ico_arrow1=document.querySelector(".icofont-arrow-left");
const ico_arrow2=document.querySelector(".icofont-arrow-right");
const tittle_of_project1=document.querySelector(".tittle.no1");
const tittle_of_project2=document.querySelector(".tittle.no2");
const tittle_of_project3=document.querySelector(".tittle.no3");
const tittle_of_project4=document.querySelector(".tittle.no4");
const tittle_of_project5=document.querySelector(".tittle.no5");

const img_img1=document.querySelector(".class-of-image1");
const img_img2=document.querySelector(".class-of-image2");
const img_img3=document.querySelector(".class-of-image3");
const img_img4=document.querySelector(".class-of-image4");
const img_img5=document.querySelector(".class-of-image5");
const img_img6=document.querySelector(".class-of-image6");
const img_img7=document.querySelector(".class-of-image7");
const img_img8=document.querySelector(".class-of-image8");
const img_img9=document.querySelector(".class-of-image9");
const img_img10=document.querySelector(".class-of-image10");

const h1_tittle1=document.getElementById("id-tittle1");
const h1_tittle2=document.getElementById("id-tittle2");
const h1_tittle3=document.getElementById("id-tittle3");
const h1_tittle4=document.getElementById("id-tittle4");
const h1_tittle5=document.getElementById("id-tittle5");
const i_arrow_left=document.getElementById("i-arrow-left");
const i_arrow_right=document.getElementById("i-arrow-right");
let border_percentage=document.querySelectorAll(".my-skill-border");
let over_border=document.querySelectorAll(".over-border-div");
let percentage=document.querySelectorAll(".percentage");
let skill_banner=document.querySelectorAll(".skills-banner-letter");
const svg_pokaz_projekty=document.querySelector(".svg-pokaz-projekty");
const pokaz_projekty_all=document.querySelector(".pokaz-projekty-all");
const more_about=document.querySelector(".more-about");
const only_for_L=document.querySelector(".only-for-L");
let letters=document.querySelectorAll(".letter");
let letters_web=document.querySelectorAll(".letter.web");


const tl=new TimelineMax();
const tl_repeat=new TimelineMax({repeat:-1});
const tm= TweenMax;



const tl1=new TimelineMax();
const tl2=new TimelineMax();
const tl3=new TimelineMax();
const tl4=new TimelineMax();
const tl5=new TimelineMax();
const tl6=new TimelineMax();
const tl7=new TimelineMax();
const tl8=new TimelineMax();
let circle1=tl1.to(svg_main_file1,2,{rotate:370,repeat:-1, ease: Power0.easeNone});
let circle2=tl2.to(svg_main_file2,2.1,{rotate:-600,repeat:-1,ease: Power0.easeNone},"-=1");
let circle3=tl3.to(svg_main_file3,2.5,{rotate:370,repeat:-1,ease: Power0.easeNone},"-=1");
let circle4=tl4.to(svg_main_file4,2.25,{rotate:-660,repeat:-1,ease: Power0.easeNone},"-=1.7");
let circle5=tl5.to(svg_main_file5,2.65,{rotate:370,repeat:-1,ease: Power0.easeNone},"-=0.5");
let circle6=tl6.to(svg_main_file6,2.3,{rotate:370,repeat:-1,ease: Power0.easeNone},"-=0.5");
let circle7=tl7.to(svg_main_file7,2.1,{rotate:370,repeat:-1,ease: Power0.easeNone},"-=0.5");
let circle8=tl8.to(svg_main_file8,1.9,{rotate:370,repeat:-1,ease: Power0.easeNone},"-=0.5");




let controller= new ScrollMagic.Controller();

$('.scroll').each(function(){
  let firstScene = new ScrollMagic.Scene({
    triggerElement: this.children[0],
    triggerHook: 0.9
  })
  .setClassToggle(this,'fade-in')
  .addTo(controller)
});

let secoundScene= new ScrollMagic.Scene({
  triggerElement:"#id-svg-pokaz-projekty",
  triggerHook:0.9,
  reverse:false
})
.setClassToggle('#id-svg-pokaz-projekty','fade-in')
.addTo(controller);

let thirdScene= new ScrollMagic.Scene({
  triggerElement:"#id-div-skills-banner",
  triggerHook:0.55
})
.setTween(banner_glowing)
.addTo(controller);

let fourthScene= new ScrollMagic.Scene({
  triggerElement:"#id-div-skills-border",
  triggerHook:0.55
})
.setTween(border_sliding)
.addTo(controller);

let fifthScene= new ScrollMagic.Scene({
  triggerElement:"#id-contact-box",
  triggerHook:0.55
})
.setClassToggle('#id-contact-box','fade-in')
.addTo(controller);

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  var $result_pos = $("#result-pos");
  var $result_neg= $("#result-neg");
  var email = $("#id-mail").val();
  $result_pos.text("");
  $result_neg.text("");

  if (validateEmail(email)) {
    $result_pos.text(" I will answer the E-mail "+email+" as soon as possible");
    $result_pos.css("color", "green");
  } else {
    $result_neg.text("'"+email + "'"+ " the format provided is not valid");
    $result_neg.css("color", "red");
  }
  return false;
}

$("#validate").on("click", validate);

document.getElementById("id-name").onkeypress = function(e) {
    var chr = String.fromCharCode(e.which);
    if ("qwertyuiopasdfghjklzxcvbnmąęłóśżźćńQWERTYUIOPASDFGHJKLZXCVBNMĄĘÓŚŁŻŹĆŃ".indexOf(chr) < 0)
        return false;
};


function changing_color_of_about(){
  tl_color=new TimelineMax({repeat:-1, repeatDelay:10});
  tl_color.to(letters ,1,{delay:10,color:"cyan"})
  tl_color.to(letters ,1,{delay:10,color:"#cccccc"})
  tl_color.to(letters_web ,1,{color:"white"},"-=12")
  tl_color.to(letters_web ,1,{delay:10,color:"#808080"},"-=10")
  tl_color.to(letters_web ,1,{delay:20,color:"purple"})
  tl_color.to(letters_web ,1,{delay:10,color:"#808080"})
}
function banner_glowing(){
  tl_glowing=new TimelineMax();
  tl_glowingOP=new TimelineMax();
  tl_glowingOP.to('#id-div-skills-banner',1,{y:0,opacity:1});
  tl_glowing.to(skill_banner[1],0,{delay:2,opacity:0});
  tl_glowing.to(skill_banner[1],0,{opacity:1},"+=1");
  tl_glowing.to(skill_banner[1],0,{opacity:0},"+=0.3");
  tl_glowing.to(skill_banner[1],0,{opacity:1},"+=0.3");
  tl_glowing.to(skill_banner[1],0,{opacity:0},"+=0.2");
  tl_glowing.to(skill_banner[1],0,{opacity:1},"+=0.2");
  tl_glowing.to(skill_banner[1],0,{opacity:0},"+=0.1");
  tl_glowing.to(skill_banner[1],0,{opacity:1},"+=0.1");
  tl_glowing.to(skill_banner[1],0,{opacity:0},"+=0.05");
  tl_glowing.to(skill_banner[1],0,{opacity:1},"+=0.05");

  tl_glowing.to(skill_banner[3],0,{opacity:0},"-=2.1");
  tl_glowing.to(skill_banner[3],0,{opacity:1},"-=1.3");
  tl_glowing.to(skill_banner[3],0,{opacity:0},"-=0.8");
  tl_glowing.to(skill_banner[3],0,{opacity:1},"-=0.5");
  tl_glowing.to(skill_banner[3],0,{opacity:0},"-=0.3");
  tl_glowing.to(skill_banner[3],0,{opacity:1},"-=0.1");
  tl_glowing.to(skill_banner[3],0,{opacity:0});
  tl_glowing.to(skill_banner[3],0,{opacity:1},"+=0.1");
  tl_glowing.to(skill_banner[3],0,{opacity:0},"+=0.5");
  tl_glowing.to(skill_banner[3],0,{opacity:1},"=+0.5");

  tl_glowing.to(skill_banner[5],0,{opacity:0},"-=2.3");
  tl_glowing.to(skill_banner[5],0,{opacity:1},"-=1.3");
  tl_glowing.to(skill_banner[5],0,{opacity:0},"-=0.8");
  tl_glowing.to(skill_banner[5],0,{opacity:1},"-=0.5");
  tl_glowing.to(skill_banner[5],0,{opacity:0},"-=0.3");
  tl_glowing.to(skill_banner[5],0,{opacity:1},"-=0.1");
  tl_glowing.to(skill_banner[5],0,{opacity:0});
  tl_glowing.to(skill_banner[5],0,{opacity:1},"+=0.1");
  tl_glowing.to(skill_banner[5],0,{opacity:0},"+=0.05");
  tl_glowing.to(skill_banner[5],0,{opacity:1},"+=0.05");

  tl_glowing.to(skill_banner[2],0,{opacity:0},"-=2.3");
  tl_glowing.to(skill_banner[2],0,{opacity:1},"-=1.3");
  tl_glowing.to(skill_banner[2],0,{opacity:0},"-=0.8");
  tl_glowing.to(skill_banner[2],0,{opacity:1},"-=0.5");
  tl_glowing.to(skill_banner[2],0,{opacity:0},"-=0.3");
  tl_glowing.to(skill_banner[2],0,{opacity:1},"-=0.1");
  tl_glowing.to(skill_banner[2],0,{opacity:0});
  tl_glowing.to(skill_banner[2],0,{opacity:1},"+=0.1");
  tl_glowing.to(skill_banner[2],0,{opacity:0},"+=0.05");
  tl_glowing.to(skill_banner[2],0,{opacity:1},"+=0.05");
  tl_glowing.to(only_for_L,0.7,{delay:2,rotate:-190},"+=1");
  tl_glowing.to(only_for_L,0.7,{x:-25},"-=0.75");
  tl_glowing.to(only_for_L,0.7,{y:35},"-=0.7");
  tl_glowing.to(only_for_L,0.9,{rotate:-120,x:-29,y:28},"-=0.1");
  tl_glowing.to(only_for_L,1.1,{rotate:-160,x:-27,y:30});
  tl_glowing.to(only_for_L,1.3,{rotate:-140,x:-25,y:28},"-=0.1");
  tl_glowing.to(only_for_L,1.3,{rotate:-150,x:-25,y:28});

}


function border_sliding(){
  const bord_slid_tl=new TimelineMax();
  const percentage_tl=new TimelineMax();
  tl.addLabel("sliding");
  TweenMax.to(border_percentage[0],0,{width:"80%"})
  TweenMax.to(border_percentage[1],0,{width:"90%"})
  TweenMax.to(border_percentage[2],0,{width:"90%"})
  TweenMax.to(border_percentage[3],0,{width:"70%"})
  TweenMax.to(border_percentage[6],0,{width:"40%"})
  bord_slid_tl.to(border_percentage[0],2,{transformOrigin:"left",scaleX:1},"sliding")
  bord_slid_tl.fromTo(over_border[0],1.6,{x:-70},{x:0,opacity:1,ease: Elastic.easeOut.config(0.5, 0.3)},"-=1")
  bord_slid_tl.to(border_percentage[1],2,{transformOrigin:"left",scaleX:1},"sliding")
  bord_slid_tl.fromTo(over_border[1],1.8,{x:-70},{x:0,opacity:1,ease: Elastic.easeOut.config(0.5, 0.3)},"-=1.6")
  bord_slid_tl.to(border_percentage[2],2,{transformOrigin:"left",scaleX:1},"sliding")
  bord_slid_tl.fromTo(over_border[2],1.8,{x:-70},{x:0,opacity:1,ease: Elastic.easeOut.config(0.5, 0.3)},"-=1.8")
  bord_slid_tl.to(border_percentage[3],2,{transformOrigin:"left",scaleX:1},"sliding")
  bord_slid_tl.fromTo(over_border[3],1.4,{x:-70},{x:0,opacity:1,ease: Elastic.easeOut.config(0.5, 0.3)},"-=1.8")
  bord_slid_tl.to(border_percentage[4],2,{transformOrigin:"left",scaleX:1},"sliding")
  bord_slid_tl.fromTo(over_border[4],2,{x:-70},{x:0,opacity:1,ease: Elastic.easeOut.config(0.5, 0.3)},"-=1.8")
  bord_slid_tl.to(border_percentage[5],2,{transformOrigin:"left",scaleX:1},"sliding")
  bord_slid_tl.fromTo(over_border[5],2,{x:-70},{x:0,opacity:1,ease: Elastic.easeOut.config(0.5, 0.3)},"-=2")
  bord_slid_tl.to(border_percentage[6],2,{transformOrigin:"left",scaleX:1},"sliding")
  bord_slid_tl.fromTo(over_border[6],2,{x:-70},{x:0,opacity:1,ease: Elastic.easeOut.config(0.5, 0.3)},"-=2")

  percentage_tl.fromTo(percentage[0],2,{color:"hsla(180,100%,50%,0.8)",y:15},{delay:1.85,opacity:1,color:"#bfff00",y:39})
  percentage_tl.fromTo(percentage[1],2,{color:"hsla(180,100%,50%,0.9)",y:15},{opacity:1,color:"#5eff00",y:39},"-=1.65")
  percentage_tl.fromTo(percentage[2],2,{color:"hsla(180,100%,50%,0.9)",y:15},{opacity:1,color:"#5eff00",y:39},"-=1.65")
  percentage_tl.fromTo(percentage[3],2,{color:"hsla(180,100%,50%,0.7)",y:15},{opacity:1,color:"#bfff00",y:39},"-=1.65")
  percentage_tl.fromTo(percentage[4],2,{color:"hsla(180,100%,50%,1)",y:15},{opacity:1,color:"#2bff00",y:39},"-=1.65")
  percentage_tl.fromTo(percentage[5],2,{color:"hsla(180,100%,50%,1)",y:15},{opacity:1,color:"#2bff00",y:39},"-=1.65")
  percentage_tl.fromTo(percentage[6],2,{color:"hsla(180,100%,50%,0.4)",y:15},{opacity:1,color:"#ff6f00",y:39},"-=1.65")
}

function pause_rotating(){
    circle1.pause();
    circle2.pause();
    circle3.pause();
    circle4.pause();
    circle5.pause();
    circle6.pause();
    circle7.pause();
    circle8.pause();
}

function resume_rotating(){
  const tl1=new TimelineMax();
  const tl2=new TimelineMax();
  const tl3=new TimelineMax();
  const tl4=new TimelineMax();
  const tl5=new TimelineMax();
  const tl6=new TimelineMax();
  const tl7=new TimelineMax();
  const tl8=new TimelineMax();
  let circle1=tl1.to(svg_main_file1,2,{rotate:370,repeat:-1, ease: Power0.easeNone});
  let circle2=tl2.to(svg_main_file2,2.1,{rotate:-600,repeat:-1,ease: Power0.easeNone},"-=1");
  let circle3=tl3.to(svg_main_file3,2.5,{rotate:370,repeat:-1,ease: Power0.easeNone},"-=1");
  let circle4=tl4.to(svg_main_file4,2.25,{rotate:-660,repeat:-1,ease: Power0.easeNone},"-=1.7");
  let circle5=tl5.to(svg_main_file5,2.65,{rotate:370,repeat:-1,ease: Power0.easeNone},"-=0.5");
  let circle6=tl6.to(svg_main_file6,2.3,{rotate:370,repeat:-1,ease: Power0.easeNone},"-=0.5");
  let circle7=tl7.to(svg_main_file7,2.1,{rotate:370,repeat:-1,ease: Power0.easeNone},"-=0.5");
  let circle8=tl8.to(svg_main_file8,1.9,{rotate:370,repeat:-1,ease: Power0.easeNone},"-=0.5");
}


function scaling_circle(){
  tl_svg=new TimelineMax({repeat:-1, repeatDelay:3});
  tl_svg.to(svg_main_file1,1.5,{scale:0.88,stroke:"white"});
  tl_svg.to(svg_main_file2,1.5,{scale:1.11,stroke:"cyan"},"-=1.5");
  tl_svg.to(svg_main_file3,1.5,{scale:1, stroke:"white"},"-=1.5");
  tl_svg.to(svg_main_file4,1.5,{scale:0.85,stroke:"cyan"},"-=1.5");
  tl_svg.to(svg_main_file5,1.5,{scale:1.2,stroke:"white"},"-=1.5");


  tl_svg.to(svg_main_file1,1.5,{delay:6,scale:1, stroke:"white"});
  tl_svg.to(svg_main_file2,1.5,{scale:1},"-=1.5");
  tl_svg.to(svg_main_file3,1.5,{scale:1, stroke:"cyan"},"-=1.5");
  tl_svg.to(svg_main_file4,1.5,{scale:1},"-=1.5");
  tl_svg.to(svg_main_file5,1.5,{scale:1,stroke:"white"},"-=1.5");
  tl_svg.to(svg_main_file6,1.5,{opacity:1,scale:1,stroke:"cyan",opacity:1},"-=1.5");
  tl_svg.to(svg_main_file7,1.5,{opacity:1,scale:1,stroke:"white",opacity:1},"-=1.5");
  tl_svg.to(svg_main_file8,1.5,{opacity:1,scale:1,stroke:"cyan",opacity:1},"-=1.5");


  tl_svg.to(svg_main_file1,1.5,{delay:6,scale:0.75, stroke:"#3198d3"});
  tl_svg.to(svg_main_file2,1.5,{scale:1, stroke:"#3198d3"},"-=1.5");
  tl_svg.to(svg_main_file3,1.5,{scale:1.27, stroke:"#3198d3"},"-=1.5");
  tl_svg.to(svg_main_file4,1.5,{scale:1,stroke:"white"},"-=1.5");
  tl_svg.to(svg_main_file5,1.5,{scale:1,stroke:"#3198d3"},"-=1.5");
  tl_svg.to(svg_main_file6,1.5,{scale:1,stroke:"white"},"-=1.5");
  tl_svg.to(svg_main_file7,1.5,{scale:1,stroke:"white"},"-=1.5");
  tl_svg.to(svg_main_file8,1.5,{scale:1,stroke:"white"},"-=1.5");

  tl_svg.to(svg_main_file1,1.5,{delay:6,scale:1, stroke:"#3198d3"});
  tl_svg.to(svg_main_file2,1.5,{scale:0.64, stroke:"#3198d3"},"-=1.5");
  tl_svg.to(svg_main_file3,1.5,{scale:1.12, stroke:"#fff"},"-=1.5");
  tl_svg.to(svg_main_file4,1.5,{scale:1, stroke:"#fff"},"-=1.5");
  tl_svg.to(svg_main_file5,1.5,{scale:1.33, stroke:"#3198d3"},"-=1.5");
  tl_svg.to(svg_main_file6,1.5,{scale:1, stroke:"#fff"},"-=1.5");
  tl_svg.to(svg_main_file7,1.5,{scale:1, stroke:"#3198d3",opacity:1},"-=1.5");
  tl_svg.to(svg_main_file8,1.5,{scale:1, stroke:"#fff"},"-=1.5");

  tl_svg.to(svg_main_file1,1.5,{delay:6,scale:0.65, stroke:"white"});
  tl_svg.to(svg_main_file2,1.5,{scale:1.10},"-=1.5");
  tl_svg.to(svg_main_file3,1.5,{scale:1, stroke:"white"},"-=1.5");
  tl_svg.to(svg_main_file4,1.5,{scale:1.3},"-=1.5");
  tl_svg.to(svg_main_file5,1.5,{scale:1,stroke:"white"},"-=1.5");
  tl_svg.to(svg_main_file6,1.5,{scale:1,stroke:"white",opacity:0},"-=1.5");
  tl_svg.to(svg_main_file7,1.5,{scale:1,stroke:"#3198d3"},"-=1.5");
  tl_svg.to(svg_main_file8,1.5,{scale:1,stroke:"white",opacity:0},"-=1.5");

  tl_svg.to(svg_main_file1,1.5,{delay:6,scale:1, stroke:"white"});
  tl_svg.to(svg_main_file2,1.5,{scale:1},"-=1.5");
  tl_svg.to(svg_main_file3,1.5,{scale:1, stroke:"white"},"-=1.5");
  tl_svg.to(svg_main_file4,1.5,{scale:1},"-=1.5");
  tl_svg.to(svg_main_file5,1.5,{scale:1,stroke:"#3198d3"},"-=1.5");
  tl_svg.to(svg_main_file6,1.5,{scale:1,stroke:"white"},"-=1.5");
  tl_svg.to(svg_main_file7,1.5,{scale:1,stroke:"white"},"-=1.5");
  tl_svg.to(svg_main_file8,1.5,{scale:1,stroke:"white",opacity:1},"-=1.5");

  tl_svg.to(svg_main_file1,1.5,{delay:6,scale:0.75, stroke:"white"});
  tl_svg.to(svg_main_file2,1.5,{scale:1},"-=1.5");
  tl_svg.to(svg_main_file3,1.5,{scale:1.3, stroke:"white"},"-=1.5");
  tl_svg.to(svg_main_file4,1.5,{scale:0.75},"-=1.5");
  tl_svg.to(svg_main_file5,1.5,{scale:1.1,stroke:"white"},"-=1.5");
  tl_svg.to(svg_main_file6,1.5,{scale:1.1,stroke:"white"},"-=1.5");
  tl_svg.to(svg_main_file7,1.5,{scale:1.1,stroke:"white"},"-=1.5");
  tl_svg.to(svg_main_file8,1.5,{scale:1.1,stroke:"white"},"-=1.5");

  tl_svg.to(svg_main_file1,1.5,{delay:6,scale:1, stroke:"white"});
  tl_svg.to(svg_main_file2,1.5,{scale:1},"-=1.5");
  tl_svg.to(svg_main_file3,1.5,{scale:1, stroke:"white"},"-=1.5");
  tl_svg.to(svg_main_file4,1.5,{scale:1},"-=1.5");
  tl_svg.to(svg_main_file5,1.5,{scale:1,stroke:"white"},"-=1.5");
  tl_svg.to(svg_main_file6,1.5,{scale:1,stroke:"white",opacity:0},"-=1.5");
  tl_svg.to(svg_main_file7,1.5,{scale:1,stroke:"white",opacity:0},"-=1.5");
  tl_svg.to(svg_main_file8,1.5,{scale:1,stroke:"white",opacity:0},"-=1.5");
}




function arrow_left_animation(){
  //funkcja animacji strzalki muszaca sie miescic w 2 sekundach
  const tl= new TimelineMax();
  TweenLite.fromTo(div_ico_arrow1, 2, {css:{borderColor:"#b3b3b3"}},{css:{borderColor:"#666666"},yoyo:true});
  tl.fromTo(i_arrow_left,0.3,{x:0},{x:5});
  tl.to(i_arrow_left,0.85,{x:"-100%",opacity:0});
  tl.to(i_arrow_left,1.15,{color:"#b3b3b3"},"-=1");
  tl.fromTo(i_arrow_left,0.85,{x:"100%",color:"#b3b3b3"},{x:0,opacity:1,color:"#666666"});
  tl.to(div_ico_arrow2,0.5,{opacity:0},"-=2");
  tl.to(div_ico_arrow1,0.5,{opacity:0},"-=2");
  tl.to(div_ico_arrow2,0.5,{opacity:1},"-=0.8");
  tl.to(div_ico_arrow1,0.5,{opacity:1},"-=0.8");
}

function arrow_right_animation(){
  const tl= new TimelineMax();
  TweenLite.fromTo(div_ico_arrow2, 2, {css:{borderColor:"#b3b3b3"}},{css:{borderColor:"#666666"},yoyo:true});
  tl.fromTo(i_arrow_right,0.3,{x:0},{x:-5});
  tl.to(i_arrow_right,0.85,{x:"100%",opacity:0});
  tl.to(i_arrow_right,1.15,{color:"#b3b3b3"},"-=1");
  tl.fromTo(i_arrow_right,0.85,{x:"-100%",color:"#b3b3b3"},{x:0,opacity:1,color:"#666666"});
  tl.to(div_ico_arrow2,0.5,{opacity:0},"-=2");
  tl.to(div_ico_arrow1,0.5,{opacity:0},"-=2");
  tl.to(div_ico_arrow2,0.5,{opacity:1},"-=0.8");
  tl.to(div_ico_arrow1,0.5,{opacity:1},"-=0.8");
}



function about_moving(){
  tl_repeat.fromTo(div_about,35,{x:0,y:0},{x:-60,y:30});
  tl_repeat.fromTo(div_about,35,{x:-60,y:30},{x:0,y:0});

};


foreign_button_pokaz.addEventListener('click',() =>{
  if(div_pokaz_projekty_all.classList.contains("showed")){
    return none;

  }
  else{
    more_about.classList.add("more-about-active");
    div_pokaz_projekty_all.classList.add("showed");
    tl_svg=new TimelineMax();
    tl_svg.to(foreign_button_pokaz,0.3,{delay: 4.2,opacity:0});
    tl_svg.to(svg_main_file1,3,{y:"170%"});
    tl_svg.to(svg_main_file2,3,{y:"170%"},"-=3");
    tl_svg.to(svg_main_file3,3,{y:"170%"},"-=3");
    tl_svg.to(svg_main_file4,3,{y:"170%"},"-=3");
    tl_svg.to(svg_main_file5,3,{y:"170%"},"-=3");
    tl_svg.to(svg_main_file6,3,{y:"170%"},"-=3");
    tl_svg.to(svg_main_file7,3,{y:"170%"},"-=3");
    tl_svg.to(svg_main_file8,3,{y:"170%"},"-=3");

    scaling_circle();


    pause_rotating();
    tl.to(svg_main_file1,2,{rotate:15});
    tl.to(svg_main_file2,2,{rotate:120},"-=2");
    tl.to(svg_main_file3,2,{rotate:15},"-=2")
    tl.to(svg_main_file4,2,{rotate:55},"-=2");
    tl.to(svg_main_file5,2,{rotate:15},"-=2");
    tl.to(svg_main_file6,2,{rotate:15},"-=2");
    tl.to(svg_main_file7,2,{rotate:15},"-=2");
    tl.to(svg_main_file8,2,{rotate:15},"-=2");


    tl.to(svg_line1,0,{opacity:1});
    tl.to(svg_line1,1,{scaleX:1,transformOrigin:"left",ease: "none"});

    tl.to(svg_line2,0,{opacity:1});
    tl.to(svg_line2,1,{scaleY:1,transformOrigin:"top",ease: "none"});

    tl.to(svg_line4,0,{opacity:1});
    tl.to(svg_line4,1,{scaleX:1,transformOrigin:"left",ease: "none"});

    tl.to(svg_line1,1,{scaleX:0,transformOrigin:"right",ease:"none"},"-=1")

    const tl1_rr=new TimelineMax();
    const tl2_rr=new TimelineMax();
    const tl3_rr=new TimelineMax();
    const tl4_rr=new TimelineMax();
    const tl5_rr=new TimelineMax();
    const tl6_rr=new TimelineMax();
    const tl7_rr=new TimelineMax();
    const tl8_rr=new TimelineMax();
    let circle1_rr=tl1_rr.to(svg_main_file1,2,{rotate:370,repeat:-1, ease: Power0.easeNone},"+=4.7");
    let circle2_rr=tl2_rr.to(svg_main_file2,2.1,{rotate:-600,repeat:-1,ease: Power0.easeNone},"+=4.6");
    let circle3_rr=tl3_rr.to(svg_main_file3,2.5,{rotate:370,repeat:-1,ease: Power0.easeNone},"+=4.5");
    let circle4_rr=tl4_rr.to(svg_main_file4,2.25,{rotate:-660,repeat:-1,ease: Power0.easeNone},"=4.4");
    let circle5_rr=tl5_rr.to(svg_main_file5,2.65,{rotate:370,repeat:-1,ease: Power0.easeNone},"+=4.3");
    let circle6_rr=tl6_rr.to(svg_main_file6,2.3,{rotate:370,repeat:-1,ease: Power0.easeNone},"+=4.3");
    let circle7_rr=tl7_rr.to(svg_main_file7,2.1,{rotate:370,repeat:-1,ease: Power0.easeNone},"+=4.3");
    let circle8_rr=tl8_rr.to(svg_main_file8,1.9,{rotate:370,repeat:-1,ease: Power0.easeNone},"+=4.3");

    tl.addLabel("border","=+0.7");
    tl.to(svg_line3,0,{opacity:1});
    tl.to(svg_line3,1,{scaleX:1,transformOrigin:"left",ease: "none"});
    tl.to(svg_line4,1,{scaleX:0,transformOrigin:"right",ease:"none"},"-=1");

    tl.to(svg_line5,0,{opacity:1},"-=1");
    tl.to(svg_line5,1,{scaleY:1,transformOrigin:"top",ease: "none"},"-=1");

    tl.to(svg_line2,1,{scaleY:0,transformOrigin:"bottom",ease:"none"},"-=1");
    tl.to(svg_line3,1,{scaleX:0,transformOrigin:"right",ease:"none"});
    tl.to(svg_line5,1,{scaleY:0,transformOrigin:"bottom",ease:"none"},"-=1");


    tl.to(div_projects,0,{opacity:1},"border");
    tl.to(div_projects,1,{scaleX:1,transformOrigin:"left",ease: "none"},"border");
    tl.to(div_projects,0.4,{backgroundmolyColor:"hsla(0, 0%, 60%,0)"});
    var tl1,

    tl1 = new TimelineMax();
    tl.to("#left-side", 0,{opacity:1},"border");
    tl.fromTo("#left-side", 2,{height:0},{height: "100%",transformOrigin:"bottom"},"border");
    tl.to("#top-side", 0,{opacity:1},"border");
    tl.fromTo("#top-side", 2,{width:0},{width: "100%",transformOrigin:"right"},"border");
    tl.to("#right-side", 0,{opacity:1},"border");
    tl.fromTo("#right-side", 2,{height:0},{height: "100%",transformOrigin:"top"});
    tl.to("#bottom-side", 0,{opacity:1},"border");
    tl.fromTo("#bottom-side", 2,{width:0},{width: "100%",transformOrigin:"right"},"-=2");
    TweenMax.to("#bottom-side", 3, {delay:8,backgroundImage:"linear-gradient(to right, white,#1a1a1a, white)", repeat:-1, yoyo:true, repeatDelay:0.2});
    tl.to("#xy1",1,{opacity:1});
    tl.to("#id-tittle-of-project",1,{y:25},"-=1");
    tl.to(h1_tittle1,1,{opacity:1},"-=1");
    tl.to(div_ico_arrow1,0.5,{scaleY:1});
    tl.to(div_ico_arrow2,0.5,{scaleY:1},"-=0.5");
    tl.to(div_ico_arrow1,0.5,{opacity:1},"-=0.2");
    tl.to(div_ico_arrow2,0.5,{opacity:1},"-=0.5");
  }
});


let currently = false;


div_ico_arrow2.addEventListener('click', function (div_ico_arrow2){
  if (currently==false){
    arrow_right_animation();
    if(img_img1.classList.contains("active")){
      currently=true;
      const tl99=new TimelineMax();
      const tl00=new TimelineMax();

      tl99.to("#xy1",1,{opacity:0});
      tl99.to(h1_tittle1,1,{opacity:0},"-=1");

      img_img1.classList.remove("active")
      tittle_of_project1.classList.remove("active")
      img_img2.classList.add("active")
      tittle_of_project2.classList.add("active")

      tl00.to("#xy2",1,{opacity:1,delay:1});
      tl00.to(h1_tittle2,1,{opacity:1,delay:1},"-=1.5");

      tl00.to("#id-tittle-of-project",1,{y:-15},"-=1")
    }


    else if(img_img2.classList.contains("active")){
      currently=true;
      const tl88=new TimelineMax();
      const tl11=new TimelineMax();

      tl88.to("#xy2",1,{opacity:0});
      tl88.to(h1_tittle2,1,{opacity:0},"-=1");

      img_img2.classList.remove("active")
      tittle_of_project2.classList.remove("active")
      img_img3.classList.add("active")
      tittle_of_project3.classList.add("active")

      tl11.to("#xy3",1,{opacity:1,delay:1});
      tl11.to(h1_tittle3,1,{opacity:1,delay:1},"-=1.5");

      tl11.to("#id-tittle-of-project",1,{y:-52},"-=1")
    }


    else if(img_img3.classList.contains("active")){
      currently=true;
      const tl77=new TimelineMax();
      const tl22=new TimelineMax();

      tl77.to("#xy3",1,{opacity:0});
      tl77.to(h1_tittle3,1,{opacity:0},"-=1");

      img_img3.classList.remove("active")
      tittle_of_project3.classList.remove("active")
      img_img4.classList.add("active")
      tittle_of_project4.classList.add("active")

      tl22.to("#xy4",1,{opacity:1,delay:1});
      tl22.to(h1_tittle4,1,{opacity:1,delay:1},"-=1.5");

      tl22.to("#id-tittle-of-project",1,{y:-92},"-=1")
    }


    else if(img_img4.classList.contains("active")){
      currently=true;
      const tl33=new TimelineMax();
      const tl66=new TimelineMax();

      tl66.to("#xy4",1,{opacity:0});
      tl66.to(h1_tittle4,1,{opacity:0},"-=1.5");

      img_img4.classList.remove("active")
      tittle_of_project4.classList.remove("active")
      img_img5.classList.add("active")
      tittle_of_project5.classList.add("active")

      tl33.to("#xy5",1,{opacity:1,delay:1});
      tl33.to(h1_tittle5,1,{opacity:1,delay:1},"-=1.5");

      tl33.to("#id-tittle-of-project",1,{y:-128},"-=1")
    }


    else if(img_img5.classList.contains("active")){
      currently=true;
      const tl55mob=new TimelineMax();
      const tl44mob=new TimelineMax();

      tl55mob.to("#xy5",1,{opacity:0});
      tl55mob.to(h1_tittle5,1,{opacity:0},"-=1");

      img_img5.classList.remove("active")
      tittle_of_project5.classList.remove("active")
      img_img1.classList.add("active")
      tittle_of_project1.classList.add("active")

      tl44mob.to("#xy1",1,{opacity:1,delay:1});
      tl44mob.to(h1_tittle1,1,{opacity:1,delay:1},"-=1.5");

      tl44mob.to("#id-tittle-of-project",0,{y:60},"-=1")
      tl44mob.to("#id-tittle-of-project",1,{y:25},"-=1")
    }
    setTimeout(()=> {currently=false;},2000);
  }
  else{
    return 0;
  }
});



div_ico_arrow1.addEventListener('click',function (div_ico_arrow1){
  if(currently==false){
    arrow_left_animation();
    if(img_img1.classList.contains("active")){
      currently=true;
      const tl99=new TimelineMax();
      const tl00=new TimelineMax();

      tl99.to("#xy1",1,{opacity:0});
      tl99.to(h1_tittle1,1,{opacity:0},"-=1");

      img_img1.classList.remove("active")
      tittle_of_project1.classList.remove("active")
      img_img5.classList.add("active")
      tittle_of_project5.classList.add("active")

      tl00.to("#xy5",1,{opacity:1,delay:1});
      tl00.to(h1_tittle5,1,{opacity:1,delay:1},"-=1.5");

      tl00.to("#id-tittle-of-project",0,{y:-90},"-=1")
      tl00.to("#id-tittle-of-project",1,{y:-128},"-=1")
    }


    else if(img_img2.classList.contains("active")){
      currently=true;
      const tl88=new TimelineMax();
      const tl11=new TimelineMax();


      tl88.to("#xy2",1,{opacity:0});
      tl88.to(h1_tittle2,1,{opacity:0},"-=1");

      img_img2.classList.remove("active")
      tittle_of_project2.classList.remove("active")
      img_img1.classList.add("active")
      tittle_of_project1.classList.add("active")

      tl11.to("#xy1",1,{opacity:1,delay:1});
      tl11.to(h1_tittle1,1,{opacity:1,delay:1},"-=1.5");

      tl11.to("#id-tittle-of-project",0,{y:60},"-=1")
      tl11.to("#id-tittle-of-project",1,{y:25},"-=1")

    }


    else if(img_img3.classList.contains("active")){
      currently=true;
      const tl77=new TimelineMax();
      const tl22=new TimelineMax();

      tl77.to("#xy3",1,{opacity:0});
      tl77.to(h1_tittle3,1,{opacity:0},"-=1");

      img_img3.classList.remove("active")
      tittle_of_project3.classList.remove("active")
      img_img2.classList.add("active")
      tittle_of_project2.classList.add("active")

      tl22.to("#xy2",1,{opacity:1,delay:1});
      tl22.to(h1_tittle2,1,{opacity:1,delay:1},"-=1.5");

      tl22.to("#id-tittle-of-project",0,{y:20},"-=1")
      tl22.to("#id-tittle-of-project",1,{y:-15},"-=1")
    }


    else if(img_img4.classList.contains("active")){
      currently=true;
      const tl33=new TimelineMax();
      const tl66=new TimelineMax();

      tl66.to("#xy4",1,{opacity:0});
      tl66.to(h1_tittle4,1,{opacity:0},"-=1");

      img_img4.classList.remove("active")
      tittle_of_project4.classList.remove("active")
      img_img3.classList.add("active")
      tittle_of_project3.classList.add("active")

      tl33.to("#xy3",1,{opacity:1,delay:1});
      tl33.to(h1_tittle3,1,{opacity:1,delay:1},"-=1.5");

      tl33.to("#id-tittle-of-project",0,{y:-20},"-=1")
      tl33.to("#id-tittle-of-project",1,{y:-52},"-=1")
    }


    else if(img_img5.classList.contains("active")){
      currently=true;
      const tl55=new TimelineMax();
      const tl44=new TimelineMax();

      tl55.to("#xy5",1,{opacity:0});
      tl55.to(h1_tittle5,1,{opacity:0},"-=1");

      img_img5.classList.remove("active")
      tittle_of_project5.classList.remove("active")
      img_img4.classList.add("active")
      tittle_of_project4.classList.add("active")

      tl44.to("#xy4",1,{opacity:1,delay:1});
      tl44.to(h1_tittle4,1,{opacity:1,delay:1},"-=1.5");

      tl44.to("#id-tittle-of-project",0,{y:-60},"-=1")
      tl44.to("#id-tittle-of-project",1,{y:-92},"-=1")
    }
    setTimeout(()=> {currently=false;},2000);
  }
  else{
    return 0;
  }

})
changing_color_of_about();
