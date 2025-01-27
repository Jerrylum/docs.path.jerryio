# LemLib Tarball Format v0.5

## Overview

LemLib Tarball is an extension format for LemLib that enables handling multiple paths in a single file. This solves the limitation of LemLib's original path file format which only supports one path per file.

If you are not familiar with the original LemLib format, you can read the [LemLib v0.5 Documentation](LemLibFormatV0_5) to learn more.

## Prerequisites

Before getting started, make sure you have:

1. A PROS project with LemLib installed
2. The LemLibTarball template installed via PROS CLI:

```bash
pros c add-depot LemLibTarball https://raw.githubusercontent.com/Jerrylum/LemLibTarball/depot/depot.json
pros c apply LemLibTarball
```

## Creating Paths in PATH.JERRYIO

1. Open [PATH.JERRYIO](https://path.jerryio.com)
2. In the General Config Panel, select "LemLib Tarball v0.5" as your format
3. Create your paths as needed:
   - Left-click to add curved segments
   - Right-click to add straight segments
   - Drag control points to adjust paths
   - Use the Path Tree panel to manage multiple paths
4. Name your paths meaningfully in the Path Tree panel - you'll reference these names in your code
5. Configure path settings in the Path Config Panel:
   - Set minimum and maximum speeds
   - Adjust the point density if needed
6. Save the file to your project's `static` folder with a `.txt` extension

## Using the Paths in Code

1. First, include the necessary headers:

```cpp
#include "lemlib-tarball/api.hpp"
```

2. Import your path file as an asset. Add this line after your includes:

```cpp
// Replace my_paths.txt with your actual filename
// "." is replaced with "_" to overcome c++ limitations
ASSET(my_paths_txt);
```

3. Create a decoder instance to read your paths:

```cpp
// Create the decoder
lemlib_tarball::Decoder decoder(my_paths_txt);
```

4. Use the paths in your autonomous routine:

```cpp
void autonomous() {
  // Set initial robot pose (x, y, heading)
  chassis.setPose(0, 0, 0);
  // Follow paths by their names from PATH.JERRYIO
  // Parameters: path, lookahead distance, timeout
  chassis.follow(decoder["Path 1"], 15, 2000);
  chassis.follow(decoder["Path 2"], 15, 2000);
}
```

## Tips and Best Practices

1. **Naming Paths**: Use clear, descriptive names for your paths in PATH.JERRYIO as these names will be used in your code. Only ASCII characters (basically the characters you see on your keyboard) are supported.

2. **Path Organization**: Keep related paths together in the same file. For example, all paths for a specific autonomous routine can be in one file.

3. **Error Handling**: The decoder will **NOT** throw an exception if a path name doesn't exist. Instead, it will return an asset with a null pointer and emit the following error message:

```
[LemLib] ERROR: Path not found: does not exist
```

It is your responsibility to make sure you spell the path name correctly in PATH.JERRYIO and in your code. If you pass an asset with a null pointer to the `follow` function, the robot will ignore the path and emit the following error message:

```
[LemLib] ERROR: Failed to read path file! Are you using the right format? Raw line:
[LemLib] ERROR: No points in path! Do you have the right format? Skipping motion
```

You can read the terminal output by connecting your robot to the computer and running `pros terminal` in the console.

4. **File Management**:
   - Keep your path files in the `static` folder
   - Use descriptive filenames
   - Consider version control for your path files

## Common Issues and Solutions

1. **Path Not Found**

   - Double-check the path name in PATH.JERRYIO matches exactly what you're using in code
   - Path names are case-sensitive

2. **File Not Found**

   - Ensure the path file is in the `static` folder
   - Check that the ASSET macro matches your filename
   - Remember to use underscores instead of periods in the ASSET macro

3. **Robot Not Following Path Correctly**
   - Verify your chassis configuration matches what's in PATH.JERRYIO
   - Check that your initial pose is set correctly. The initial pose is the starting point of the path. The initial pose in your code should match the starting point of the path in PATH.JERRYIO and the starting position of the robot in the physical world.
   - Adjust the lookahead distance if needed

## Additional Resources

- [LemLib Documentation](https://lemlib.readthedocs.io/en/stable/index.html)
- [LemLibTarball GitHub Repository](https://github.com/Jerrylum/LemLibTarball)
