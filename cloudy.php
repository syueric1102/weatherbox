<?php
	system("gpio mode 3 out");
	system("gpio write 3 1");
	sleep(7);
	system("gpio write 3 0");
?>
