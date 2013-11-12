Instagram = {};

Instagram.requestCredential = function (options, callback) {

    if (!callback && typeof options === 'function') {
        callback = options;
        options = {};
    }

    var config = ServiceConfiguration.configurations.findOne({service: 'instagram'});
    if (!config) {
        callback && callback(new ServiceConfiguration.ConfigError("Service not configured"));
        return;
    }

    var state = Meteor.uuid();
    // XXX need to support configuring access_type and scope
    var loginUrl =
        'https://instagram.com/oauth/authorize' +
            '?client_id=' + config.clientId +
            '&redirect_uri=' + Meteor.absoluteUrl('_oauth/instagram?close=close') +
            '&response_type=code' +
            '&scope=' + config.scope +
            '&state=' + state;

    Oauth.initiateLogin(state, loginUrl, callback);
};
