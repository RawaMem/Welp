npm i bcryptjs cookie-parser cors csurf dotenv express express-async-handler express-validator faker helmet jsonwebtoken morgan per-env pg@">=8.4.1" sequelize@5 sequelize-cli@5

npm install -D dotenv-cli nodemon

psql -c "CREATE USER auth_app PASSWORD 'password' CREATEDB"

npx dotenv sequelize db:create


fetch('/api/test', {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `05P9gdnM-PaPqiTEbvl5ZCQDRtt3SZnjgUdg`
  },
  body: JSON.stringify({ hello: 'world' })
}).then(res => res.json()).then(data => console.log(data));

npx sequelize model:generate --name User --attributes username:string,email:string,hashedPassword:string

npx dotenv sequelize db:migrate

psql auth_db -c '\d "Users"'

npx sequelize seed:generate --name demo-user
npx dotenv sequelize db:seed:all
npx dotenv sequelize db:seed:undo:all


psql auth_db -c 'SELECT * FROM "Users"'



fetch('/api/session', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `0OZhzs5V-Xj219uYNnBVAKz8CTdig-26wyfw`
  },
  body: JSON.stringify({ credential: 'Demo-lition', password: 'password' })
}).then(res => res.json()).then(data => console.log(data));

fetch('/api/session', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `0OZhzs5V-Xj219uYNnBVAKz8CTdig-26wyfw`
  },
  body: JSON.stringify({ credential: 'demo@user.io', password: 'password' })
}).then(res => res.json()).then(data => console.log(data));

fetch('/api/session', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `0OZhzs5V-Xj219uYNnBVAKz8CTdig-26wyfw`
  },
  body: JSON.stringify({ credential: 'Demo-lition', password: 'Hello World!' })
}).then(res => res.json()).then(data => console.log(data));

fetch('/api/session', {
  method: 'DELETE',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `0OZhzs5V-Xj219uYNnBVAKz8CTdig-26wyfw`
  }
}).then(res => res.json()).then(data => console.log(data));

fetch('/api/users', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `lygntzBR-0TosCa4IIhv6s0p02fe1823GYoU`
  },
  body: JSON.stringify({
    email: 'spidey@spider.man',
    username: 'Spidey',
    password: 'password'
  })
}).then(res => res.json()).then(data => console.log(data));

fetch('/api/session', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `seh4L2fU-iuzHWanrtZlnemTqa_4YSCEJpp0`
  },
  body: JSON.stringify({ credential: '', password: 'password' })
}).then(res => res.json()).then(data => console.log(data));

fetch('/api/session', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `seh4L2fU-iuzHWanrtZlnemTqa_4YSCEJpp0`
  },
  body: JSON.stringify({ credential: 'Demo-lition', password: '' })
}).then(res => res.json()).then(data => console.log(data));

fetch('/api/users', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `D0TbCpxq--oFeD6vwjhYwoi4lB_ZvXwdSVqI`
  },
  body: JSON.stringify({
    email: 'spidey@spider.man',
    username: 'Spidey',
    password: ''
  })
}).then(res => res.json()).then(data => console.log(data));
