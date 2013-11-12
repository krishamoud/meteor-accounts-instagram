Package.describe({
    summary: "Login service for instagram accounts"
});

Package.on_use(function(api) {
    api.use('accounts-base', ['client', 'server']);
    api.imply('accounts-base', ['client', 'server']);
    api.use('accounts-oauth', ['client', 'server']);

    api.use('oauth', ['client', 'server']);
    api.use('oauth2', ['client', 'server']);
    api.use('http', ['server']);
    api.use('underscore', 'server');
    api.use('templating', 'client');
    api.use('random', 'client');
    api.use('service-configuration', ['client', 'server']);
          
    api.add_files(
    ['lib/instagram_configuration.html', 'lib/instagram_configuration.js', 
    'lib/instagram_login_button.css'],
    'client');

    api.add_files("lib/accounts_instagram.js");
    api.add_files('lib/instagram_client.js', 'client');
    api.add_files('lib/instagram_server.js', 'server');
});
