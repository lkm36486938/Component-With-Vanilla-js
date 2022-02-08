const express = require('express');
const app = express();
const path = require('path');

// src 폴더 하위의 파일들은 정적콘텐츠로 제공
app.use(express.static(path.resolve(__dirname, 'src')));

app.listen(3000, () => {
  console.log('Application started and Listening on port 3000');
});

// 루트로 접근 시 index.html 파일 제공
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});
