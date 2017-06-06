<?php
/**
* Lists Factory Class
*
* @author Vinas de Andrade <vinas.andrade@gmail.com>
* @since 2017/06/06
* @version 1.17.0606
* @license SaSeed\license.txt
*/

namespace Application\Factory;

use SaSeed\Handlers\Mapper;
use SaSeed\Handlers\Exceptions;

use Application\Model\ListModel;

class ListsFactory extends \SaSeed\Database\DAO {

	private $db;
	private $queryBuilder;
	private $table = 'lists';

	public function __construct()
	{
		$this->db = parent::setDatabase('hostinger');
		$this->queryBuilder = parent::setQueryBuilder();
	}

	public function listAllByTypeIdOrderByName($typeId)
	{
		$list = [];
		try {
			$this->queryBuilder->from($this->table);
			$this->queryBuilder->where(['typeId', '=', $typeId]);
			$this->queryBuilder->orderBy('name');
			$list = $this->db->getRows($this->queryBuilder->getQuery());
			for ($i = 0; $i < count($list); $i++) {
				$list[$i] = Mapper::populate(
						new ListModel(),
						$list[$i]
					);
			}
		} catch (Exception $e) {
			print_r($e->getMessage());
			Exceptions::throwing(__CLASS__, __FUNCTION__, $e);
		} finally {
			return $list;
		}
	}

    public function getById($listId = false)
    {
        $list = new ListModel();
        try {
            $this->queryBuilder->from($this->table);
            $this->queryBuilder->where([
                    'id',
                    '=',
                    $listId
                ]);
            $list = Mapper::populate(
                    $list,
                    $this->db->getRow($this->queryBuilder->getQuery())
                );
        } catch (Exception $e) {
            Exceptions::throwing(__CLASS__, __FUNCTION__, $e);
        } finally {
            return $list;
        }
    }
}
