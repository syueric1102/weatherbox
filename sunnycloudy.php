<?php
	system("gpio mode 1 out");
	system("gpio mode 3 out");
	system("gpio write 1 1");
	system("gpio write 3 1");
	sleep(7);
	system("gpio write 1 0");
	system("gpio write 3 0");
?>
