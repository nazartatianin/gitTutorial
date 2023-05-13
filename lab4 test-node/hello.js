// Завантажуємо HTTP модуль
    const http = require("http");
    const hostname = "127.0.0.1";
    const port = 8000;
    // Створюємо HTTP-сервер
    const server = http.createServer((req, res) => {
   // Встановлюємо HTTP-заголовок відповді з HTTP-статусом і типом Content-type
       res.writeHead(200, {'Content-Type': 'text/plain'});
   // Надсилаємо тіло відповіді "Hello World"
       res.end('Hello World\n');
    });
    // Виводимо лог щойно сервер буде запущено
    server.listen(port, hostname, () => {
       console.log(`Server running at http://${hostname}:${port}/`);
    })
