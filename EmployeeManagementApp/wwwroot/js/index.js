import DOMPurify from "dompurify";

const store = DevExpress.data.AspNet.createStore({
    key: 'ProductID',
    loadUrl: 'https://js.devexpress.com/Demos/Mvc/api/ListData/Orders',
});

$("#dev-control").html(DOMPurify.sanitize(store.toString()));