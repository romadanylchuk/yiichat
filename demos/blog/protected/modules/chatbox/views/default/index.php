<?php

/**
 * index is
 *
 *
 * @author Roman Danylchuk <skype romarob2>
 * @link http://
 * @copyright Copyright &copy; 2008-2012 
 * @license http://
 *
 * 
 */  

$this->widget('zii.widgets.CListView', array(
    'dataProvider' => $message_list,
    'itemView' => '_item',
    'separator'=>'',
    'summaryText'=>'',
    'enablePagination'=>false,
));
/*$this->widget('zii.widgets.CListView', array(
    'dataProvider' => $message_list,
    'itemView' => '_item',
));
*/
?>
