<?php
	system("gpio mode 6 out");
	system("gpio mode 2 out");
	system("gpio mode 3 out");
	system("gpio write 2 1");
	system("gpio write 3 1");
	system("gpio write 6 1");
	for ($x = 0; $x <= 3; $x++) {
	    sleep(0.3);
		system("gpio write 6 0");
		sleep(0.3);
		system("gpio write 6 1");
		sleep(0.3);
		system("gpio write 6 0");
		sleep(4);
	} 
	system("gpio write 6 0");
	system("gpio write 2 0");
	system("gpio write 3 0");
	system("GPIO.cleanup()");
?>
