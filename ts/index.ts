// EVENT LOOP ==================================================
function showEventLoop(): void {
    console.log('Сообщение А. Это сообщение появится первым');

    setTimeout(() => {
        console.log('Сообщение С. Это сообщение появится последним')
    }, 5);

    for (let i = 0; i < 1000; i++) {
        console.log('Сообщение Б. Это сообщение появится вторым')
    }
}
// showEventLoop();


// Promise =======================================================
function showPromise(): void {
    const newPromise = new Promise<string>((resolve, reject): void => {
        const rand: boolean = Math.random() > 0.5 ? true : false;
        if (rand) {
            resolve('приянто') // Переводим промис в режим исполнено
        } else {
            reject('отклонено') // Переводим промис в режим отклонено
        }
    })
        .then((value: string): void => {
            console.log(value);
        })
        .catch((value: string): void => {
            console.log(value);
        });
}
// showPromise();


// async/await =============================================
function showAsync(): void {
    (async function printCountDown() {
        let arr = [3, 2, 1, 0, 'Пуск!']
        for (let i = 0; i < arr.length; i++) {
            await getPromise(); // интерпретатор ждет, пока не выполнится ф-ция getPromise()
            console.log(arr[i]); // если ответ ок, то текст выводится в консоль
        }

    })()

    async function getPromise() {
        return new Promise<string>((resolve) => {
            setTimeout(() => { // Переводим промис в режим исполнено через 550 мс
                resolve('промис исполнен')
            }, 550);
        });
    }
}
// showAsync();



// Можно использовать конструкции .then/.catch
function showAsyncYet(): void {
    (async function getData() {
        return fetch('https://nomoreparties.co/news/v2/everything?')
    })()
        .then(res => {
            console.log(`Сервер ответил, промис исполнен. Вот ответ: ${res}`)
        })
        .catch(err => {
            console.log(err);
        })
}
// showAsyncYet();
