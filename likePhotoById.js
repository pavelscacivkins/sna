/* ==========================================================
 * небольшой js скрипт, с помощью которого можно поставить
 * отметку "мне нравитъся" к любой фотографии по ее Ид на
 * портале драугием.лв
 *
 * в течении дня отдача может достигнуть порядка 1000 
 * ответных "лайков" и посещений, и лулзов ))
 *
 * скрипт запускается через js консоль или phantomjs
 * как серверный js скрипт
 * ========================================================== */

next();
function next() {
  setTimeout(function() {
    if (i < to) return;
    T.like.send(                                  /* данная функция T.like.send */
      $(".inlineList.iconListNew li:first a"),    /* принадлежит самим */
      {"type": 1, "id": pid - to}                 /* драугам.лв и выполняет */
    );                                            /* асинхронный ajax реквест */
    console.log(to++);
    next();
  }, Math.ceil((5.23 + 2 * Math.random()) * 1000));
}
var pid = 290385358;
var i   = 5000;
var to  = 1;