@echo off
setlocal enabledelayedexpansion

REM Remove old dir
rd /s /q apps\frontend\public\small

REM Adding the dir back
mkdir apps\frontend\public\small

REM Setting authorized format
set "FORMATS=;.jpg;.png;.gif;.jpeg;"

REM Process images in nested folders
for /r apps\frontend\public\image %%i in (*) do (
    set "input_file=%%i"
    set "relative_path=%%~pi"
    set "relative_path=!relative_path:*apps\frontend\public\=!"
    set "output_folder=apps\frontend\public\small\!relative_path!"
    set "output_file=!output_folder!%%~nxi"
    
    REM Create output folder if it doesn't exist
    if not exist "!output_folder!" mkdir "!output_folder!"

    REM Check if the file has an authorized format
    if "!FORMATS:;%%~xi;=!" neq "!FORMATS!" (
        REM Resize the image using ffmpeg
        ffmpeg -i "!input_file!" -vf scale=20:-1 "!output_file!" -hide_banner -loglevel error
    ) else (
        echo The file "!input_file!" needs to be converted!
    )
)

echo All images processed!

endlocal