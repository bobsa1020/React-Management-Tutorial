const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
          'id': 1,
          'image': 'http://placeimg.com/64/64/any',
          'name': '구대훈',
          'birthday': '801020',
          'gender': '남자',
          'job': '프로그래머'
        },
        {
          'id': 2,
          'image': 'http://placeimg.com/64/64/2',
          'name': '홍길동',
          'birthday': '801020',
          'gender': '남자',
          'job': '프로그래머'
        },
        {
          'id': 3,
          'image': 'http://placeimg.com/64/64/3',
          'name': '김철수',
          'birthday': '801020',
          'gender': '남자',
          'job': '프로그래머'
        }
      ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));