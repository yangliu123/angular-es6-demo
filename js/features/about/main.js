/**
 * ******************************************************************************************************
 *
 *   Defines a about feature
 *
 *  @author  liuyang
 *  @date    Jul 4, 2016
 *
 * ******************************************************************************************************
 */

import FeatureBase from 'lib/FeatureBase';
import Routes from './Routes';
import AboutController from './controller/AboutController';

class Feature extends FeatureBase {

    constructor() {
        super('about');
        this.routes = Routes;
    }

    execute() {
        this.controller('AboutController', AboutController);
    }
}

export default Feature;
