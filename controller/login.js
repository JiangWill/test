const Koa = require('koa')
const app = new Koa()

app.use(async (ctx,next)=>{
    ctx.body = 'hello 1111'
})
app.listen(3000)