app.controller('ListsController', ListsController);

function ListsController($scope, $routeParams, $window, listsService) {

    var typeId = $routeParams.typeId;

    $scope.lists = [];
    $scope.typeName = $routeParams.typeName;

    $scope.openList = openList;
    $scope.addList = addList;
    $scope.eraseList = eraseList;

    init();

    function init() {
        getListsByTypeId();
    }

    function openList(listId) {
        $window.location.href = '#/list/'+listId;
    }

    function addList() {
        if ($scope.newList) listsService.addNewList(typeId, $scope.newList).then(getListsByTypeId);
    }

    function eraseList(list) {
        if (confirm('Deseja realmente excluir a lista "'+list.name+'"?'))
            listsService.eraseList(list.id).then(getListsByTypeId);
    }

    function getListsByTypeId() {
        listsService.getListsByTypeId(typeId)
            .then(updateLists);

        function updateLists(lists) {
            $scope.newList = '';
            $scope.lists = lists.data;
        }
    }
}