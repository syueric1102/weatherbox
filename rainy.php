<?php
	system("gpio mode 2 out");
	system("gpio write 2 1");
	sleep(7);
	system("gpio write 2 0");
?>
