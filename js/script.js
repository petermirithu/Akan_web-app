 function pyraArray(n) {
  this.length = n;
  for (var i = 1; i <=n; i++) {
    this[i] = 0;
  }
}
days = new pyraArray(7);
days[0] = "Saturday"
days[1] = "Sunday"
days[2] = "Monday"
days[3] = "Tuesday"
days[4] = "Wednesday"
days[5] = "Thursday"
days[6] = "Friday"

months = new pyraArray(12);
months[1] = "January" 
months[2] = "February" 
months[3] = "March" 
months[4] = "April" 
months[5] = "May" 
months[6] = "June" 
months[7] = "July" 
months[8] = "August"
months[9] = "September" 
months[10] = "October"
months[11] = "November"
months[12] = "December"

var maleNames=["Kwame","Kwasi", "Kwadwo","Kwabena", "Kwaku", "Yaw", "Kofi"]
 
var femaleNames=[ "Ama","Akosua", "Adwoa","Abenaa", "Akau","Yaa", "Afua"]

function validate() {
  var day1 = parseInt(form.day.value, 10)
  if ((day1 <=0) || (day1 > 31)) {
     alert("The Date your entered Doesn't Exist!!!")
  }

  var month1 = parseInt(form.month.value, 10)
  if ((month1 <=0) || (month1 > 12)) {
     alert("The Month you entered Doesn't Exist!!!")
  }  

  var val2x = parseInt(form.month.value, 10)
  var today= new Date();
  var year3= today.getFullYear();
  var year1 = parseInt(form.year.value, 10)
    if ((year1%4==0) && (month1==2) && (day1 >29)){
      alert("Date entered is Invalid.")
    } else if ((year1%4>=1) && (month1==2) && (day1>28)){
      alert("Date entered is Invalid")
    }
  if ((year1 < 1000) || (year1 > year3)) {
     alert("The year is way past whats expected!!!")
  }
  if (month1 == 1) {
     val2x = 13;
     year1 = year1-1
  }
  if (month1 == 2) {
     val2x = 14;
     year1 = year1-1
  }
  var code1 = parseInt(((val2x+1)*3)/5, 10)
  var code2 = parseInt(year1/4, 10)
  var code3 = parseInt(year1/100, 10)
  var code4 = parseInt(year1/400, 10)
  var code5 = day1+(val2x*2)+code1+year1+code2-code3+code4+2
  var code6 = parseInt(code5/7, 10)
  var answer = code5-(code6*7)

  var akanName = ""
  var gender = form.gender.value;
  if (gender==="Male") {
    akanName = maleNames[answer]
  } else if (gender==="Female") {
    akanName = femaleNames[answer]
  } else {
    alert("Invalid Input!!!")
  }

  form.akan.value =akanName

  form.result1.value = months[month1]+" "+form.day.value +", "+form.year.value
  form.result2.value = days[answer]

}   





