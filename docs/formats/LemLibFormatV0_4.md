# LemLib Format v0.4

The paths created by PATH.JERRYIO can be followed with LemLib's pure pursuit algorithm.

## What is Pure Pursuit

Pure pursuit is a path following algorithm that works by drawing an imaginary circle around the robot, and then having the robot move toward the point where the path and the circle intersect. You can find more information about this algorithm [here](https://lemlib.github.io/LemLib/md_docs_tutorials_4_pure_pursuit.html#autotoc_md26).

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

To get started, you need to [create a path](Getting-Started#create-the-first-path). Make sure to adjust the [speed](Concepts#bent-rate-and-speed-calculation) to your liking as well.

## Downloading

Once your path is created, you'll need to [download](/docs/user-guides/user-interface.mdx#menu) it. Make sure that the format is set to LemLib, otherwise LemLib will not be able to read your path files. Also make sure that the correct path is selected because LemLib cannot read multiple paths from a single file. 

## Following the Path

Once you've downloaded the path file, put it on a microSD card. Note that the SD card must have a FAT32 file system, otherwise the brain will not be able to read it. Once you've done this, insert the microSD into your robot's brain.

You can then use the chassis's follow method to follow the path.

```cpp
// create the chassis
lemlib::Chassis chassis(drivetrain, lateralController, angularController, sensors);

void autonomous() {
    // file name: path.txt
    // timeout: 2000 ms
    // lookahead distance: 15 inches
    chassis.follow("path.txt", 2000, 15);
}
```
