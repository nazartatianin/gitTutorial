// ����������� HTTP ������
    const http = require("http");
    const hostname = "127.0.0.1";
    const port = 8000;
    // ��������� HTTP-������
    const server = http.createServer((req, res) => {
   // ������������ HTTP-��������� ������ � HTTP-�������� � ����� Content-type
       res.writeHead(200, {'Content-Type': 'text/plain'});
   // ��������� ��� ������ "Hello World"
       res.end('Hello World\n');
    });
    // �������� ��� ����� ������ ���� ��������
    server.listen(port, hostname, () => {
       console.log(`Server running at http://${hostname}:${port}/`);
    })
