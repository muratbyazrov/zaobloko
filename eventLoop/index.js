
console.log('Сообщение А. Это сообщение появится первым');

setTimeout(() => {
    console.log('Сообщение С. Это сообщение появится последним')
}, 5);

for(let i=0; i<1000; i++) {
    console.log('Сообщение Б. Это сообщение появится вторым')
}