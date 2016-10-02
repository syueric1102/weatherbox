<?php
        system("gpio mode 2 out");
	system("gpio mode 3 out");
        system("gpio write 3 1");
        system("gpio write 2 1");
        sleep(7);
        system("gpio write 2 0");
	system("gpio write 3 0");
?>
