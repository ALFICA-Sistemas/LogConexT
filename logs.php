<?php

{
//foreach (glob("images/*.jpg") as $large) 
foreach (glob("*Elec.log.html") as $filename) 
	{ 
	//echo "$filename\n";
	//echo str_replace("","","$filename\n");
	echo str_replace("","","<a href='$filename'>$filename</a><br>");
	}
}

?>
