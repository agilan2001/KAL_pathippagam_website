var api_function = require('./index');

var res_obj = {
    setHeader: function(x){
        console.log("HEADER SET", x);
        return res_obj;
    },

    status: function(x){
        console.log("STATUS SET", x);
        return res_obj;
    },

    send: function(x){
        console.log("RESPONSE SENT", x);
        return res_obj;
    }
}
api_function(
    {query: {
        function: "PLACE_ORDER", name: "ASD", tel: "123456", mail: "agilanvlr2001@gmail.com", addr: "ADDR2",
                book_ord_t: [1,2,3], book_ord_q: [10,10,10], date: Date.now(), tot: 500

    } }, res_obj);

