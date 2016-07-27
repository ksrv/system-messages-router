
import {SysMessages}    from 'meteor/ksrv:system-messages';
import {Router}         from 'meteor/iron:router';

SysMessages.before.insert(function(userId, message){
    if(Router && Router.current && typeof Router.current === 'function'){
        message.url = Router.current().originalUrl;
    }    
});
