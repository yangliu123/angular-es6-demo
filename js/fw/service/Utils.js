/**
 *
 *  Defines `utils` service
 *
 *
 *  @author  liuyang
 *  @date    Jul 4, 2016
 *
 */

import ServiceBase from 'lib/ServiceBase';
import config from 'etc/config';

class Service extends ServiceBase {
    constructor(features, app) {
        super(features, app);
    }


    _utils($q, $window) {
        'ngInject';

        this.base64ToString = function(str) {
            return decodeURIComponent(escape(atob(str)));
        };

        this.stringTobase64 = function(str) {
            return btoa(unescape(encodeURIComponent(str)));
        };

        this.stopEvent = function(e) {
            if (!e) {
                return;
            }
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            if (e.preventDefault) {
                e.preventDefault();
            }
        };
    }

    execute() {
        this.service('utils', this._utils);
    }
}

export default Service;
