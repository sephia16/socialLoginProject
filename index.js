import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { ping } from './controller/system.js';

const serverPort = 3000;
const app = express();

// 함수 호출을 위한 괄호 추가
app.use(bodyParser.json());
// 오타 수정: 'extened' -> 'extended'
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

const router = express.Router();



router.route('/ping').get(ping);

app.use('/socialLoginProject/api/v1', router);

app.listen(serverPort, () => {
    console.log(`Server running on port ${serverPort}`);
});
