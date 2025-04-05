import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введіть перше число: ', (A) => {
    rl.question('Введіть друге число: ', (B) => {
        rl.question('Введіть знак: ', (sign) => {
            let numA = parseFloat(A);
            let numB = parseFloat(B);

            let result = 0;


            switch (sign)
            {
                case '+':
                    result = numA + numB;
                    break;
                case '-':
                    result = numA - numB;
                    break;
                case '*':
                    result = numA * numB;
                    break;
                case '/':
                    if (numB !== 0) {
                        result = numA / numB;
                    } else {
                        console.log('Помилка: ділення на нуль!');
                        rl.close();
                        return;
                    }
                    break;
            }
            console.log('Результат:', result);
    rl.close();
        });
    });
});
