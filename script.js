import path from 'path'
import express from 'express'

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve(path.resolve(), 'ejs'));

app.get('/', ((req, res) => {
    res.sendFile(path.resolve(path.resolve(), 'index.html'));
}))

app.post('/', ((req, res) => {
    let data = []
    req.on('data', chunk => data.push(chunk));
    req.on('end', () => {
        let formattedData = Buffer.concat(data).toString().split('data=')
        console.log(formattedData)
        let num1 = parseInt(formattedData[1].replace('&', '')),
            num2 = parseInt(formattedData[2].replace('&', '')),
            operation = formattedData[3].toString();
        let result = 0;
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'sub':
                result = num1 - num2;
        }

        res.json({
            number1: num1,
            number2: num2,
            operation: operation,
            result: result
        });
    });
}))

app.listen(3000, () => {
    console.log('server started');
})