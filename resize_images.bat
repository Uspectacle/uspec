@echo off
setlocal enabledelayedexpansion

REM Remove old dir
rd /s /q apps\frontend\public\small\image

REM Adding the dir back
mkdir apps\frontend\public\small\image

REM Loop through all files in the directory
for %%i in (apps\frontend\public\image\*) do (
    set "input_file=%%i"
    set "output_file=apps\frontend\public\image\tiny\%%~nxi"
    
    REM Check if the file is not a .jpg or a .png file
    if "%%~xi" neq ".jpg" (
        if "%%~xi" neq ".png" (
            echo The file "!input_file!" need to be converted !
        )
    )
)

REM Loop through all image files in the directory
for %%i in (apps\frontend\public\image\*.jpg) do (
    set "input_file=%%i"
    set "output_file=apps\frontend\public\small\image\%%~nxi"
    ffmpeg -i "!input_file!" -vf scale=20:-1 "!output_file!" -hide_banner -loglevel error
)

REM Loop through all image files in the directory
for %%i in (apps\frontend\public\image\*.png) do (
    set "input_file=%%i"
    set "output_file=apps\frontend\public\small\image\%%~nxi"
    ffmpeg -i "!input_file!" -vf scale=20:-1 "!output_file!" -hide_banner -loglevel error
)

echo All images processed !

endlocal
