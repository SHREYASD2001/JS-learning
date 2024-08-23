let day = prompt("enter number between 0 to 3");
switch (+day) {
  case 0:
    console.log("Monday");
    break;

  case 1:
    console.log("Tuesday");
    break;

  case 2:
    console.log("Wednesday");
    break;

  case 3:
    console.log("Thursday");
    break;

  default:
    prompt("is an invalid option. valid options are 0/1/2/3");
    break;
}
