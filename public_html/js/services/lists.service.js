app.factory('listsService', listsService);

function listsService($http) {

    var vm = this;

    vm.getListsByTypeId = getListsByTypeId;
    vm.getListById = getListById;
    vm.removeFromList = removeFromList;
    vm.addNewList = addNewList;
    vm.addNewListItem = addNewListItem;
    vm.eraseList = eraseList;

    return vm;

    function getListsByTypeId(typeId) {
        return $http.get('api/Lists/byTypeId/'+typeId);
    }

    function getListById(listId) {
        return $http.get('api/Lists/getListById/'+listId);
    }

    function removeFromList(itemId) {
        return $http.get('api/Lists/removeItem/'+itemId);
    }

    function addNewList(typeId, list) {
        return $http({
                url: 'api/Lists/saveList/',
                method: 'POST',
                data: {typeId: typeId, name: list},
                headers : {'Content-Type': 'application/x-www-form-urlencoded'}
            });
    }

    function addNewListItem(listId, listItem) {
        return $http({
                url: 'api/Lists/saveListItem/',
                method: 'POST',
                data: {listId: listId, name: listItem},
                headers : {'Content-Type': 'application/x-www-form-urlencoded'}
            });
    }

    function eraseList(listId) {
        return $http({
                url: 'api/Lists/removeListAndItems/',
                method: 'POST',
                data: {listId: listId},
                headers : {'Content-Type': 'application/x-www-form-urlencoded'}
            });
    }
};
