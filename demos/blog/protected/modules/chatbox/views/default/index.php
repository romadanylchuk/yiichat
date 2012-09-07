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
foreach ($message_list as $data){
?>    
<div class="chatboxitem">
    <table class="chatboxitemtable">
        <tr>
            <td class="chatboxitemtime"><?=$data->time?></td>
            <td class="chatboxitemname"><?=$data->username?></td>
        </tr>
    </table>
    <div class="chatboxitemtext">
            <td><?=$data->message?></td>
    </div>    
</div> 
<?php
}

?>
