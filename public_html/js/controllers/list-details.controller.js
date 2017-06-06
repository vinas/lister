app.controller('ListDetailsController', ListDetailsController);

function ListDetailsController($scope, $routeParams, listsService) {

    var listId = $routeParams.listId;

    $scope.list = [];

    $scope.removeItem = removeItem;

    init();

    function init() {
        listsService.getListById(listId)
            .then(updateList)

        function updateList(list) {
            $scope.list = list.data;
        }
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
};