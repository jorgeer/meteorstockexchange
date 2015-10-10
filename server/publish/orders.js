
Meteor.publish("orders", function (opts) {
    let query = {};
    
    _.each(opts, (val, key) => {
        if (val) {
            query[key] = val;
        }
    });
        
    return Order.find(query);
});