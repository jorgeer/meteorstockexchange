Template.traders.onCreated(function () {
    Meteor.subscribe("topTraders", {});
});

Template.traders.onDestroyed(function () {

});

Template.traders.onRendered(function () {

});

Template.traders.helpers({
    traders: () => {
        return _.map(User.find().fetch(), (el, i) => {
            el.placement = i+1;
            return el;
        });
    }
});

Template.traders.events({
    "click [attr]": function (e) {
        var attr = e.currentTarget.getAttribute("attr");

    },
});