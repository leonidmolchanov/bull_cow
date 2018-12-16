// Переменная следит чей ход 0 мы 1 компьютер
let motion=0
// Массив из которого генерируем случайное число
let secretArr=[0,1,2,3,4,5,6,7,8,9];
// Функция генерации числа
function secretGen(Arr) {
    let result=[]
    for (var i = 0; i < 4; i++) {
        let rand = Math.floor(Math.random() * Arr.length);
        rand = Arr[rand];
        Arr = Arr.filter(item => item !== rand)
        result.push(rand);
    }
    return result;
}
// Функция генерации глупого ответа компьютера ( у меня он один раз кстати смог выйграть, но логика такова чтобы он ни когда не выйграл, мы в своих интересах игру пишем как в казино
function iIntGen() {
    let Arr=[0,1,2,3,4,5,6,7,8,9];
    let result=[]
    for (var i = 0; i < 4; i++) {
        let rand = Math.floor(Math.random() * Arr.length);
        rand = Arr[rand];
        Arr = Arr.filter(item => item !== rand)
        result.push(rand);
    }
    return result;
}
// Присваиваем сгенерированное число к секрету с которым мы будем сравниваться
let secret = secretGen(secretArr);
// Процесс игры
function gameProc(secret, type){
    // Два массива с ответами
    let bull=[];
    let cow=[];
    // Объект в который буем складывать ответ
    let request={};
    // Считываем значение ввода
    userNumber= document.getElementById('user-number').value
// Проверка на длинну
    if(userNumber.length===4){
        // Цикл перебора чисел
        for (var i = 0; i < 4; i++) {
            // Если число с рогами
            if(Number(userNumber[i])===secret[i]){
                bull.push("<br>бык в "+(i+1)+" позиции");
            }
// Если нет ищем корову
            else{
                // Перебераем все знаки и ищем
                for (var y = 0; y < 4; y++) {
                    // Если находим говядину
                    if(Number(userNumber[i])===secret[y]) {
                        console.log("корова("+userNumber[i]+")")
                        cow.push("корова("+userNumber[i]+")")
                    }
                }
            }
        }
    }
    else{
        alert('Ошибка длинны значения')
    }
    // Записываем ответ
    request.bull=bull;
    request.cow=cow;
// Создаем элемент
    let p = document.createElement('p');
    // В зависимости от типа кто играет выводим в див разные значения
    if(type==="user") {
        p.innerHTML = 'Ваш ход----Быков: ' + request.bull + ',<br> Коровы: ' + request.cow;
    }
    else{
        p.innerHTML = 'Ход компьютера ----Быков: ' + request.bull + ',<br> Коровы: ' + request.cow;
    }
    document.getElementById("info").appendChild(p);
// Если все цифры рогатые
    if(request.bull.length===4){
        alert("Вы победили!!!!")
    }
// Если игра продалжается
    else{
        // Если играем мы
        if(type=="user" && motion===0){
            iGame(iIntGen());
            motion=1;
        }
        // Меняем тип хода
        if(motion===1){
            motion=0;
        }
    }
}
// Нункция запуска игры для компа
function iGame(number) {
    gameProc(number, "PC")
}
