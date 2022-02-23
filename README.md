# casino-devit
Repo to hold DevIT's work on casino frontend

## Running locally in development mode
To get started, just clone the repository and run `npm install && npm run dev`:

    git clone git@github.com:coredataeu/casino-devit.git
    npm install
    npm run dev

## Building and deploying in production
If you wanted to run this site in production, you should install modules then build the site with `npm run build` and run it with `npm run start`:

    npm install
    npm run build
    npm run start

You should run `npm run build` again any time you make changes to the site.

## Configuring

If you configure a .env.local file (just copy [.env.example](https://github.com/coredataeu/casino-devit/blob/nextdev/.env.example) over to '.env.local' and fill in the options) you can configure a range of options.