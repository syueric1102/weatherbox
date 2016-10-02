<?php
	system("gpio mode 1 out");
	system("gpio mode 2 out");
	system("gpio mode 3 out");
	system("gpio write 2 1");
	system("gpio write 3 1");
	system("gpio write 1 1");
	sleep(0.3);
	system("gpio write 1 0");
	sleep(0.3);
	system("gpio write 1 1");
	sleep(0.3);
	system("gpio write 1 0");
	sleep(4);
	system("gpio write 1 0");
	system("gpio write 2 0");
	system("gpio write 3 0");
?>
