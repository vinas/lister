app.controller('TypesController', TypesController);

function TypesController($scope, $routeParams, typesService) {

    $scope.listTypes = [];

    init();

    function init() {
        console.log('aqui');

        typesService.getAllTypes()
            .then(updateTypeList)

        function updateTypeList(types) {
            $scope.listTypes = types.data;
        }
    }

};