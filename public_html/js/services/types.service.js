app.factory('typesService', typesService);

function typesService($http) {

    var vm = this;

    vm.getAllTypes = getAllTypes;

    return vm;

    function getAllTypes() {
        return $http.get('api/Lists/');
    }
};
