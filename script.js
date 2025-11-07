
function marksheet() {
  // marksheet 
  let name = document.getElementById("name");
  
  let Class = document.getElementById("class");
  
  let number = document.getElementById("number");
  
  let birth = document.getElementById("birth");
  
  let father = document.getElementById("father");
  
  let mother = document.getElementById("mother");
  
  let schoolName = document.getElementById("schoolName");
  
  // input ---
  
  let studentName = document.getElementById("studentName");
  
  name.innerHTML = studentName.value;
  
  let schoolname = document.getElementById("schoolname");
  
  schoolName.innerHTML = schoolname.value ;
 
  let  Classs = document.getElementById("Classs");
  
  Class.innerHTML = Classs.value;
  
  let date = document.getElementById("date");
  
  birth.innerHTML = date.value ;
  
  let fatherN = document.getElementById("FatherN");
  father.innerHTML = fatherN.value;
  
  let motherN = document.getElementById("MotherN");
  mother.innerHTML = motherN.value;
  
  let phone = document.getElementById("phone");
  
  number.innerHTML = phone.value;
  
  mark() ;
    // for empty input 
  studentName.value = " ";
  schoolname.value = " " ;
  Classs.value = " " ;
  date.value = " ";
  phone.value = " ";
  motherN.value = " ";
  fatherN.value = " ";
  
  }
  
function  mark() {
  
  
  // marksheet --
  let hindi = document.getElementById("hindiMark");
  let english = document.getElementById("englishMark");
  let maths = document.getElementById("mathsMark");
  let science = document.getElementById("scienceMark");
  let social = document.getElementById("socialMark");
  let pt = document.getElementById("ptMark");
  let art = document.getElementById("artMark");
  
  // input ---
  
  let  Hindi = document.getElementById("Hindi");
  
  hindi.innerHTML = Hindi.value ;
  let a = +(Hindi.value) ;
  
  let English = document.getElementById("English");
  
  english.innerHTML = English.value;
  let b = +(English.value);
  let Maths = document.getElementById("Maths");
  
  maths.innerHTML = Maths.value ;
   let c = +(Maths.value) ;
  let Science = document.getElementById("Science");
  science.innerHTML = Science.value ;
  let d = +(Science.value);
  
  let SocialStudy = document.getElementById("SocialStudy");
  social.innerHTML = SocialStudy.value ;
  let e = +(SocialStudy.value) ;
  let Art = document.getElementById("Art");
  art.innerHTML = Art.value ;
  let f = +(Art.value) ;
  let Pt = document.getElementById("Pt");
  pt.innerHTML = Pt.value ;
  let g = +(Pt.value) ;
 
  
  let mark = (a+b+c+d+e+f+g);
  
  let total = document.getElementById("total");
  total.innerHTML = +mark ;
  
  let per = document.getElementById("percentage");
   mark = (mark / 700)*100 ;
  per.innerHTML = `${mark.toFixed(2)}%` ;
  
  // for empty input
   Hindi.value = " ";
   Science.value = " ";
   Maths.value = " ";
   English.value = " ";
   Pt.value = " ";
   Art.value = " ";
   SocialStudy.value = " ";
}

