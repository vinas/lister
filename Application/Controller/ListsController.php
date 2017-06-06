<?php
/**
* Lists Controller Class
*
* @author Vinas de Andrade <vinas.andrade@gmail.com>
* @since 2017/06/06
* @version 1.17.0606
* @license SaSeed\license.txt
*/

namespace Application\Controller;

use SaSeed\Output\RestView;
use SaSeed\Handlers\Exceptions;
use SaSeed\Handlers\Requests;

use Application\Service\ListsService;

/*use Application\Model\UserModel;

*/

class ListsController
{

	private $service;
	private $params;

	public function __construct()
	{
		$this->params = new Requests();
		$this->service = new ListsService();
	}

	public function index()
	{
		$this->listTypes();
	}

	public function listTypes()
	{
		try {
			$listTypes = $this->service->getListTypes();
		} catch (Exception $e) {
			Exceptions::throwing(__CLASS__, __FUNCTION__, $e);
		} finally {
			RestView::render($listTypes);
		}
	}

	public function byTypeId()
	{
		try {
			$params = $this->params->getParams();
			$listTypes = $this->service->getListsByTypeId($params[0] ? $params[0] : false);
		} catch (Exception $e) {
			Exceptions::throwing(__CLASS__, __FUNCTION__, $e);
		} finally {
			RestView::render($listTypes);
		}
	}

	public function getListById()
	{
		try {
			$params = $this->params->getParams();
			$list = $this->service->getListById($params[0] ? $params[0] : false);
		} catch (Exception $e) {
			Exceptions::throwing(__CLASS__, __FUNCTION__, $e);
		} finally {
			RestView::render($list);
		}
	}

	public function removeItem()
	{
		try {
			$params = $this->params->getParams();
			$this->service->eraseItem($params[0] ? $params[0] : false);
		} catch (Exception $e) {
			Exceptions::throwing(__CLASS__, __FUNCTION__, $e);
		}
	}
}
