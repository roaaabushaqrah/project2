<?php
echo"<h1 style='color:red;'>Question one </h1>";
$n=1900;
if ($n%400==0) {
    echo" laep year divied by 400";
  } elseif ($n %100==0) {
    echo "it is not leap year";
  } elseif ($n %4==0) {
    echo "it is  leap year dived by 4";
  } else{
      echo"not found";
  }

  echo"<hr>";
  echo"<h1 style='color:red;'>Question two </h1>";

  $temp=50;
  if($temp<=20){
    echo "it is a winter";
  }else{
    echo "it is asummer";
  }

  echo"<hr>";
  echo"<h1 style='color:red;'>Question three </h1>";

  $x=5;
  $y=5;
  if($x===$y){
    echo 3*($y+$x);
  }else{
    echo($x+$y);
  }

  echo"<hr>";
  echo"<h1 style='color:red;'>Question four </h1>";
  $n=300;
  $c=100;
  $b=$n-$c;
  if($n>100){
    echo 3*($b);

  }else {
    echo $b;
  }

  echo"<hr>";
  echo"<h1 style='color:red;'>Question five </h1>";
  $int1=10;
  $int2=10;
  if($int1==30|| $int2==30||$int1+$int2==30){
    echo"true";
  }else{
echo"false";
  }

  echo"<hr>";
  echo"<h1 style='color:red;'>Question six </h1>";

  $var1=89;
  if(abs($var1-100)<=10||abs($var1-200)<=10){
    echo "true";
  }else{
    echo"false";
  }


  echo"<hr>";
  echo"<h1 style='color:red;'>Question seven </h1>";
$pos=35;
if($pos%3==0){
  echo "it is multiple 3";
}elseif($pos%7==0){
  echo "it is multiple 7";
} 
  






