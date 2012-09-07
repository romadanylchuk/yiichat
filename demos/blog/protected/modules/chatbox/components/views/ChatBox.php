<?php
/**
 * chatbox it the view for ChatBox wi
 *
 *
 * @author Roman Danylchuk <skype romarob2>
 * @link http://
 * @copyright Copyright 2008-2012 
 * @license http://
 */
?>
<!-- begin ChatBox !-->
<script type="text/javascript">
jQuery(document).ready(function($) {
    ChatBox.init('<?=$options['id']?>','<?=Yii::app()->createUrl('/chatbox/')?>');    
});
</script>

<div class ="chatbox  <?=$options['float']?>" id="<?=$options['id']?>" style="height: <?=$options['height']?>;                                    
                                     top: <?=$options['top']?>;<?=$options['float']?>:0px;">
    <div class="chatboxcontent <?=$options['float']?>" style="display:none; width: <?=$options['width']?>;">
        <div class="chatboxtitle">
           <?=$options['title']?><span class="chatboxuser"><?= $user?></span>
        </div>
        <div class="chatboxmain">
                <div class="chatboxmess">
                    
                </div>
                <div class="chatboxinput">
                    
                   <?php echo Chtml::hiddenField('username',$user); ?>
                   <?php echo Chtml::TextField('chatboxmessage','',array('class'=>"chatboxmessage",' size'=>'20','maxlength'=>'100')); ?>
                   <a href="#" class="chatboxsend">Send</a> 
                   
                </div>
        </div>
    </div>
    <div class="chatboxbtn <?=$options['float']?>" title="Open <?=$options['title']?>">
    </div>
    
</div>    
<!-- end ChatBox !-->

