<?php

/**
 * DefaultController Class file
 *
 *
 * @author Roman Danylchuk <skype romarob2>
 * @link http://
 * @copyright Copyright &copy; 2008-2012 
 * @license http://
 */
/**
 * DefaultController is the class for ...
 *
 *
 */
class DefaultController extends Controller
{
    public function actionIndex()
    {
        // $this->render('index');
        
        $model  = new Message;
        $user = !Yii::app()->user->isGuest?Yii::app()->user->name:'Guest';
        if (isset($_POST['message'])){
           $model->message=$_POST['message'];
           $model->username=$user;
           $model->save();
        }
           
        $message_list = $model->getLast15();     
        $this->render('index',array('message_list'=>$message_list,'user'=>$user));
    }
}

?>
