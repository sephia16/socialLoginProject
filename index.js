import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const serverPort = 3000;
const app = express();

// 함수 호출을 위한 괄호 추가
app.use(bodyParser.json());
// 오타 수정: 'extened' -> 'extended'
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

const router = express.Router();

const ping = (req, res) => {
    const result = true;
    res.send({result});
};

router.route('/ping').get(ping);

app.use('/socialLoginProject/api/v1', router);

app.listen(serverPort, () => {
    console.log(`Server running on port ${serverPort}`);
});
