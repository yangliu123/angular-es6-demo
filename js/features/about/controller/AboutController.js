/**
 *  Defines the AboutController controller
 *
 *  @author  liuyang
 *  @date    Jul 4, 2016
 *
 */

class AboutController {

    /*@ngInject*/
    constructor($scope) {
        this.$scope = $scope;

        this._init_();
        this._destroy_();
    }

    _init_() {}

    _destroy_() {
        this.$scope.$on('$destroy', function() {});
    }
}

export default AboutController;
