# LemLib v0.5

## What is LemLib?

LemLib is an open-source library designed for the VEX V5 robotics system. It includes common algorithms such as Odometry and Pure Pursuit.


## What is Odometry?

Odometry is an algorithm that tracks the position of a robot in 2D space. It is often used in autonomous periods to follow a path and perform tasks. This is done by using sensors to track the robot's movement and then using that data to calculate the robot's position. With LemLib, you can use internal motors encoders (IME) and/or tracking wheels and/or V5 Inertial Sensors (IMU).

If you want to learn more about Odometry, you can read the [Purdue Sigbots Wiki](https://wiki.purduesigbots.com/software/odometry).


## What is Pure Pursuit

Pure pursuit is a path following algorithm that works by drawing an imaginary circle around the robot, and then having the robot move toward the point where the path and the circle intersect. You can find more information about this algorithm [here](https://lemlib.github.io/LemLib/md_docs_tutorials_4_pure_pursuit.html#autotoc_md26).

## How PATH.JERRYIO Works with LemLib

LemLib includes some pre-written classes and functions to let you define your robot programmatically. Specifically, you can create a `lemlib::OdomSensors` instance to let you define the sensors you're using for odometry. After you define your drivetrain and chassis with the correct parameters that match your robot configuration in the physical world, LemLib will be able to use the odometry sensors to track the robot's position. This is crucial for the Pure Pursuit algorithm to work because it uses the robot's position to determine where to drive.

As a human, we need to tell the robot where to drive. This is done by creating a path. Theoretically, we can define a path using code, but this is impractical for most people. Instead, we should use a path editor/planner to create a path. This helps us create a path in a way that is easy to visualize and edit. PATH.JERRYIO is one of the path editor/planners that can generate path files in a format that can be read by LemLib.

After we create a path, we can download a "path file", which is a file that defines the path in a format that can be read by the robot. Back to the code, we can then import/reference the path file, and call `chassis.follow()` to make the robot follow the path.

Note that PATH.JERRYIO is responsible for creating the path file, while LemLib is responsible for reading the path file and using the data to control the robot.

Keep in mind that PATH.JERRYIO is a flexible multi-purpose path editor/planner. It is not just a path file generator for LemLib, so it can do more stuff than what LemLib can do. For example, you can set the target heading of every end control point on PATH.JERRYIO, but they are not used to generate the LemLib path file. This is because LemLib v0.5 is designed for tank drive robots and a tank drive does not have holonomic capabilities. As a result, heading values are not included in the path file as they are not needed. The heading values might be useful for visualizing the path and generating a path file for other libraries, but not for LemLib.

## Prerequisites

### Setting Up the Robot

In order to use pure pursuit, your robot must be capable of tracking its position in 2D space. LemLib supports odometry as a way of doing this, which can be used with a variety of sensors. You can use any combination of integrated motor encoders, rotation sensors, optical shaft encoders, or IMUs. While any combination can work, We recommend an odometry setup with three passive tracking wheels (using either rotation sensors or optical shaft encoders) or two passive tracking wheels and an IMU.

You can find more information on the chassis setup [here](https://lemlib.github.io/LemLib/md_docs_tutorials_2_setting_up_the_chassis.html#autotoc_md14).

### Setting Up the Software

First, you will need a PROS project, along with the LemLib template installed.

You can find instructions on how to install PROS [here](https://pros.cs.purdue.edu/v5/getting-started/), and how to install LemLib [here](https://lemlib.github.io/LemLib/md_docs_tutorials_1_getting_started.html#autotoc_md10).

Once you do that, you'll need to configure your chassis. You'll need to configure LemLib with the sensors you're using, as well as how far apart your tracking wheels are.

LemLib already has a good guide for this [here](https://lemlib.github.io/LemLib/md_docs_tutorials_2_setting_up_the_chassis.html).

## Making a Path

To get started, you need to [create a path](/docs/getting-started.mdx#create-the-first-path). Make sure to adjust the [speed](/docs/user-guides/concepts.md#bent-rate-and-speed-calculation) to your liking as well.

## Save the Path

Once your path is created, you'll need to [save](/docs/user-guides/user-interface.mdx#menu) it in the `static` folder of your PROS project. Make sure that the format is set to LemLib, otherwise LemLib will not be able to read your path files. Also make sure that the correct path is selected because LemLib cannot read multiple paths from a single file. 

## Following the Path

Please refer to the [LemLib documentation](https://lemlib.readthedocs.io/en/stable/tutorials/7_pure_pursuit.html) guide for more information on how to do this.