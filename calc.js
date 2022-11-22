function Calc_Salary(hrate, hwork)

{

//Converts to float

var hourlyRate = parseFloat(hrate);

//Converts to integer

var hourWorked = parseInt(hwork);

//Calculates annual salary

var annualSalary = hourWorked* hourlyRate*52;

//Returns annual salary

return annualSalary;

}