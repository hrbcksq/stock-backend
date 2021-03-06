/**
 * Module dependencies.
 */
import * as express from 'express';
import * as compression from 'compression';  // compresses requests
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as errorHandler from 'errorhandler';
import * as lusca from 'lusca';
import * as dotenv from 'dotenv';
import * as flash from 'express-flash';
import expressValidator = require('express-validator');
import * as path from 'path';
// import * as moment from 'moment';

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: '.env.keys' });

/**
 * Controllers (route handlers).
 */
import indexController from './controllers/index';
import { BittrexApiService } from './services';
import { Market } from './models';

/**
 * Create Express server.
 */
const app = express();

/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

app.use(flash());
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));

app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

/**
 * Primary app routes.
 */
app.use('/', indexController);


/**
 * API examples routes.
 */
// app.get('/api', apiController.getApi);


/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log((`  App is running at http://localhost:${app.get('port')} in ${app.get('env')} mode`));
  console.log('  Press CTRL-C to stop\n');
});

// Services
const apiServcie = new BittrexApiService();
apiServcie.getStream([Market.USDT_XRP], '').subscribe((data) => {
    data.forEach(x => x.Fills.forEach(f => console.log(`${f.OrderType}: ${f.Rate}  - ${f.Quantity}` )));
});



module.exports = app;