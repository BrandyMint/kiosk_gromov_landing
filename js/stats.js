var url="http://api.kiiiosk.ru/v1/stats.json";
/* {"companies_count":2205,"selled_items_count":28121,"total_orders_amount":50791571} */

$.getJSON(url, function(data) {
  console.log("stats loaded", data);
  $("#stats-shops").text(data.companies_count);
  $("#stats-items").text(data.selled_items_count);
  $("#stats-money").text(Math.round(data.total_orders_amount/1000000));
});