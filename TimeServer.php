<?php

/**
 * Created by PhpStorm.
 * User: Hp
 * Date: 8/10/2017
 * Time: 6:57 AM
 */
class TimeServer
{

    /*
     * GET DATE AND TIME
     */
    public function sendDateTime()
    {
        $datetime=new DateTime('now',new DateTimeZone('Africa/Nairobi'));

        echo $datetime->format('Y-m-d H:i:s a');;
    }

}

//SEND DATE AND TIME
$timesever=new TimeServer();
$timesever->sendDateTime();