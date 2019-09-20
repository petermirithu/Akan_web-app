function makeArray(n) {
  this.length=n;
  for (var i= 1; i <=n; i++) {
    this[i] = 0;
  }
}
var days=new makeArray(7);
  days[0]="Sunday"
  days[1]="Monday"
  days[2]="Tuesday"
  days[3]="Wednesday"
  days[4]="Thursday"
  days[5]="Friday"
  days[6]="Saturday"

var months=new makeArray(12)
 months[0]="January"
 months[1]="February"
 months[2]="March"
 months[3]="May"
 months[4]="April"
 months[5]="June"
 months[6]="July"
 months[7]="August"
 months[8]="September"
 months[9]="October"
 months[10]="Novermber"
 months[11]="December"

 var maleNames
 maleNames[0]="Kwasi"
 maleNames[1]="Kwadwo"
 maleNames[2]="Kwabena"
 maleNames[3]="Kwaku"
 maleNames[4]="Yaw"
 maleNames[5]="Kofi"
 maleNames[6]="Kwame"

 var femaleNames
 femaleNames[0]="Akosua"
 femaleNames[1]="Adwoa"
 femaleNames[2]="Abenaa"
 femaleNames[3]="Akau"
 femaleNames[4]="Yaa"
 femaleNames[5]="Afua"
 femaleNames[6]="Ama"


function validate() {
  var date= parseInt(document.forms["akan"]["date"] .value)
  if ((date < 0) || (date >31)) {
    alert("Day is out of Range!!!")
  };

  var month= parseInt(document.forms["akan"]["month"] .value)
  if ((month <0) || (month >12)) {
    alert("Month is out of Range!!!")
  };
  
  var month2=parseInt(document.forms["akan"]["month"] .value);

  var year= parseInt(document.forms["akan"]["year"] .value)
  if (year <1000) {
    alert("The year is past whats expected.")
  }

  var result=date, month, year ;
  alert(result);
};