const Koa = require('koa');
const app = new Koa();


app.use(ctx => {
  if (ctx.path === "/") {
    ctx.type = "html";
    ctx.body = ` <h1 style="text-align:center;"> KoaJS index sayfasına hoşgeldiniz. </h1> `;
  } else if ( ctx.path === "/hakkimda" ) {
    ctx.type = "html";
    ctx.body = ` <h1 style="text-align:center;"> KoaJS hakkimda sayfasına hoşgeldiniz. </h1> `;
  } else if ( ctx.path === '/iletisim' ) {
    ctx.type = "html";
    ctx.body = ` <h1 style="text-align:center;"> KoaJS iletisim sayfasına hoşgeldiniz. </h1> `;
  } else {
    ctx.type = "html";
    ctx.body = ` <h1 style="text-align:center; color:red;"> 404 Sayfa bulunamadı! </h1> `;
  }
});


const port = 3000;
app.listen(port, () => {
    console.log(`Sunucu port:${port}'de çalışmaya başladı.`);
});