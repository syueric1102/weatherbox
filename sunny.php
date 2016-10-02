<?php
	system("gpio mode 6 out");
	system("gpio write 6 1");
	sleep(7);	
	system("gpio write 6 0");
?>
