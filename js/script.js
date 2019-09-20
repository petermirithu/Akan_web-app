function makeArray(n) {
  this.length=n;
  for (var i= 1; i <=n; i++) {
    this[i] = 0;
  }
}
days=new makeArray(7);
  days[0]="Sunday"
  days[1]="Monday"
  days[2]="Tuesday"
  days[3]="Wednesday"
  days[4]="Thursday"
  days[5]="Friday"
  days[6]="Saturday"

months=new makeArray(12)
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

//  var maleNames
//  maleNames[0]="Kwasi"
//  maleNames[1]="Kwadwo"
//  maleNames[2]="Kwabena"
//  maleNames[3]="Kwaku"
//  maleNames[4]="Yaw"
//  maleNames[5]="Kofi"
//  maleNames[6]="Kwame"

//  var femaleNames
//  femaleNames[0]="Akosua"
//  femaleNames[1]="Adwoa"
//  femaleNames[2]="Abenaa"
//  femaleNames[3]="Akau"
//  femaleNames[4]="Yaa"
//  femaleNames[5]="Afua"
//  femaleNames[6]="Ama"


function validate(form) {
    var val1= parseInt(form.day.value, 10)
    if ((val1 < 0) || (val1 >31)) {
      alert("Day is out of Range!!!")
    };

    var val2= parseInt(form.month.value, 10)
    if ((val2 <0) || (val2 >12)) {
      alert("Month is out of Range!!!")
    };
    
    var val2x= parseInt(form.month.value, 10)
    var val3= parseInt(form.year.value, 10)
    if (val3 <1000) {
      alert("The year is past whats expected.")
    };

    if (val2 == 1) {
      val2x = 13;
      val3 = val3-1
    };
    if (val2==2) {
      val2x= 14;
      val3 = val3-1
    };
    var val4 = parseInt(((val2x+1)*3)/5, 10)
    var val5 = parseInt(val3/4, 10) 
    var val6 = parseInt(val3/100, 10)
    var val7 = parseInt(val3/400, 10)
    var val8 = val1+(val2x*2)+val4+val3+val5-val6+val7+2
    var val9 = parseInt(val8/7, 10)
    var val0 = val8-(val9*7)

    form.result1.value = months[val2]+" "+form.day.value +", "+form.year.value
    form.result2.value = days[val0]
}

