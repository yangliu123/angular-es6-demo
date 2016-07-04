/**
 *  Defines the HomeController controller
 *
 *  @author  liuyang
 *  @date    Jul 4, 2016
 *
 */

class HomeController {

    /*@ngInject*/
    constructor($scope, HomeService) {
        this.$scope = $scope;
        this.HomeService = HomeService;

        this._init_();
        this._destroy_();
    }

    _init_() {
        this.todos = [];
        this.HomeService
            .getInitTodos()
            .then(todos => {
                this.todos = todos;
            });
    }

    addTodo(e) {
        if (e.keyCode !== 13) {
            return;
        }
        this.todos.push({txt: e.target.value});
        e.target.value = '';
    }

    toggleTodo(todo) {
        todo.finished = !todo.finished;
    }

    remaining() {
        return this.todos.reduce((n, todo) => n + Number(!todo.finished), 0);
    }

    archive() {
        this.todos = this.todos.filter(todo => !todo.finished);
    }

    _destroy_() {
        this.$scope.$on('$destroy', function() {});
    }
}

export default HomeController;
