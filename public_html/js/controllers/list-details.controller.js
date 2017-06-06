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
        console.log('item to remove: ', itemId);
    }
};