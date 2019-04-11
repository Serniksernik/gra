var Config = module.exports = {
  //---------------------
  //Main Configurations
  //---------------------
  port:  process.env.PORT || 8000,

  jwtSecret: process.env.MV_JWT_SECRET || 'aeha8fewrfdsgffcbvsersetdfgfds9jfqasfjk9',

  loggingConfig: {
    format : [
              "{{timestamp}} <{{title}}> {{message}}", //default format
              {
                error : "{{timestamp}} <{{title}}> {{message}} (in {{file}}:{{line}})\nCall Stack:\n{{stack}}" // error format
              }
    ],
    dateformat : "HH:MM:ss.L",
    preprocess :  function(data){
      data.title = data.title.toUpperCase();
    },
    level: 'debug'
  },

  redisConnection: process.env.MV_REDIS_HOST_URL || 'redis://www.janwerkse.com',

  //---------------------
  //Login Configurations
  //---------------------

  //Needs to be the same as Client firstHash
  firstHash: process.env.MV_FIRST_HASH||'d28cb7dsadsacxzderwrwe7cb2ef7cd1',

  //Mail to send activation codes from
  mailFrom: process.env.MV_MAILFROM || 'smtps://everfury1992@gmail.com:pruvxu4q@smtp.gmail.com',

  //Time until token expires (in minutes)
  tokenExpiresIn: process.env.MV_TOKEN_EXPIRES_MIN || 60 * 24 * 14,

  //Allows only one logged in user at a time.
  enforceOneUser: process.env.MV_ENFORCE_ONE_USER || false,

  //Temporary Password Complexity for lost Passwords
  lostPasswordComplexity: process.env.MV_LOST_PASSWORD_COMPLEXITY || 2,

  //Temporary Password Expiration in Milliseconds
  tempPasswordExpires: process.env.MV_LOST_PASSWORD_EXPIRES || 3600000, //1 hour

  //------------------------
  //Database Configurations
  //------------------------

  mongoDBconnect: process.env.MV_MONGO_URI || 'mongodb://<ser-admin>:<Sernik1992>@ds155352.mlab.com:55352/nowa1'
};
