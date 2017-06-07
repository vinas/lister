app.controller('MenuController', MenuController);

function MenuController($scope, typesService) {

    $scope.listTypes = [];

    init();

    function init() {
        typesService.getAllTypes()
            .then(updateTypeList);

        function updateTypeList(types) {
            $scope.listTypes = types.data;
        }
    }

}