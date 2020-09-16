var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function showEventLoop() {
    console.log('Сообщение А. Это сообщение появится первым');
    setTimeout(() => {
        console.log('Сообщение С. Это сообщение появится последним');
    }, 5);
    for (let i = 0; i < 1000; i++) {
        console.log('Сообщение Б. Это сообщение появится вторым');
    }
}
function showPromise() {
    const newPromise = new Promise((resolve, reject) => {
        const rand = Math.random() > 0.5 ? true : false;
        if (rand) {
            resolve('приянто');
        }
        else {
            reject('отклонено');
        }
    })
        .then((value) => {
        console.log(value);
    })
        .catch((value) => {
        console.log(value);
    });
}
function showAsync() {
    (function printCountDown() {
        return __awaiter(this, void 0, void 0, function* () {
            let arr = [3, 2, 1, 0, 'Пуск!'];
            for (let i = 0; i < arr.length; i++) {
                yield getPromise();
                console.log(arr[i]);
            }
        });
    })();
    function getPromise() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve('промис исполнен');
                }, 550);
            });
        });
    }
}
function showAsyncYet() {
    (function getData() {
        return __awaiter(this, void 0, void 0, function* () {
            return fetch('https://nomoreparties.co/news/v2/everything?');
        });
    })()
        .then(res => {
        console.log(`Сервер ответил, промис исполнен. Вот ответ: ${res}`);
    })
        .catch(err => {
        console.log(err);
    });
}
//# sourceMappingURL=index.js.map