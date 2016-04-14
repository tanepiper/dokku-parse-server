# An example Dokku Parse Server

This repo contains a simple example of setting up a [Dokku](ttps://github.com/dokku/dokku)
[Parse server](https://github.com/ParsePlatform/parse-server).

### Pre-deployment setup.

You first need to install the dokku MongoDB plugin by running:

`> dokku plugin:install https://github.com/dokku/dokku-mongo.git mongo`

Once installed, you can create your app and database and link them:

    > dokku mongo:create parsedb
    > dokku apps:create parse
    > dokku mongo:link parsedb:parse

You will now have a `MONGO_URL` environment variable.  Set up other environment
variables too:

    > dokku config:set parse APP_ID=<APP_ID>
    > dokku config:set parse APP_SECRET=<APP_SECRET>
    > dokku config:set parse APP_URL=<APP_URL>

You don't need to set the port here, Dokku will do this for you.

### Deployment

Now clone this directory and then type:

    > git remote add dokku dokku@my.dokku.me:parse
    > git push dokku master

After a couple of minutes you will be able to access your parse instance via `http(s)://parse.my.dokku.me/parse`.


## Bonus round: Lets Encrypt

It's really easy to add SSL to your Parse server, just install the [Dokku LetsEncrypt plugin](https://github.com/dokku/dokku-letsencrypt)

    > dokku plugin:install https://github.com/dokku/dokku-letsencrypt.git
    > dokku config:set --no-restart myapp DOKKU_LETSENCRYPT_EMAIL=<EMAIL>
    > dokku letsencrypt myapp
