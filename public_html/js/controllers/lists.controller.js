app.controller('ListsController', ListsController);

function ListsController($scope, $routeParams, $window, listsService) {

    var typeId = $routeParams.typeId;

    $scope.lists = [];
    $scope.typeName = $routeParams.typeName;

    $scope.openList = openList;

    init();

    function init() {
        listsService.getListsByTypeId(typeId)
            .then(updateLists)

        function updateLists(lists) {
            $scope.lists = lists.data;
        }
    }

    function openList(listId) {
        $window.location.href = '#/list/'+listId;
    }

};