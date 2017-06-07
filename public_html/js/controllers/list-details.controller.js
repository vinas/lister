app.controller('ListDetailsController', ListDetailsController);

function ListDetailsController($scope, $routeParams, listsService) {

    var listId = $routeParams.listId;

    $scope.list = [];

    $scope.removeItem = removeItem;
    $scope.addListItem = addListItem;

    init();

    function init() {
        getListItemsByListId();
    }

    function removeItem(itemId) {
        listsService.removeFromList(itemId)
            .then(removeFromList);

        function removeFromList() {
            for (i = 0; i < $scope.list.items.length; i++) {
                if ($scope.list.items[i].id == itemId) {
                    $scope.list.items.splice(i, 1);
                    break;
                }
            }
        }
    }

    function addListItem() {
        if ($scope.newListItem) listsService.addNewListItem(listId, $scope.newListItem).then(getListItemsByListId);
    }

    function getListItemsByListId() {
        listsService.getListById(listId)
            .then(updateList);

        function updateList(list) {
            $scope.newListItem = '';
            $scope.list = list.data;
        }
    }
}