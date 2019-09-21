 function MakeArray(n) {
  this.length = n;
  for (var i = 1; i <=n; i++) {
    this[i] = 0;
  }
}
days = new MakeArray(7);
days[0] = "Saturday"
days[1] = "Sunday"
days[2] = "Monday"
days[3] = "Tuesday"
days[4] = "Wednesday"
days[5] = "Thursday"
days[6] = "Friday"

months = new MakeArray(12);
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
  var val1 = parseInt(form.day.value, 10)
  if ((val1 <=0) || (val1 > 31)) {
     alert("The Date your entered Doesn't Exist!!!")
  }

  var val2 = parseInt(form.month.value, 10)
  if ((val2 <=0) || (val2 > 12)) {
     alert("The Month you entered Doesn't Exist!!!")
  }  

  var val2x = parseInt(form.month.value, 10)
  var today= new Date();
  var year3= today.getFullYear();
  var val3 = parseInt(form.year.value, 10)

  if ((val3 < 1000) || (val3 > year3)) {
     alert("The year way past whats expected!!!")
  }
  if (val2 == 1) {
     val2x = 13;
     val3 = val3-1
  }
  if (val2 == 2) {
     val2x = 14;
     val3 = val3-1
  }
  var val4 = parseInt(((val2x+1)*3)/5, 10)
  var val5 = parseInt(val3/4, 10)
  var val6 = parseInt(val3/100, 10)
  var val7 = parseInt(val3/400, 10)
  var val8 = val1+(val2x*2)+val4+val3+val5-val6+val7+2
  var val9 = parseInt(val8/7, 10)
  var val0 = val8-(val9*7)

  var name1 = form.name.value;
  var akanName = ""
  var gender = form.gender.value;
  if (gender==="Male") {
    akanName = maleNames[val0]
  } else if (gender==="Female") {
    akanName = femaleNames[val0]
  } else {
    alert("Invalid Input!!!")
  }

  form.akan.value =name1+". "+"Your Akan name is: "+akanName

  form.result1.value = months[val2]+" "+form.day.value +", "+form.year.value
  form.result2.value = days[val0]

}   




