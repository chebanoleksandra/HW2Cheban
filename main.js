//1
/*let answ = false;
while(answ == false)
{
    alert("Пожалуйста, заполните информацию");
    let name = prompt("Введите ФИО:");
    let s = prompt("Введите пол:");
    let age = prompt("Введите возраст:");
    let email = prompt("Введите e-mail:");
    let question = "ФИО: " + name + "\nПол: " + s + "\nВозраст: " + age + "\ne-mail: " + email + "\n\nВсе верно?"
    if (confirm(question) == true) {
        alert("Спасибо за информацию!");
        answ = true;
    }
}*/

//2 
let correctPrompt = false;
while(correctPrompt == false)
{
    let ticket = prompt("Введите номер трам. билета:");
    if(ticket.length==6)
    {
        if(parseInt(ticket[0])+parseInt(ticket[1])+parseInt(ticket[2])==parseInt(ticket[3])+parseInt(ticket[4])+parseInt(ticket[5]))
        {
            alert("У Вас счастливьій билет!:)");
        }
        else {
            alert("У Вас не счастливьій билет!:(");
        }
        correctPrompt = true;
    }
}
